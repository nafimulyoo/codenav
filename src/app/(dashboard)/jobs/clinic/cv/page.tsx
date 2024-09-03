import Link from "next/link";

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/app/(dashboard)/components/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function CVHelperPage() {
  return (
    <ContentLayout title="CV Helper">
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
              <Link href="/jobs">Jobs</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/clinic">Clinic</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <BreadcrumbPage>CV Helper</BreadcrumbPage>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 grid gap-12">
          <div className="mx-auto max-w-md space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get Personalized CV Feedback
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Upload your resume and receive detailed insights to improve your job application.
            </p>
            <div className="grid gap-4">
              <Button size="lg" className="w-full">
                Upload CV
              </Button>
              <div className="grid gap-2">
                <Label htmlFor="job-to-apply">What job are you applying for?</Label>
                <Input id="job-to-apply" placeholder="Enter job title" />
              </div>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <FileIcon className="h-10 w-10 text-primary" />
                <h2 className="text-2xl font-bold">Strengths</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Relevant Experience</h3>
                  <p className="text-muted-foreground">
                    Your resume showcases a strong background in the industry, with relevant work experience that aligns
                    with the target role.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Skills Showcase</h3>
                  <p className="text-muted-foreground">
                    You have clearly outlined your key skills and competencies, demonstrating your ability to excel in
                    the position.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Quantifiable Achievements</h3>
                  <p className="text-muted-foreground">
                    Your resume includes specific, measurable achievements that highlight your impact and value to
                    potential employers.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <WrenchIcon className="h-10 w-10 text-primary" />
                <h2 className="text-2xl font-bold">Areas for Improvement</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Concise Language</h3>
                  <p className="text-muted-foreground">
                    Your resume could benefit from more concise and impactful language, focusing on key accomplishments
                    rather than lengthy descriptions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Tailored Content</h3>
                  <p className="text-muted-foreground">
                    Ensure your resume is tailored to the specific job you are applying for, highlighting the most
                    relevant skills and experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Visual Appeal</h3>
                  <p className="text-muted-foreground">
                    Consider enhancing the visual layout and design of your resume to make it more visually appealing
                    and easy to scan.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <LightbulbIcon className="h-10 w-10 text-primary" />
                <h2 className="text-2xl font-bold">Optimization Suggestions</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Keyword Optimization</h3>
                  <p className="text-muted-foreground">
                    Incorporate relevant keywords throughout your resume to better align with the job description and
                    improve your chances of being found by recruiters.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Professional Formatting</h3>
                  <p className="text-muted-foreground">
                    Ensure your resume follows a clean, professional format with clear section headings, consistent
                    formatting, and appropriate font choices.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Online Presence</h3>
                  <p className="text-muted-foreground">
                    Consider including links to your online professional profiles, such as LinkedIn, to provide
                    additional context and information about your background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ContentLayout>
  );
}


function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function WrenchIcon(props) {
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}