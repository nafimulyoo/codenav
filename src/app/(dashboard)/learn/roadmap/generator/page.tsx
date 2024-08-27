'use client';

import React, { useState } from 'react';
import ReactFlow, { Controls, Background, Handle, Position } from 'reactflow';
import { ContentLayout } from "@/app/(dashboard)/components/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import 'reactflow/dist/style.css';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type Resource = {
  type: string;
  link: string;
  title: string;
};

type NodeData = {
  label: string;
  resources: Resource[];
  reasoning: string;
};

type Node = {
  id: string;
  data: NodeData;
  position: { x: number; y: number };
  reasoning: string;
};

type Edge = {
  id: string;
  source: string;
  target: string;
  reasoning: string;
};

type Roadmap = {
  nodes: Node[];
  edges: Edge[];
};

// Custom Node Component
const CustomNode = ({ data }: { data: NodeData }) => {
  const [showResources, setShowResources] = useState(false);

  const toggleResources = () => setShowResources(!showResources);

  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <Handle type="target" position={"top" as Position} style={{ background: '#555', top: -5 }} />
      <div
        style={{
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'inline-block',
          textAlign: 'center',
        }}
        onClick={toggleResources}
      >
        {data.label}
      </div>
      {showResources && (
        <div
          style={{
            marginTop: '10px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
            position: 'absolute',
            top: 0,
            left: '110%',
            width: 'max-content',
            zIndex: 1,
          }}
        >
          <ul>

            <li>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginLeft: '4px' }}>{data.reasoning}</span>
              </div>
            </li>
            {data.resources.map((resource, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Badge style={{ marginRight: '8px' }}>{resource.type}</Badge>
                    <span>{resource.title}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Handle type="source" position={'bottom' as Position} style={{ background: '#555', bottom: -5 }} />
    </div>
  );
};


const applyLayout = (roadmap: Roadmap): Roadmap => {
  const levelHeight = 150; // Vertical spacing between levels
  const nodeWidth = 150; // Approximate width of a node
  const horizontalSpacing = 100; // Horizontal spacing between nodes on the same level
  const nodesByLevel: { [key: string]: Node[] } = {};

  // Determine levels for each node (based on edges)
  roadmap.nodes.forEach(node => {
    const level = getNodeLevel(node.id, roadmap.edges);
    if (!nodesByLevel[level]) {
      nodesByLevel[level] = [];
    }
    nodesByLevel[level].push(node);
  });

  // Calculate positions
  let yOffset = 0;
  Object.keys(nodesByLevel).sort((a, b) => parseInt(a) - parseInt(b)).forEach(level => {
    const nodesInLevel = nodesByLevel[level];
    const totalWidth = nodesInLevel.length * nodeWidth + (nodesInLevel.length - 1) * horizontalSpacing;
    let xOffset = -(totalWidth / 2);

    nodesInLevel.forEach(node => {
      node.position = { x: xOffset + nodeWidth / 2, y: yOffset };
      xOffset += nodeWidth + horizontalSpacing;
    });

    yOffset += levelHeight;
  });

  return roadmap;
};

const getNodeLevel = (nodeId: string, edges: Edge[]): number => {
  const incomingEdges = edges.filter(edge => edge.target === nodeId);
  if (incomingEdges.length === 0) {
    return 0;
  }
  const levels = incomingEdges.map(edge => getNodeLevel(edge.source, edges));
  return Math.max(...levels) + 1;
};


// Home Page Component
export default function HomePage() {
  const [roadmap, setRoadmap] = useState<Roadmap>({ nodes: [], edges: [] });
  const [goal, setGoal] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://generatelearningroadmap-jcwlynaixa-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://codenav.vercel.app/',
        },
        body: JSON.stringify({ message: goal }),
      });

      const data = await response.json();
      console.log(data)

      const layouttedRoadmap = applyLayout(data.roadmap);
      setRoadmap(layouttedRoadmap);

    } catch (error) {
      console.error('Error generating roadmap:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentLayout title="Home">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/home">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbLink asChild>
            <Link href="/learn">Learning</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbLink asChild>
            <Link href="/learn/roadmap">Roadmap</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>AI Generator</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mx-12 mt-12 w-full max-w-5xl">
        <h2 className="text-4xl mt-12 font-bold">AI-Generated Learning Roadmap</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="goal">What do you want to learn?</Label>
            <Input
              id="goal"
              placeholder="What do you want to learn?"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="mt-2">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Generate Roadmap
          </Button>
        </form>
        <div className="mt-8 reactflow-wrapper" style={{ height: '800px', border: '1px solid #ddd' }}>
          <ReactFlow 
            nodes={roadmap.nodes.map(node => ({ ...node, type: 'customNode' }))}
            edges={roadmap.edges}
            nodeTypes={{ customNode: CustomNode }}
            fitView
          >
            <Controls />
            <Background />
          </ReactFlow>
        </div>
      </div>
    </ContentLayout>
  );
}
