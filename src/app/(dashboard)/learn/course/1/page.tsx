"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/app/(dashboard)/components/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function Component() {
  const [lesson, setLesson] = useState("html");
  const [cssContent, setCssContent] = useState("");
  const [isThinking, setIsThinking] = useState(false); // State to manage AI thinking
  const [chatResponse, setChatResponse] = useState(""); // State to store AI response
  const [userQuestion, setUserQuestion] = useState(""); // State to store user's input

  // Function to fetch the YouTube transcript (mocked for this example)
  const fetchYoutubeTranscript = async (videoId: string) => {
    try {
      const transcript = `
        Introduction to CSS
        -------------------
        Learn how to style your web pages using CSS, the language for designing beautiful and responsive web interfaces.
        CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of a document written in HTML. It allows you to apply styles such as fonts, colors, and spacing to your web pages.
        Example CSS:
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        h1 {
          color: blue;
        }
        Additional Resources:
        Visit the official MDN Web Docs to learn more about CSS properties, selectors, and best practices: https://developer.mozilla.org/en-US/docs/Web/CSS
      `;
      return transcript;
    } catch (error) {
      console.error("Error fetching transcript:", error);
      return "Error loading transcript.";
    }
  };

  useEffect(() => {
    // Fetch transcript when the CSS lesson is selected
    if (lesson === "css") {
      fetchYoutubeTranscript("1PnVor36_40").then(setCssContent);
    }
  }, [lesson]);

  const getCourseHelp = async (question: any, courseContent: string) => {
    try {
      const response = await fetch('https://generatecoursehelp-jcwlynaixa-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: "PLEASE HELP ME ANSWERING THIS QUESTION: " + question + " \n\n COURSE CONTENT: \n" + courseContent }),
      });

      const answer = (await response.json()).result;
      return answer;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return "Error fetching response.";
    }
  };

  const courseContent: any = {
    html: `
      Introduction to HTML
      --------------------
      Learn the basics of HTML, the fundamental language for creating web pages and applications.

      What is HTML?
      HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the basic structure of a webpage, which is enhanced and modified by other technologies like CSS and JavaScript.

      HTML Structure
      An HTML document consists of nested HTML elements that define the structure and content of a web page. Here’s an example of a simple HTML document:

      Example HTML Document:
      <!DOCTYPE html>
      <html>
        <head>
          <title>My First HTML Page</title>
        </head>
        <body>
          <h1>Hello, World!</h1>
          <p>This is my first web page using HTML.</p>
          <a href="https://www.example.com">Click here</a> to visit example.com.
        </body>
      </html>

      Common HTML Tags
      - <h1> to <h6>: Headings
      - <p>: Paragraphs
      - <a>: Links
      - <img>: Images
      - <ul>, <ol>, <li>: Lists

      Basic HTML Elements
      The building blocks of an HTML document are its elements. These elements define the content and structure of a webpage. Common HTML elements include headings, paragraphs, links, and images.

      Additional Resources
      Visit the official MDN Web Docs to learn more about HTML elements, attributes, and best practices: https://developer.mozilla.org/en-US/docs/Web/HTML
    `,
    css: cssContent, // The fetched transcript will be stored here
  };

  const handleNextLesson = () => {
    setLesson("css");
  };

  const handlePreviousLesson = () => {
    setLesson("html");
  };

  const handleChatbotSubmit = async () => {
    setIsThinking(true);
    setChatResponse(""); // Clear previous response

    // Fetch response from AI
    const response = await getCourseHelp(userQuestion, courseContent[lesson]);

    setChatResponse(response); // Update with AI response
    setIsThinking(false);
  };

  return (
    <ContentLayout title="Learning">
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
              <Link href="/learn">Learning</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Course</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-3 lg:col-span-3 space-y-4">
            {lesson === "html" ? (
              <Button className="mb-4" onClick={handleNextLesson}>
                Next Lesson
              </Button>
            ) : (
              <Button className="mb-4" onClick={handlePreviousLesson}>
                Previous Lesson
              </Button>
            )}
            {lesson === "html" && (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-left">
                  Introduction to HTML
                </h1>
                <p className="text-muted-foreground text-lg text-left">
                  Learn the basics of HTML, the fundamental language for creating web pages and applications.
                </p>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="Instructor" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-muted-foreground text-sm">Instructor</p>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold">HTML Structure</h2>
                <p>
                  An HTML document consists of nested HTML elements that define the structure and content of a web page. Here’s an example of a simple HTML document:
                </p>
                <div className="bg-muted rounded-md p-4">
                  <h3 className="text-xl font-semibold">Example HTML Document</h3>
                  <pre className="text-sm">
                    <code>{`
<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page using HTML.</p>
    <a href="https://www.example.com">Click here</a> to visit example.com.
  </body>
</html>
                    `}</code>
                  </pre>
                </div>
                <h2 className="text-2xl font-semibold">Common HTML Tags</h2>
                <p>
                  Here are some common HTML tags you should know:
                </p>
                <ul>
                  <li>
                    <code>&lt;h1&gt; to &lt;h6&gt;</code>: Headings
                  </li>
                  <li>
                    <code>&lt;p&gt;</code>: Paragraphs
                  </li>
                  <li>
                    <code>&lt;a&gt;</code>: Links
                  </li>
                  <li>
                    <code>&lt;img&gt;</code>: Images
                  </li>
                  <li>
                    <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>: Lists
                  </li>
                </ul>
                <h2 className="text-2xl font-semibold">Basic HTML Elements</h2>
                <p>
                  The building blocks of an HTML document are its elements. These elements define the content and structure of a webpage. Common HTML elements include headings, paragraphs, links, and images.
                </p>
                <p>
                  Visit the official <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="underline text-blue-600">MDN Web Docs</a> to learn more about HTML elements, attributes, and best practices.
                </p>
              </>
            )}
            {lesson === "css" && (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-left">
                  Introduction to CSS
                </h1>
                <p className="text-muted-foreground text-lg text-left">
                  Learn how to style your web pages using CSS, the language for designing beautiful and responsive web interfaces.
                </p>
                <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                    src="https://www.youtube.com/embed/1PnVor36_40"
                    title="CSS Crash Course"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </>
            )}
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="bg-muted rounded-md p-4">
              <h3 className="mb-4 text-left">Ask the AI Chatbot</h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="Chatbot" />
                    <AvatarFallback>CB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid gap-2">
                    <div className="font-medium">Chatbot</div>
                    <div className="prose text-muted-foreground">
                      {chatResponse ? (
                        <p>{chatResponse}</p>
                      ) : (
                        <p>
                          Hello! I{"'"}m an AI chatbot created to help you with questions about the course. What would you like to know?
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>YO</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid gap-2">
                    <div className="font-medium">You</div>
                    <Textarea
                      placeholder="Type your question here..."
                      className="min-h-[80px] resize-none"
                      disabled={isThinking}
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)} // Update question state on input change
                    />
                    <Button onClick={handleChatbotSubmit} disabled={isThinking}>
                      {isThinking ? "Thinking..." : "Submit"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-4">
            {lesson === "html" ? (
              <Button className="mt-4" onClick={handleNextLesson}>
                Next Lesson
              </Button>
            ) : (
              <Button className="mt-4" onClick={handlePreviousLesson}>
                Previous Lesson
              </Button>
            )}
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
