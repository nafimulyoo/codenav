
"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { BrainCircuit, Lightbulb, Route, ScrollText, MessageSquareHeart, Headset, Book, WandSparkles } from "lucide-react"


export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const handleImageClick = (src: any) => {
    setSelectedImage(src)
    setIsModalOpen(true)
  }
  const handleModalClose = () => {
    if (isModalOpen) {
        setIsModalOpen(false)
        setSelectedImage(null)
    }
  }
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 mx-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Elevate Your Developer Career with CodeNav
            </h1>
            <div>
                <p className="max-w-[600px] text-foreground md:text-2xl font-semibold">Powered by AI <BrainCircuit className="ml-1 inline-block pb-1 h-12" /> </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
            
CodeNav is a career development app designed to help developers advance their careers through personalized and AI-driven solutions. It streamlines the learning process, enhances skill acquisition, and provides tailored guidance to ensure developers achieve their career goals efficiently and effectively.
            </p>
            <Link
              href="/home"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
          <Image
            src="/placeholder.png"
            width={500}
            height={400}
            alt="Hero Image"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-4">Discover the Power of Our AI Solution <WandSparkles className="h-12 w-12 inline-block ml-3"/></h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our innovative AI-driven platform offers a wide range of features to help developers achieve their career goals. Explore the key capabilities that set us apart.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
            <div className="grid gap-4">
              <div className="rounded-lg bg-muted p-6">
                <Route className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Learning Roadmap</h3>
                <p className="text-muted-foreground">
                    Our AI creates a personalized learning roadmap tailored to your career goals and interests. ensuring efficient skill development.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6">
                <Book className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Learning Courses</h3>
                <p className="text-muted-foreground">
                    Access a variety of courses designed to enhance your skills and knowledge, all recommended by our intelligent AI system.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-muted p-6">
              <MessageSquareHeart className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Interest Finder</h3>
                <p className="text-muted-foreground">
                Discover your professional interests with our AI-powered interest finder, guiding you towards the most suitable career path.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6">
                <Lightbulb className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Learning Assistant</h3>
                <p className="text-muted-foreground">
                Get instant assistance with our AI-powered chatbot, providing answers, resources, and guidance to support your learning journey.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-muted p-6">
                <Headset className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Interview Trainer</h3>
                <p className="text-muted-foreground">
                Prepare for job interviews with our AI-driven interview trainer, offering realistic practice sessions and feedback.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6">
              <ScrollText className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">CV Clinic</h3>
                <p className="text-muted-foreground">
                Optimize your resume with our AI-powered CV clinic, providing suggestions and improvements to help you stand out to employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers and learn how our solution has transformed their businesses.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">Dandy Arif</h4>
                  <p className="text-muted-foreground">Developer Lead, Madura Tech</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                {"\"CodeNav has been a vital tool in my career development. The personalized learning roadmap has helped me acquire new skills efficiently, and the AI learning assistant is always available to answer my questions. Highly recommended\""}
              </p>
            </Card>
            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>KF</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">Kemal Fathurrahman</h4>
                  <p className="text-muted-foreground">AI Engineer, EdgyHub Inc.</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                {"\"I've used several career development tools, but none compare to CodeNav. The AI interview trainer helped me prepare for my recent job change, and the CV clinic provided invaluable feedback on my resume. CodeNav truly sets itself apart with its AI-driven approach.\""}
              </p>
            </Card>
            <Card className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">Ilham Hazetra</h4>
                  <p className="text-muted-foreground">CTO, Stark Industries</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                {"\"Using CodeNav has been a game-changer for my career. The AI-powered chatbot provides instant support, and the learning courses are perfectly tailored to my needs. The platform's security and scalability also give me confidence in its long-term value.\""}
              </p>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Screenshots</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See Our Solution in Action</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out these screenshots to get a glimpse of our innovative product in use.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
            <div
              className="relative cursor-pointer"
              onClick={() => handleImageClick("/placeholder.svg?height=300&width=400")}
            >
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Screenshot 1"
                className="rounded-lg object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/70 px-3 py-1 text-sm text-card-foreground">
                Screenshot 1
              </div>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => handleImageClick("/placeholder.svg?height=300&width=400")}
            >
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Screenshot 2"
                className="rounded-lg object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/70 px-3 py-1 text-sm text-card-foreground">
                Screenshot 2
              </div>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => handleImageClick("/placeholder.svg?height=300&width=400")}
            >
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Screenshot 3"
                className="rounded-lg object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/70 px-3 py-1 text-sm text-card-foreground">
                Screenshot 3
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
          <DialogContent className="p-0">
            <img
              src="/placeholder.svg"
              width={800}
              height={600}
              alt="Zoomed Screenshot"
              className="object-contain w-full h-full"
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
