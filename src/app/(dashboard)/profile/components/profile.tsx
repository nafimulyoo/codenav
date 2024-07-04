"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ResponsiveBar } from "@nivo/bar"

import { db } from "@/lib/firebase/firebase";
import { doc, getDoc } from 'firebase/firestore';
import { auth } from "@/lib/firebase/firebase";

import { useState, useEffect } from "react"

export default function Profile() {

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<any>(null);
    
    useEffect(() => {
        const fetchUserData = async (user: any) => {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
          setLoading(false);
        };
    
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            fetchUserData(user);
          } else {
            setLoading(false);
          }
        });
    
        return () => unsubscribe();
      }, []);

    // TODO: Loading
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div className="flex flex-col w-full min-h-screen p-4 md:p-10">
        <header className="flex items-center justify-between pb-6 ">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>
                {userData?.firstName?.charAt(0)}
                {userData?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{userData?.firstName} {userData?.lastName}</h1>
              <p className="text-sm text-muted-foreground">{userData?.email}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <p className="text-xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">My Courses</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">32</p>
              <p className="text-sm text-muted-foreground">Following</p>
            </div>
          </div>
        </header>
        <main className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-3 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Performance</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-4">
                <div className="p-4 text-center bg-accent rounded-md">
                  <p className="text-sm font-medium">Time Spent</p>
                  <p className="text-2xl font-bold">31.8 hours</p>
                </div>
                <div className="p-4 text-center bg-accent rounded-md">
                  <p className="text-sm font-medium">Average/Day</p>
                  <p className="text-2xl font-bold">4.6 hours</p>
                </div>
                <div className="p-4 text-center bg-accent rounded-md">
                  <p className="text-sm font-medium">Finished Courses</p>
                  <p className="text-2xl font-bold">12 courses</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Statistics</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-4">
                <div className="p-4 text-center bg-accent rounded-md">
                  <p className="text-sm font-medium">Finished Courses</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="p-4 text-center bg-accent rounded-md">
                  <p className="text-sm font-medium">Hours Learned</p>
                  <p className="text-2xl font-bold">56</p>
                </div>
                <div className="p-4 text-center bg-accent rounded-md">
                  <p className="text-sm font-medium">Skills Achieved</p>
                  <p className="text-2xl font-bold">7</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Last Year Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Study Time</p>
                    <p className="text-sm text-muted-foreground">12%</p>
                  </div>
                  <Progress value={12} className="w-full" />
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Hours Learned</p>
                    <p className="text-sm text-muted-foreground">25%</p>
                  </div>
                  <Progress value={25} className="w-full" />
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Finished Courses</p>
                    <p className="text-sm text-muted-foreground">7.2%</p>
                  </div>
                  <Progress value={7.2} className="w-full" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm font-medium">Time Spent</p>
                  <p className="text-2xl font-bold">31.8 hours</p>
                  <BarChart className="w-full h-[200px]" />
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center bg-accent rounded-md">
                  <p className="text-sm font-medium">Goal</p>
                  <p className="text-2xl font-bold">2/3 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center bg-accent rounded-md">
                  <p className="text-sm font-medium">Streak</p>
                  <p className="text-2xl font-bold">103 days</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-accent rounded-md">
                  <p className="text-sm font-medium">Committed Learner</p>
                  <p className="text-xs text-muted-foreground">Reach a 3 day streak</p>
                  <p className="text-sm font-bold">2/3</p>
                </div>
                <div className="p-4 bg-accent rounded-md">
                  <p className="text-sm font-medium">Point Collector</p>
                  <p className="text-xs text-muted-foreground">Earn 1800 more points</p>
                  <p className="text-sm font-bold">1200/3000</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>My Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Monday</p>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Becoming a Photographer</p>
                      <p className="text-xs text-muted-foreground">Clara Manning</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>CK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Design Thinking 2.0</p>
                      <p className="text-xs text-muted-foreground">Chris Kinley</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">10 Days Ago</p>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Becoming a Photographer</p>
                      <p className="text-xs text-muted-foreground">Clara Manning</p>
                    </div>
                  </div>
                </div>
                <Button variant="link" className="text-blue-600">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
  }
  
  function BarChart(props: any) {
    return (
      <div {...props}>
        <ResponsiveBar
          data={[
            { name: "Jan", count: 111 },
            { name: "Feb", count: 157 },
            { name: "Mar", count: 129 },
            { name: "Apr", count: 150 },
            { name: "May", count: 119 },
            { name: "Jun", count: 72 },
          ]}
          keys={["count"]}
          indexBy="name"
          margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
          padding={0.3}
          colors={["#2563eb"]}
          axisBottom={{
            tickSize: 0,
            tickPadding: 16,
          }}
          axisLeft={{
            tickSize: 0,
            tickValues: 4,
            tickPadding: 16,
          }}
          gridYValues={4}
          theme={{
            tooltip: {
              chip: {
                borderRadius: "9999px",
              },
              container: {
                fontSize: "12px",
                textTransform: "capitalize",
                borderRadius: "6px",
              },
            },
            grid: {
              line: {
                stroke: "#f3f4f6",
              },
            },
          }}
          tooltipLabel={({ id }) => `${id}`}
          enableLabel={false}
          role="application"
          ariaLabel="A bar chart showing data"
        />
      </div>
    )
  }