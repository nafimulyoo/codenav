import {
  Bookmark,
  BookmarkX,
  Text,
  Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Course, courses } from "@/app/data/course_data"
import Link from "next/link";

interface CourseDisplayProps {
  course: Course | null
}

export function CourseDisplay({ course }: CourseDisplayProps) {
  const today = new Date()

  return (
    <div>
      {course ? (
        <div>
          <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
        {
              course?.saved ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" disabled={!course}>
                      <Bookmark className="h-4 w-4" />
                      <span className="sr-only">Save</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Save</TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" disabled={!course}>
                        <BookmarkX className="h-4 w-4" />
                        <span className="sr-only">Unsave</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Unsave</TooltipContent>
                  </Tooltip>
                </Tooltip>
              )
            }
        </div>
        <Separator orientation="vertical" className="mx-2 h-6 my-2" />
      </div>
      <Separator />
        <div className="grid gap-6 md:grid-cols-[1fr_auto] my-8 mx-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold">{course?.title}</h2>
              <p className="text-muted-foreground">
                {course?.description}
              </p>
            </div>
            <div className="flex flex-wrap">
                {course?.labels.map((label: any) => (
                  <Badge variant="secondary" className="mr-8" key={label}>
                    {label}
                  </Badge>
                ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-muted-foreground" />
                <span>{course?.teacher}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-muted-foreground" />
                <span>{course?.duration}</span>
              </div>
            </div>
          </div>
        </div>
        {/* if course id is 1, show this */}
        {course?.id === 1 ? (
          <div className="px-6 text-center w-full ">
            <Link href="/learn/course/1">
              <Button className="w-full">View Course Demo</Button>
            </Link>
          </div>
          ) : (
          <div className="px-6 text-center w-full ">
            <Button className="w-full" disabled={true}>View Course Demo</Button>
          </div>
          )
        }
          
        <div className="border-t border-border pt-6 mt-8 mx-8" >
          <h3 className="text-xl font-bold">Course Contents</h3>
          <div className="grid gap-4 mt-4">
          {course?.content.map((content: any) => (
                  <div className="flex items-start gap-4" key={content.step}>
                  <div className="bg-primary rounded-md p-2 flex items-center justify-center">
                    
                  {
                    content.type == "text" && (
                    <Text className="h-6 w-6 text-primary-foreground" />
                  ) 
                  }
                  {
                    content.type == "video" && (
                    (<Video className="h-6 w-6 text-primary-foreground" />)
                  )
                  }
                  </div>
                  <div>
                    <h4 className="text-md font-medium">{content.title}</h4>
                    <p className="text-muted-foreground">
                      {content.description}
                    </p>
                  </div>
                </div>
                ))}
  
            
          </div>
        </div>
      </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  )
}

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}