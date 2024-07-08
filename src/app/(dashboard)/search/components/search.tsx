"use client"

import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

import Image from "next/image"

export default function Search() {
  return (
    <div className="w-full mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">Search</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <span>Courses</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem>Courses</DropdownMenuItem>
            <DropdownMenuItem>Jobs</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses and jobs."
            className="pl-10 pr-16 h-10 w-full rounded-md bg-muted focus:ring-primary focus:border-primary"
          />
        </div>
        <Button className="h-10 px-6">Search</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link href="/course">
        <Card className="group">

          <Image
            src="/placeholder.png"
            alt="Course image"
            width={400}
            height={225}
            className="rounded-t-md object-cover w-full h-40 group-hover:opacity-80 transition-opacity"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Introduction to Web Development</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4 inline-block mr-1" />
                <span>4 weeks</span>
              </div>
              <div className="text-sm font-medium text-primary">$99</div>
            </div>
          </CardContent>
        </Card>
        </Link>

        <Link href="/course">
        <Card className="group">
          
          <Image
            src="/placeholder.png"
            alt="Job image"
            width={400}
            height={225}
            className="rounded-t-md object-cover w-full h-40 group-hover:opacity-80 transition-opacity"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Frontend Developer</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              Seeking an experienced frontend developer to join our growing team.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                <LocateIcon className="w-4 h-4 inline-block mr-1" />
                <span>Remote</span>
              </div>
              <div className="text-sm font-medium text-primary">$80k - $100k</div>
            </div>
          </CardContent>
        </Card>
        </Link>
        <Link href="/course">
        <Card className="group">
          
          <Image
            src="/placeholder.png"
            alt="Course image"
            width={400}
            height={225}
            className="rounded-t-md object-cover w-full h-40 group-hover:opacity-80 transition-opacity"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Advanced Python Programming</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              Dive deep into the world of Python and learn advanced programming techniques.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                <CalendarIcon className="w-4 h-4 inline-block mr-1" />
                <span>8 weeks</span>
              </div>
              <div className="text-sm font-medium text-primary">$149</div>
            </div>
          </CardContent>
        </Card>
        </Link>
        <Link href="/course">
        <Card className="group">
          
          <Image
            src="/placeholder.png"
            alt="Job image"
            width={400}
            height={225}
            className="rounded-t-md object-cover w-full h-40 group-hover:opacity-80 transition-opacity"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">UI/UX Designer</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              Seeking a talented UI/UX designer to join our product team.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                <LocateIcon className="w-4 h-4 inline-block mr-1" />
                <span>San Francisco</span>
              </div>
              <div className="text-sm font-medium text-primary">$80k - $100k</div>
            </div>
          </CardContent>
        </Card>
        </Link>
      </div>
    </div>
  )
}

function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function LocateIcon(props: any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}