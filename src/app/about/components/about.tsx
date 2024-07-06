
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"
import { Fullscreen } from "lucide-react"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image src="/placeholder.png" alt="Hero Image" width={1200} height={800} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/80 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-3xl px-4">
            <h1 className="text-4xl sm:text-6xl font-bold">About Codenav</h1>
            <p className="text-xl">
              CodeNav is All-in-One AI solution for beginner and professional developers to learn and improve their coding skills and elevate their career.
            </p>
            <Button variant="default" asChild>
                  <Link href="javascript:history.back()">
                    Back
                    <ArrowRightIcon className="ml-2" />
                  </Link>
              </Button>
          </div>
        </div>
      </section>
      <h1 className="text-xl sm:text-4xl font-bold text-center mt-20">Meet Our Team</h1>
      <h2 className="text-4xl sm:text-6xl font-bold text-center mt-2">Double Team</h2>
      <div className="object-center flex flex-col items-center">
        <Image src="/double-team.png" alt="Double Team" width={800} height={500} className="object-cover object-center rounded-3xl mt-12 shadow-xl" />
      </div>
      <Separator className="w-20 h-1 bg-primary mt-12 mb-12 mx-auto" />
      <h1 className="text-xl sm:text-4xl font-bold text-center mt-2">People Behind Double Team</h1>
      <section className="container mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mx-24">
          <div className="flex flex-col items-center text-center">
          <Avatar className="mb-6 w-48 h-48">
              <AvatarImage src="/nafi-profile.png" />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-bold text-primary">Nafi Mulyo Kusumo</h3>
            <p className="text-muted-foreground">Senior Software Engineer</p>
            <p className="mt-4 text-muted-foreground">
              John is a seasoned software engineer with over 10 years of experience in the industry. He specializes in
              building scalable and efficient web applications using the latest technologies.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <GitlabIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="mb-6 w-48 h-48">
              <AvatarImage src="/aul-profile.png" />
              <AvatarFallback>RA</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-bold text-primary">Rizky Aulia Rahayu</h3>
            <p className="text-muted-foreground">Lead Software Architect</p>
            <p className="mt-4 text-muted-foreground">
              Jane is a highly skilled software architect with a passion for building innovative and user-friendly
              applications. She specializes in designing scalable and maintainable architectures.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkedinIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <GitlabIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container relative">
          <section className="mx-auto flex max-w-[980px] flex-col items-center pt-20">
            <span className="max-w-[750px] text-center text-lg font-light text-foreground italic">
            {"\"We design our application with the utmost dedication to our users' needs. Our goal is to provide personalized, AI-driven solutions that empower developers to achieve their career aspirations efficiently and effectively. Your success is our mission.\""}
            </span>
          </section>
        </div>
      </section>
    </div>
  )
}

function GitlabIcon(props: any) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}