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

import { Course } from "@/app/(dashboard)/learn/course/components/course";
import { courses } from "@/app/data/course_data";

import { ContentLayout } from "@/app/(dashboard)/components/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";




export default function ClinicPage() {
  return (
    <ContentLayout title="Career Clinic">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/home">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/home">Jobs</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <BreadcrumbPage>Career Clinic</BreadcrumbPage>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="min-h-screen text-foreground">
      <main className="ml-20 p-6 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mt-8">Interview Preparation</h1>
          <div className="grid lg:grid-cols-2 mt-8">
          <div className="space-y-6 ">
            <h1 className="text-md font-semibold tracking-tighter sm:text-lg md:text-xl xl:text-2xl ">
            Try our Interview Trainer
            </h1>
            <div>
                <p className="max-w-[600px] text-foreground md:text-lg font-semibold -mt-6">Powered by AI <BrainCircuit className="ml-1 inline-block pb-1 h-12" /> </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-md mt-0 pt-0 mb-6">
            Get instant, AI-powered feedback on the delivery of your answer when you practice.
            </p>
                      <Link href="/learn/course">
            <Button className="mt-2">Prepare Your Interview with AI</Button>
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
          </section>
          <div className="border-b-4 border-muted-foreground opacity-10 pt-5">
          </div>

          <section>
        <h1 className="text-3xl font-bold mt-8">CV Helper</h1>
          <div className="grid lg:grid-cols-2 mt-8">
          <div className="space-y-6 ">
            <h1 className="text-md font-semibold tracking-tighter sm:text-lg md:text-xl xl:text-2xl ">
            Try our CV Reviewer
            </h1>
            <div>
                <p className="max-w-[600px] text-foreground md:text-lg font-semibold -mt-6">Powered by AI <BrainCircuit className="ml-1 inline-block pb-1 h-12" /> </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-md mt-0 pt-0 mb-6">
            Get instant, AI-powered feedback on the effectiveness of your Curriculum Vitae.
            </p>
                      <Link href="/learn/course">
            <Button className="mt-2">Get Feedback with AI</Button>
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
          </section>
 
      </main>
    </div>
    </ContentLayout>
  );
}
