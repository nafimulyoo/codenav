"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BrainCircuit, Lightbulb, Route, ScrollText, MessageSquareHeart, Headset, Book, WandSparkles, Zap, Users } from "lucide-react"
import CodeNavIcon from "@/components/code-nav-icon";
import {
  Laptop,
  Network,
  ShieldCheck,
  BarChart3,
  Workflow,
  Brain,
  PencilRuler,
  ListChecks,
  Bot,
  View,
  CodeXml,
  Database,
} from "lucide-react";

import Link from "next/link";
import { useUserCategories } from "@/hooks/use-user-data";
import { Separator } from "@radix-ui/react-dropdown-menu";
export default function Home() {
  const {activeCategories, toggleCategory}: any = useUserCategories();

  return (
    <div className="min-h-screen text-foreground">
      <main className="ml-20 p-6 space-y-8">
        <section>
          <h1 className="text-3xl font-bold mt-4">Career Clinic</h1>
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <Card className="flex flex-col md:flex-row">
              <Image
                src="/dashboard/interview-preparation.webp"
                height={400}
                width={640}
                alt="Interview Preparation"
                className="w-full h-32 md:w-1/3 object-cover rounded-lg my-auto ml-2"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">Interview Preparation</h2>
                <p className="text-sm text-muted-foreground">
                  Get instant, AI-powered feedback on the delivery of your
                  answer when you practice.
                </p>
                <Link href="/jobs/clinic/interview">
                  <Button className="mt-2">Prepare Your Interview with AI</Button>
                </Link>
              </div>
            </Card>
            <Card className="flex flex-col md:flex-row">
              <Image
                src="/dashboard/cv-clinic.jpg"
                height={400}
                width={640}
                alt="CV Helper"
                className="w-full h-32 md:w-1/3 object-cover rounded-lg my-auto ml-2"
              />
              <div className="p-4">
                
                <h2 className="text-xl font-semibold">CV Helper</h2>
                <p className="text-sm text-muted-foreground">
                  Get instant, AI-powered feedback on the effectiveness of your
                  Curriculum Vitae.
                </p>
                <Link href="/jobs/clinic/cv">
                <Button className="mt-2">Get Feedback with AI</Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
          <div className="border-b-4 border-muted-foreground opacity-10 pt-5">
          </div>
        <section>
          <h1 className="text-3xl font-bold mt-8">Your Interests</h1>
          <div className="grid lg:grid-cols-2 mt-8 mb-10">
          <div className="space-y-6 ">
            <h1 className="text-md font-semibold tracking-tighter sm:text-lg md:text-xl xl:text-2xl ">
            Try our Interest Finder
            </h1>
            <div>
                <p className="max-w-[600px] text-foreground md:text-lg font-semibold -mt-6">Powered by AI <BrainCircuit className="ml-1 inline-block pb-1 h-12" /> </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-md mt-0 pt-0">
          Discover your professional interests with our AI-powered interest finder, guiding you towards the most suitable career path.
          </p>
          <Link href="/learn/find-interest">
            <Button className="mt-2">Find Your Interest with AI</Button>
          </Link>
          </div>
          <Image
            src="/home/interest-finder.png"
            width={640}
            height={1280}
            alt="Hero Image"
            className="mx-auto overflow-hidden rounded-xl object-cover aspect-video shadow-sm drop-shadow-sm shadow-gray-200 ml-4"
          />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 md:grid-cols-4 lg:grid-cols-6">
            <Button
              variant={
                activeCategories.includes("Software Development")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("Software Development")}
            >
              <Laptop className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>Software Development</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("Network and Infrastructure")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("Network and Infrastructure")}
            >
              <Network size={18} className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>Network and Infrastructure</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("Cyber Security")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("Cyber Security")}
            >
              <ShieldCheck className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>Cyber Security</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("Data Science")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("Data Science")}
            >
              <BarChart3 className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>Data Science</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("DevOps") ? "default" : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("DevOps")}
            >
              <Workflow className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>DevOps</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("AI and Machine Learning")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("AI and Machine Learning")}
            >
              <Brain className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>AI and Machine Learning</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("UI/UX Design")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("UI/UX Design")}
            >
              <PencilRuler className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>UI/UX Design</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("IT Management")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("IT Management")}
            >
              <ListChecks className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>IT Management</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("Robotics and IoT")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("Robotics and IoT")}
            >
              <Bot className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>Robotics and IoT</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("VR and AR") ? "default" : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("VR and AR")}
            >
              <View className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>VR and AR</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("Programming and Scripting")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("Programming and Scripting")}
            >
              <CodeXml className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>Programming and Scripting</span>
              </div>
            </Button>
            <Button
              variant={
                activeCategories.includes("Database Management")
                  ? "default"
                  : "outline"
              }
              className="flex flex-col items-center h-24"
              onClick={() => toggleCategory("Database Management")}
            >
              <Database className="w-8 h-8 mb-2" />
              <div
                className="w-full text-center leading-tight text-sm"
                style={{ whiteSpace: "normal" }}
              >
                <span>Database Management</span>
              </div>
            </Button>
          </div>
        </section>
                <div className="border-b-4 border-muted-foreground opacity-10 pt-5">
          </div>
        <section>
        <h1 className="text-3xl font-bold mt-8">Learning Roadmap</h1>
          <div className="grid lg:grid-cols-2 mt-8">
          <div className="space-y-6 ">
            <h1 className="text-md font-semibold tracking-tighter sm:text-lg md:text-xl xl:text-2xl ">
            Try our Learning Roadmap Generator
            </h1>
            <div>
                <p className="max-w-[600px] text-foreground md:text-lg font-semibold -mt-6">Powered by AI <BrainCircuit className="ml-1 inline-block pb-1 h-12" /> </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-md mt-0 pt-0 mb-6">
            Our AI creates a personalized learning roadmap tailored to your career goals and interests. ensuring efficient skill development.
            </p>
                      <Link href="/learn/roadmap/generator">
            <Button className="mt-2">Generate Personalized Roadmap with AI</Button>
          </Link>
          </div>
          <Image
            src="/home/roadmap-generator.png"
            width={640}
            height={1280}
            alt="Hero Image"
            className="mx-auto overflow-hidden rounded-xl object-cover aspect-video shadow-sm drop-shadow-sm shadow-gray-200 ml-4"
          />
          </div>
          <h2 className="text-md font-semibold tracking-tighter sm:text-lg md:text-xl xl:text-2xl mt-8">
            Featured Learning Roadmap <span className="text-muted-foreground">(Not Implemented Yet)</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <Image
                src="/dashboard/cyber-security-expert.jpg"
                height={400}
                width={640}
                alt="Cyber Security Expert"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JE</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">John Eames</h3>
                <p className="text-sm text-muted-foreground">
                  Cyber Security Expert
                </p>
                <p className="text-xs text-muted-foreground">12h 53m · 4.9/5</p>
                
              </div>
            </Card>
            <Card>
              <Image
                src="/dashboard/devops-intermediate.jpg"
                height={400}
                width={640}
                alt="DevOps Intermediate"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">Curt Rits</h3>
                <p className="text-sm text-muted-foreground">
                  DevOps Intermediate
                </p>
                <p className="text-xs text-muted-foreground">5h 59m · 4.3/5</p>
                
              </div>
            </Card>
            <Card>
              <Image
                src="/dashboard/ai-and-machine-learning.jpg"
                height={400}
                width={640}
                alt="Project Management"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">Jane Doe</h3>
                <p className="text-sm text-muted-foreground">
                  AI and Machine Learning
                </p>
                <p className="text-xs text-muted-foreground">9h 23m · 4.6/5</p>
                
              </div>
            </Card>
            <Card>
              <Image
                src="/dashboard/project-management.jpg"
                height={400}
                width={640}
                alt="Project Management"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="p-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>IB</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">Ian Brown</h3>
                <p className="text-sm text-muted-foreground">
                  Project Management
                </p>
                <p className="text-xs text-muted-foreground">10h 17m · 4.1/5</p>
                
              </div>
            </Card>
          </div>
        </section>
                <div className="border-b-4 border-muted-foreground opacity-10 pt-5">
          </div>
        <section>
          <h2 className="text-3xl font-bold mt-8">My Learning <span className="text-muted-foreground">(Not Implemented Yet)</span></h2>
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <Card className="flex flex-col md:flex-row">
              <Image
                src="/dashboard/agile-project-management.jpeg"
                height={400}
                width={640}
                alt="Agile Project Management"
                className="w-full h-32 md:w-1/3 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Agile Project Management
                </h3>
                <p className="text-sm text-muted-foreground">Clara Manning</p>
                <Progress value={69} className="mt-2 w-full" />
                <p className="text-xs text-muted-foreground">69% complete</p>
              </div>
            </Card>
            <Card className="flex flex-col md:flex-row">
              <Image
                src="/dashboard/python-fundamentals.webp"
                height={400}
                width={640}
                alt="Python Fundamentals"
                className="w-full h-32 md:w-1/3 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Python Fundamentals</h3>
                <p className="text-sm text-muted-foreground">Chris Kinley</p>
                <Progress value={27} className="mt-2 w-full" />
                <p className="text-xs text-muted-foreground">27% complete</p>
              </div>
            </Card>
          </div>
          <Button className="mt-4">See All</Button>
        </section>
      </main>
    </div>
  );
}
