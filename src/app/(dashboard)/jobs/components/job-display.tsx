import {
  Archive,
  MoreVertical,
  Trash2,
} from "lucide-react"

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import jobs, { Job } from "@/app/data/job_data"
import Image from "next/image"
import { Slot } from "@radix-ui/react-slot"

interface JobDisplayProps {
  job: Job | null
}

export function JobDisplay({ job }: JobDisplayProps) {
  const today = new Date()

  return (
    <ScrollArea className="h-full">
    <div className="flex h-lvh flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!job}>
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!job}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Move to trash</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" disabled={!job}>
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mark as unread</DropdownMenuItem>
            <DropdownMenuItem>Star thread</DropdownMenuItem>
            <DropdownMenuItem>Add label</DropdownMenuItem>
            <DropdownMenuItem>Mute thread</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />
      {job ? (
      <div>
        <CardHeader className="flex items-center gap-4">
          <Image src="/placeholder.svg" width={48} height={48} alt="Tech Innovators Inc" className="rounded-full" />
          <div>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription>{job.companyName}</CardDescription>
          </div>
        </CardHeader>
        <Separator className="my-2" />
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Employment Type</div>
              <div>{job.employmentType}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Application Deadline</div>
              <div>{job.deadline}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Location</div>
              <div>{job.location}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Work Model</div>
              <div>{job.locationType}</div>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex flex-wrap gap-3">
            <Button variant="outline">Am I a good fit for this job?</Button>
            <Button variant="outline">How can I best position myself for this job?</Button>
            <Button variant="outline">Tell me more about {job.companyName}</Button>
          </div>
          <Button>Apply Now</Button>
          <Separator className="my-2" />
          <div>
            <div className="text-sm font-medium text-muted-foreground">Required Skills</div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary">Java</Badge>
              {job.skills.length ? (
                <div>
                {job.skills.map((skill) => (
                  <Badge variant="secondary" key={skill}>
                    {skill}
                  </Badge>
                ))}
                </div>
            ) : null}
            </div>
          </div>
          <Separator className="my-2" />
          <div>
            <div className="text-sm font-medium text-muted-foreground">Job Description</div>
            <p>
              {job.description}
            </p>
          </div>
          <Separator className="my-2" />
          <div>
            <div className="text-sm font-medium text-muted-foreground">About {job.companyName}</div>
            <p>
              {job.aboutCompany}
            </p>
          </div>
        </CardContent>
        </div>
        
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
    </ScrollArea>
  )
}