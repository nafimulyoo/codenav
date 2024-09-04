"use client"

import * as React from "react"
import {
  Search,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { JobDisplay } from "@/app/(dashboard)/jobs/search/components/job-display"
import { JobList } from "@/app/(dashboard)/jobs/search/components/job-list";
import { type Job } from "@/app/data/job_data";
import { useJob } from "@/app/(dashboard)/jobs/search/use-job";

interface JobProps {
  jobs: Job[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Job({
  jobs,
  defaultLayout = [440, 655],
  defaultCollapsed = false,
}: JobProps) {
  const [job] = useJob()

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full max-h-[540px] items-stretch"
      >
        <ResizablePanel defaultSize={defaultLayout[0]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Jobs Search <span className="text-muted-foreground">(Not Implemented Yet)</span></h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All job
                </TabsTrigger>
                <TabsTrigger
                  value="saved"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Saved
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              <JobList items={jobs} />
            </TabsContent>
            <TabsContent value="saved" className="m-0">
              <JobList items={jobs.filter((item) => !item.saved)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]}>
          <JobDisplay
            job={jobs.find((item) => item.id === job.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}