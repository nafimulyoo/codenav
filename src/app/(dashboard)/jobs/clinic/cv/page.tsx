"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/app/(dashboard)/components/content-layout";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function CVHelperPage() {
  const [file, setFile] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [extractedText, setExtractedText] = useState(""); 
  const [isExtracting, setIsExtracting] = useState(false);
  const [feedback, setFeedback] : any= useState(null); 

  useEffect(() => {
    checkSubmitReady();
  }, [file, jobTitle, jobDescription, extractedText]);

  const getCVFeedback = async (data: any) => {
    try {
      const response = await fetch("https://generatecvfeedback-jcwlynaixa-uc.a.run.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ message: JSON.stringify(data) }),
      });

      const feedback = JSON.parse((await response.json()).result);

      setFeedback(feedback); 
      return feedback;
    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  };

  const handleFileChange = (event: any) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
      extractTextFromPDF(uploadedFile);
    } else {
      alert("Please upload a valid PDF file.");
      setIsSubmitDisabled(true);
    }
  };

  const handleJobTitleChange = (event: any) => {
    setJobTitle(event.target.value);
  };

  const handleJobDescriptionChange = (event: any) => {
    setJobDescription(event.target.value);
  };

  const checkSubmitReady = () => {
    if (file && jobTitle && jobDescription && extractedText) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  };

  const extractTextFromPDF = async (file: any) => {
    setIsExtracting(true);
    try {
      const fileReader = new FileReader();
      fileReader.onload = async (e: any) => {
        const base64File = e.target.result.split(",")[1];

        const payload = {
          Parameters: [
            {
              Name: "File",
              FileValue: {
                Name: file.name,
                Data: base64File,
              },
            },
            {
              Name: "StoreFile",
              Value: true,
            },
          ],
        };

        const response = await fetch(
          `https://v2.convertapi.com/convert/pdf/to/txt?Secret=secret_pHWFSizFBqVbEJB2`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const textUrl = data.Files[0].Url;

          const textResponse = await fetch(textUrl);
          const textContent = await textResponse.text();

          setExtractedText(textContent);
          setIsExtracting(false);
        } else {
          console.error("Failed to convert PDF to text");
          alert("There was an error converting the PDF. Please try again.");
          setIsExtracting(false);
        }
      };
      fileReader.readAsDataURL(file);
    } catch (error) {
      console.error("Error extracting text from PDF:", error);
      alert("There was an error converting the PDF. Please try again.");
      setIsExtracting(false);
    }
  };

  const handleSubmit = async () => {
    if (!file || !jobTitle || !jobDescription || !extractedText) {
      alert("Please fill out all fields and upload your CV.");
      return;
    }

    const data = {
      "text-from-cv": extractedText,
      "job-title": jobTitle,
      "job-description": jobDescription,
    };

    
    const feedback = await getCVFeedback(data);

    setFeedback(feedback);
  };

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
              <Link href="/home">Jobs</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/jobs/clinic">Clinic</Link>
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
              <div className="grid w-full items-center gap-1.5 mx-auto">
                <Label htmlFor="cv">Upload CV</Label>
                <Input
                  id="cv"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="job-to-apply">What job are you applying for?</Label>
                <Input
                  id="job-description-to-apply"
                  placeholder="Enter job title"
                  value={jobTitle}
                  onChange={handleJobTitleChange}
                />
                <Textarea
                  id="job-title-to-apply"
                  placeholder="Enter job description"
                  value={jobDescription}
                  onChange={handleJobDescriptionChange}
                />
              </div>
              {isExtracting && (
                <p className="text-yellow-600">Extracting information...</p>
              )}
              {!isExtracting && extractedText && (
                <p className="text-green-600">Information extracted!</p>
              )}
              <Button
                size="lg"
                className="w-full"
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
              >
                Submit
              </Button>
            </div>
          </div>

          {/* Render Feedback only after submission */}
          {feedback && (
            <>
              <div className="border-b-4 border-muted-foreground opacity-10 pt-5 mx-20"></div>
              <h1 className="text-2xl mt-10 text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your CV Feedback
              </h1>
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <FileIcon className="h-10 w-10 text-primary" />
                    <h2 className="text-2xl font-bold">Strengths</h2>
                  </div>
                  <div className="space-y-4">
                    {feedback.strengths.map((item: any, index: any) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <WrenchIcon className="h-10 w-10 text-primary" />
                    <h2 className="text-2xl font-bold">Areas for Improvement</h2>
                  </div>
                  <div className="space-y-4">
                    {feedback.improvements.map((item: any, index: any) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <LightbulbIcon className="h-10 w-10 text-primary" />
                    <h2 className="text-2xl font-bold">Optimization Suggestions</h2>
                  </div>
                  <div className="space-y-4">
                    {feedback.suggestions.map((item: any, index: any) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </ContentLayout>
  );
}

function FileIcon(props: any) {
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
  );
}

function LightbulbIcon(props: any) {
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
  );
}

function WrenchIcon(props: any) {
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