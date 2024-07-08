"use client"

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

import { CheckCheck } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <CheckCheck className="h-4 w-4" />
      <AlertTitle>Successfully submitted!</AlertTitle>
      <AlertDescription>
        Your response has been submitted successfully. Thank you for participating in the survey.
      </AlertDescription>
    </Alert>
  )
}


import survey_questions from '@/app/data/survey_data';
import { auth } from "@/lib/firebase/firebase";
import { Textarea } from '@/components/ui/textarea';

import {
    Laptop,
    Network,
    ShieldCheck,
    BarChart3,
    Workflow,
    Brain,
    PencilRuler,
    ListChecks,
    Bot,
    View,
    CodeXml,
    Database,
  } from "lucide-react";

export default function Survey() {
    const [responses, setResponses]: any = useState({});
    const [step, setStep]: any = useState(0);
    const [showResults, setShowResults]: any = useState(false);
    const [interests, setInterests]: any = useState([]);
    const [value, setValue]: any = useState("");
    const [startQuestion, setStartQuestion]: any = useState(false);

    const [activeCategories, setActiveCategories]: any = useState([]);

    function generateNarration(questions: any, answers: any) {
        let narration = '';
      
        questions.forEach((question: { type: string; title: any; summary_narrative: any; questions: { id: string | number; question: any; }[]; }) => {
          if (question.type === 'narrative') {
            narration += `${question.title}:\n${question.summary_narrative}\n`;
            
            question.questions.forEach((subQuestion: { id: string | number; question: any; }) => {
              if (answers[subQuestion.id]) {
                narration += `${subQuestion.question}\nAnswer: ${answers[subQuestion.id]}\n`;
              }
            });
            narration += '\n'; // Add a newline for better readability
          }
        });
      
        return narration;
      }

    const toggleCategory = (category: any) => {
      if (activeCategories.includes(category)) {
        setActiveCategories(activeCategories.filter((c: any) => c !== category));
      } else {
        setActiveCategories([...activeCategories, category]);
      }
    };

    const restartSurvey = () => {
        setResponses({});
        setStep(0);
        setShowResults(false);
        setInterests([]);
        setValue("");
        setStartQuestion(false);
    };

    const handleChange = (id: any, value: any) => {
        setResponses({
            ...responses,
            [id]: value,
        });
    };

    useEffect(() => {
        setResponses({
            ...responses,
            [`${survey_questions[step].id.toString()}.1`]: value,
        });
    }, [step, value, responses]);

    const getInterestWithAI = async (data: any) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            });
            const result = await response.json();
            return ["Software Development", "Network and Infrastructure"];
        } catch (error) {
            return [];
        }
    };

    const handleSubmit = async () => {
        const narration = generateNarration(survey_questions, responses);
        console.log(narration)
        const interests: any = await getInterestWithAI(narration);
        setInterests(interests);

        const user: any = auth.currentUser;
        const userDocRef: any = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
            interests: interests,
            survey_response: responses,
        });
        
        setActiveCategories(interests);
        setShowResults(true);
    };

    const handleNext = () => {
        const currentQuestion = survey_questions[step];
        if (currentQuestion.type === 'narrative') {
            let allQuestionsAnswered = true;
            currentQuestion.questions.forEach((q: any) => {
                if (q.type === 'multiple_choice' &&  value === "") {
                    allQuestionsAnswered = false;
                }
                if (q.type === 'open_ended' && (responses[q.id] === undefined || responses[q.id] === "")) {
                    allQuestionsAnswered = false;
                }
            });
            if (!allQuestionsAnswered) {
                alert('Please fill out all questions before proceeding.');
                return;
            }
        }
        setValue("");
        setStep(step + 1);
    };

    const currentQuestion: any = survey_questions[step];

    if (!startQuestion) {
        return (
            <div className="mx-12 mt-12 w-full max-w-5xl ">
                <h2 className="text-4xl mt-12 font-bold">Welcome to the IT Interest Survey!</h2>
                <p className="text-muted-foreground mt-2 mb-8">Please take a few minutes to answer a few questions about your interests in IT.</p>
                
                <Button onClick={() => setStartQuestion(true)}>Start Survey</Button>

                <p className="text-muted-foreground mt-8 mb-2">Your current interests:</p>
                <div className="grid grid-cols-2 gap-2 mt-4 md:grid-cols-4 lg:grid-cols-6">

                <Button
                variant={
                    activeCategories.includes("Software Development")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Software Development")}
                >
                <Laptop className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Software Development</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Network and Infrastructure")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Network and Infrastructure")}
                >
                <Network size={18} className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Network and Infrastructure</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Cyber Security")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Cyber Security")}
                >
                <ShieldCheck className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Cyber Security</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Data Science")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Data Science")}
                >
                <BarChart3 className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Data Science</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("DevOps") ? "default" : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("DevOps")}
                >
                <Workflow className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>DevOps</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("AI and Machine Learning")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("AI and Machine Learning")}
                >
                <Brain className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>AI and Machine Learning</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("UI/UX Design")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("UI/UX Design")}
                >
                <PencilRuler className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>UI/UX Design</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("IT Management")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("IT Management")}
                >
                <ListChecks className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>IT Management</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Robotics and IoT")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Robotics and IoT")}
                >
                <Bot className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Robotics and IoT</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("VR and AR") ? "default" : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("VR and AR")}
                >
                <View className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>VR and AR</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Programming and Scripting")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Programming and Scripting")}
                >
                <CodeXml className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Programming and Scripting</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Database Management")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Database Management")}
                >
                <Database className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Database Management</span>
                </div>
                </Button>
            </div>
            </div>
        );
    }

    if (showResults) {
        return (
            <div className="mx-20 mt-12 w-full max-w-5xl ">
                <h2 className="text-4xl mt-12 font-bold">Survey Result</h2>
                <div  className="mt-4 mb-4">
                <AlertDemo />
                </div>
                <p className="text-muted-foreground mt-3 mb-2">Thank you for completing the survey! Here are your interests based on your responses and AI analysis:</p>
                
                

                <div className="grid grid-cols-2 gap-2 mt-4 md:grid-cols-4 lg:grid-cols-6">

                <Button
                variant={
                    activeCategories.includes("Software Development")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Software Development")}
                >
                <Laptop className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Software Development</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Network and Infrastructure")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Network and Infrastructure")}
                >
                <Network size={18} className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Network and Infrastructure</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Cyber Security")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Cyber Security")}
                >
                <ShieldCheck className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Cyber Security</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Data Science")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Data Science")}
                >
                <BarChart3 className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Data Science</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("DevOps") ? "default" : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("DevOps")}
                >
                <Workflow className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>DevOps</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("AI and Machine Learning")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("AI and Machine Learning")}
                >
                <Brain className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>AI and Machine Learning</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("UI/UX Design")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("UI/UX Design")}
                >
                <PencilRuler className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>UI/UX Design</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("IT Management")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("IT Management")}
                >
                <ListChecks className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>IT Management</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Robotics and IoT")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Robotics and IoT")}
                >
                <Bot className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Robotics and IoT</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("VR and AR") ? "default" : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("VR and AR")}
                >
                <View className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>VR and AR</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Programming and Scripting")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Programming and Scripting")}
                >
                <CodeXml className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Programming and Scripting</span>
                </div>
                </Button>
                <Button
                variant={
                    activeCategories.includes("Database Management")
                    ? "default"
                    : "outline"
                }
                className="flex flex-col items-center h-24"
                onClick={() => toggleCategory("Database Management")}
                >
                <Database className="w-8 h-8 mb-2" />
                <div
                    className="w-full text-center leading-tight text-sm"
                    style={{ whiteSpace: "normal" }}
                >
                    <span>Database Management</span>
                </div>
                </Button>
            </div>
            <Button className="mt-8" onClick={() => {restartSurvey()}}>Restart Survey</Button>
            </div>
        );
    }

    return (
        <div>
            <div className="mx-20 mt-12 w-full max-w-5xl space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Question {step + 1} - {currentQuestion.title}</h2>
                    {currentQuestion.type === 'narrative' && (
                        <div>
                            <p className="text-muted-foreground">{currentQuestion.narrative}</p>
                            {currentQuestion.questions.map((q: any) => (
                                <div className="space-y-4 " key={q.id}>
                                    <p className="text-muted-foreground mt-4">{q.question}</p>
                                    <div className="space-y-2">


                                        {q.type === 'multiple_choice' && (
                                            <>
                                                <Select onValueChange={setValue} value={value} defaultValue="">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select an Option" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {q.options.map((option: any, index: any) => (
                                                            <SelectItem key={index} value={option}>{option}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </>
                                        )}
                                    </div>
                                    <div className="space-y-4">
                                        {q.type === 'open_ended' && (
                                            <Textarea onChange={(e) => handleChange(q.id, e.target.value)} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex justify-between items-center">

                        {step > 0 ? (<Button variant="outline" onClick={() => setStep(step - 1)}>Previous</Button>) : (<div></div>)}
                        <div className="flex items-center gap-2">
                            <p className="text-foreground/50 text-sm">{(((step)/survey_questions.length)*100).toFixed(0)}% Completed</p>
                            <Progress value={(((step)/survey_questions.length)*100)} className="h-2 w-24" />
                            {step < survey_questions.length - 1 ? (
                                <Button variant="outline" onClick={handleNext}>Next</Button>
                            ) : (
                                <Button variant="outline" onClick={handleSubmit}>Submit</Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
