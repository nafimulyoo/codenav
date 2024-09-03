'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { ContentLayout } from "@/app/(dashboard)/components/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReviewPage() {
  const searchParams = useSearchParams();
  const reviewData = JSON.parse(searchParams.get('review') || '{}');

  // Extract sections from the review data
  const overallEvaluation = reviewData["Overall Evaluation"];
  const questionAnswers = reviewData["Question Answers"];

  // Calculate overall score
  const calculateOverallScore = () => {
    let totalScore = 0;
    let count = 0;

    Object.entries(questionAnswers).forEach(([question, feedback]) => {
      Object.entries(feedback).forEach(([criteria, details]) => {
        if (details.Score) {
          totalScore += details.Score;
          count++;
        }
      });
    });

    return count > 0 ? (totalScore / count).toFixed(1) : 'N/A';
  };

  return (
    <ContentLayout title="Career Clinic">
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
              <Link href="/jobs/clinic">Clinic</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/jobs/clinic/interview">Interview</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <BreadcrumbPage>Review</BreadcrumbPage>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Return to Interview Button at the Top */}
      <div className="w-full mx-auto space-y-8 p-6 grid grid-cols-2">
        <h1 className="text-3xl font-bold mt-8">Interview Review</h1>
        <div className="flex justify-end">
          <Link href="/jobs/clinic/interview">
            <Button variant="default">Return to Menu</Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto space-y-8 p-6">

        {/* Overall Summary Section */}
        <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Overall Feedback</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Overall Score</h3>
              <div className="text-4xl font-bold">{calculateOverallScore()}<span className="text-lg font-semibold text-muted-foreground">/10.0</span></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Key Strength</h3>
              <div>{overallEvaluation["Key Strengths"]}</div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Areas for Improvement</h3>
              <div>{overallEvaluation["Areas for Improvement"]}</div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Fit for The Role</h3>
              <div>{overallEvaluation["Fit for the Role"]}</div>
            </div>
          </div>
        </div>

        {/* Detailed Feedback Section */}
        <div className="space-y-6">
          {Object.entries(questionAnswers).map(([question, feedback], index) => {
            const averageScore =
              Object.values(feedback).reduce((sum, { Score }) => sum + (Score || 0), 0) /
              Object.keys(feedback).length;

            return (
              <div key={index} className="bg-white shadow-sm rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{question}</h2>
                  <div className="text-xl font-semibold">Average Score: {averageScore.toFixed(1)}<span className="text-md font-medium text-muted-foreground">/10.0</span></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(feedback).map(([criteria, details], subIndex) => (
                    <div key={subIndex} className="border p-4 rounded-lg">
                      <h4 className="text-sm font-medium">{criteria}</h4>
                      <div className="text-md font-bold">Score: {details.Score}<span className="text-sm font-semibold text-muted-foreground">/10.0</span></div>
                      <div className="mt-2">
                        <p><span className="font-medium">Detail:</span> {details.Reasoning}</p>
                        <p><span className="font-medium">Improvement:</span> {details.Improvement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Return to Interview Button at the Bottom */}
        <div className="w-full flex justify-end mt-8">
          <Link href="/jobs/clinic/interview">
            <Button variant="default">Return to Menu</Button>
          </Link>
        </div>
      </div>
    </ContentLayout>
  );
}
