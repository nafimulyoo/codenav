"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { BrainCircuit } from "lucide-react";
import Icons from "@/components/ui/icons"; // Assuming you have an Icons component for the spinner

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobType, setJobType] = useState('');
  const [customJobType, setCustomJobType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [language, setLanguage] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [questionCount, setQuestionCount] = useState(5);
  const [interviewQuestion, setInterviewQuestion] = useState('');
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStartInterview = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormError('');
  };

  const handleFormSubmit = async () => {
    if (!jobType || (jobType === 'other' && !customJobType) || !difficulty || !language || questionCount < 5 || questionCount > 15) {
      setFormError('Please fill in all required fields and ensure the number of questions is between 5 and 15.');
      return;
    }

    setIsLoading(true); // Set loading state
    const jobTypeToSend = jobType === 'other' ? customJobType : jobType;
    const settingsData = { jobType: jobTypeToSend, difficulty, language, additionalInfo, question_count: questionCount };
    console.log("Settings Submitted: ", settingsData);
    const interviewQuestionFromAI: any = await getInterviewQuestion(settingsData);

    setInterviewQuestion(interviewQuestionFromAI);
    console.log(interviewQuestion);
    setIsModalOpen(false);
    setIsLoading(false); // Reset loading state
  };

  const getInterviewQuestion = async (data: any) => {
    try {
      console.log('sending request..');
      console.log("SENT");
      console.log(JSON.stringify({ message: data }));
      const response = await fetch('https://generateinterviewquestion-jcwlynaixa-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: data }),
      });

      const result = await response.json();
      console.log(result);

      return result.result;
    } catch (error) {
      console.error('Error submitting survey:', error);
      setIsLoading(false); // Ensure loading state is reset on error
    }
  };

  const handleQuestionCountChange = (value: number) => {
    if (value < 5) {
      setQuestionCount(5);
    } else if (value > 15) {
      setQuestionCount(15);
    } else {
      setQuestionCount(value);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Landing Section */}
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <Image
            src="/home/header.jpg"
            width={640}
            height={640}
            alt="Hero Image"
            className="mx-auto overflow-hidden rounded-xl object-cover aspect-video"
          />
          <div className="space-y-6 mx-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Welcome to the AI Interview Trainer
            </h1>
            <p className="max-w-[600px] text-foreground md:text-2xl font-semibold -mt-6">
              Powered by AI <BrainCircuit className="ml-1 inline-block pb-1 h-12" />
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              Prepare yourself with our AI-driven interview practice sessions.
              Experience a realistic mock interview scenario tailored to your
              desired job role and level.
            </p>
            <Button className="mt-4" onClick={handleStartInterview}>
              Start Interview
            </Button>
          </div>
        </div>
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 mt-16">
          <div className="space-y-6 mx-12">
            {/* Instructions and Benefits */}
            <h2 className="text-2xl font-semibold mt-4">How It Works</h2>
            <ol className="list-decimal list-inside text-md text-muted-foreground">
              <li>Click the "Start" button to configure your interview settings.</li>
              <li>Choose your job role, difficulty level, and language preferences.</li>
              <li>Engage in a simulated interview with our AI, receiving real-time feedback.</li>
              <li>Receive a detailed analysis of your performance to help you improve.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-4">Features</h2>
            <ul className="list-disc list-inside text-md text-muted-foreground">
              <li>Customizable Interview Scenarios: Tailor your interview to match your desired job role and level.</li>
              <li>Real-Time Feedback: Get instant feedback on your answers to improve your interview skills.</li>
              <li>Performance Summary: Detailed analysis of your strengths and areas for improvement.</li>
              <li>Multi-Language Support: Practice in your preferred language.</li>
            </ul>
          </div>
          <div className="space-y-6 mx-12">
            <h2 className="text-2xl font-semibold mt-4">Benefits</h2>
            <ul className="list-disc list-inside text-md text-muted-foreground">
              <li>Build Confidence: Gain experience with realistic interview simulations.</li>
              <li>Identify Strengths and Weaknesses: Understand where you excel and where you need improvement.</li>
              <li>Improve Communication Skills: Enhance your ability to articulate answers effectively.</li>
              <li>Get Prepared for Success: Increase your chances of acing real job interviews.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settings Modal */}
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
          <DialogContent className="p-6">
            <DialogTitle>Interview Settings</DialogTitle>
            <div className="space-y-4 mt-4">
              {/* Job Type Selection */}
              <div>
                <label className="block text-sm font-medium">Job Type</label>
                <Select onValueChange={(value) => { setJobType(value); if (value !== 'other') setCustomJobType(''); }} value={jobType} defaultValue="">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a job type or industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Software Developer</SelectItem>
                    <SelectItem value="designer">UI/UX Designer</SelectItem>
                    <SelectItem value="manager">IT Manager</SelectItem>
                    <SelectItem value="analyst">Data Analyst</SelectItem>
                    <SelectItem value="engineer">Network Engineer</SelectItem>
                    <SelectItem value="consultant">Consultant</SelectItem>
                    <SelectItem value="architect">Solution Architect</SelectItem>
                    <SelectItem value="product-manager">Product Manager</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {jobType === 'other' && (
                  <div className="mt-2">
                    <Input 
                      placeholder="Please specify your job type" 
                      value={customJobType} 
                      onChange={(e) => setCustomJobType(e.target.value)} 
                    />
                  </div>
                )}
              </div>

              {/* Difficulty Level Selection */}
              <div>
                <label className="block text-sm font-medium">Difficulty Level</label>
                <Select onValueChange={setDifficulty} value={difficulty} defaultValue="">
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="mid-level">Mid-Level</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Language Selection */}
              <div>
                <label className="block text-sm font-medium">Language</label>
                <Select onValueChange={setLanguage} value={language} defaultValue="">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="id">Bahasa Indonesia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Question Count Input */}
              <div>
                <label className="block text-sm font-medium">Number of Questions (5-15)</label>
                <Input
                  type="number"
                  className="pr-4"
                  value={questionCount}
                  min={5}
                  max={15}
                  onChange={(e) => handleQuestionCountChange(Number(e.target.value))}
                  onBlur={() => handleQuestionCountChange(questionCount)}
                />
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium">Additional Information</label>
                <Textarea
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Any specific areas you'd like to focus on during the interview?"
                />
              </div>

              {/* Error Message */}
              {formError && (
                <p className="text-red-500 text-sm">{formError}</p>
              )}
            </div>
            <div className="flex justify-end mt-6">
              <Button className="mr-2" onClick={handleModalClose}>
                Cancel
              </Button>
              <Button onClick={handleFormSubmit} disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
