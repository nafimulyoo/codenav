"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognizer = new SpeechRecognition();
        recognizer.continuous = false;
        recognizer.interimResults = false;
        recognizer.lang = "en-US";

        recognizer.onresult = (event: any) => {
          const userTranscript = event.results[0][0].transcript;
          setTranscript(userTranscript);
          console.log("User speech done:", userTranscript);
          setIsListening(false);
        };

        recognizer.onend = () => setIsListening(false);

        setRecognition(recognizer);
      }
    }
  }, []);

  const startListening = () => {
    if (recognition && !isListening) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      setIsListening(false);
      recognition.stop();
    }
  };

  return { isListening, transcript, startListening, stopListening };
};

export default function InterviewPage() {
  const searchParams = useSearchParams();
  const { isListening, transcript, startListening } = useSpeechRecognition();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAITalking, setIsAITalking] = useState(false);
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [isInterviewFinished, setIsInterviewFinished] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [review, setReview] = useState([]);

  const useFeedback = async (
    nextQuestion: () => void,
    updateChatHistory: (message: string) => void,
    transcript: string
  ) => {
    const currentQuestion: any = questions[currentQuestionIndex];
    const feedbackText = await getFeedback({
      question: currentQuestion.question,
      objective: currentQuestion.objective,
      answer: transcript,
    });

    console.log("AI Feedback:", feedbackText);
    updateChatHistory(feedbackText);
    saveResult(currentQuestion.question, currentQuestion.objective, transcript, feedbackText);
    await useTextToSpeech(feedbackText);
    await nextQuestion();
  };

  const getFeedback = async (data: any) => {
    try {
      const response = await fetch('https://generateinterviewfeedback-jcwlynaixa-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: JSON.stringify({ data }) }),
      });

      const feedback = (await response.json()).result;
      return feedback;
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  const getReview = async (data: any) => {
    try {
      console.log("THIS")
      console.log(JSON.stringify({ message: JSON.stringify(data) }))
      const response = await fetch('https://generateinterviewreview-jcwlynaixa-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: JSON.stringify(data) }),
      });

      const review = (await response.json()).result;
      return review;
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  const useTextToSpeech = async (text: string) => {
    try {
      setIsAITalking(true);
      const response = await fetch(
        "https://generatevoicefromtext-jcwlynaixa-uc.a.run.app/generateVoiceFromText",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: text,
            languageCode: "en-US",
            gender: "NEUTRAL",
          }),
        }
      );

      const data = await response.json();
      const buffer = new Uint8Array(data.audioContent.data);
      const base64Audio = btoa(
        buffer.reduce((data, byte) => data + String.fromCharCode(byte), "")
      );

      const audio = new Audio(`data:audio/mp3;base64,${base64Audio}`);

      await new Promise<void>((resolve) => {
        audio.onended = () => {
          setIsAITalking(false);
          resolve();
        };
        audio.play();
      });
    } catch (error) {
      console.error("Error fetching synthesized speech:", error);
      setIsAITalking(false);
    }
  };

  useEffect(() => {
    if (searchParams.get("questions")) {
      const parsedQuestions = JSON.parse(
        searchParams.get("questions") as string
      );
      setQuestions(parsedQuestions);
      console.log("List of Questions:", parsedQuestions);
    }

    const handleSpacebar = (e: KeyboardEvent) => {
      if (e.code === "Space" && !isAITalking && isInterviewStarted) {
        e.preventDefault();
        console.log("User speech started...");
        startListening();
      }
    };

    window.addEventListener("keydown", handleSpacebar);

    return () => {
      window.removeEventListener("keydown", handleSpacebar);
    };
  }, [isAITalking, searchParams, isInterviewStarted]);

  useEffect(() => {
    if (!isListening && transcript) {
      setChatHistory((prev) => [
        ...prev,
        { sender: "You", message: transcript },
      ]);
      handleFeedback(
        nextQuestion,
        (message) =>
          setChatHistory((prev) => [...prev, { sender: "AI", message }]),
        transcript
      );
    }
  }, [isListening, transcript]);

  const startInterview = () => {
    setIsInterviewStarted(true);
    if (questions.length > 0) {
      console.log("AI starts with:", questions[0].question);
      useTextToSpeech(questions[0].question);
      setChatHistory([{ sender: "AI", message: questions[0].question }]);
    }
  };

  const handleFeedback = async (
    callback: () => void,
    updateChatHistory: (message: string) => void,
    userInput: string
  ) => {
    await useFeedback(callback, updateChatHistory, userInput);
  };

  const nextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      const nextQ = questions[currentQuestionIndex + 1].question;
      setChatHistory((prev) => [...prev, { sender: "AI", message: "Next question, " + nextQ }]);
      await useTextToSpeech("Next question, " + nextQ);
    } else {
      finishInterview();
    }
  };

  const finishInterview = async () => {
    console.log("Interview completed");
    const finalMessage = "Thank you for the interview!";
    setChatHistory((prev) => [
      ...prev,
      { sender: "AI", message: finalMessage },
    ]);
    await useTextToSpeech(finalMessage);
    setIsInterviewFinished(true);
    console.log("RESULTS:")
    console.log(results);
    const review = await getReview(results);
    setReview(review)
    console.log("Review:")
    console.log(review)
  };

  const saveResult = (question: string, objective: string, answer: string, feedback: string) => {
    setResults((prevResults) => [
      ...prevResults,
      { question, objective, answer, feedback }
    ]);
  };

  const updateChatHistory = (message: string) => {
    setChatHistory((prev) => [...prev, { sender: "AI", message }]);
  };

  return (
    <div className="flex flex-col h-screen w-full mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background px-4 py-3 border-b border-muted flex items-center justify-between">
        <Button
          variant="ghost"
          className="px-2 py-1 rounded-md"
          onClick={() => console.log("Spoiler clicked")}
        >
          <FileQuestionIcon className="w-5 h-5" />
        </Button>
        <div className="font-medium">Interview</div>
        <Button variant="ghost" className="px-2 py-1 rounded-md">
          <SettingsIcon className="w-5 h-5" />
        </Button>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        <ScrollArea className="h-full w-full">
          {chatHistory.map((entry, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                entry.sender === "You" ? "" : "justify-end"
              }`}
            >
              {entry.sender === "You" && (
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`grid gap-1 ${
                  entry.sender === "You"
                    ? "bg-muted"
                    : "bg-primary text-primary-foreground"
                } p-3 rounded-lg max-w-[80%]`}
              >
                <div className="font-medium">{entry.sender}</div>
                <div className="prose">
                  <p>{entry.message}</p>
                </div>
              </div>
              {entry.sender !== "You" && (
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                  <AvatarFallback>OA</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Talk/Start Button */}
      <div className="sticky bottom-0 bg-background py-3 px-4">
        <Button
          variant="default"
          className="flex items-center justify-center w-full h-12 rounded-xl"
          onClick={() => {
            if (!isInterviewStarted) {
              startInterview();
            } else if (!isAITalking && !isInterviewFinished) {
              console.log("User speech started...");
              startListening();
            }
          }}
          disabled={isAITalking || isInterviewFinished}
        >
          {isInterviewStarted ? (
            isListening ? (
              <MicIcon className="w-6 h-6 animate-spin" />
            ) : (
              <MicIcon className="w-6 h-6" />
            )
          ) : (
            "Start Interview"
          )}
        </Button>
      </div>

      {/* Interview Completion Modal */}
      <Dialog open={isInterviewFinished} onOpenChange={setIsInterviewFinished}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Interview Completed</DialogTitle>
            <DialogDescription>
              The interview is complete. You can see your results and feedback or return to the clinic menu.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
          <Link href={{
              pathname: "/jobs/clinic/interview/review",
              query: { review: review }
            }}>
            <Button>
              See Review
            </Button>
          </Link>
          <Link href="/jobs/clinic">
            <Button onClick={() => console.log("Return to Clinic menu")}>
              Return to Interview Menu
            </Button>
          </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function FileQuestionIcon(props) {
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
      <path d="M12 17h.01" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
    </svg>
  );
}

function MicIcon(props) {
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
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1-1-1.73l.43-.25a2 2 0 0 1-2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1-1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
