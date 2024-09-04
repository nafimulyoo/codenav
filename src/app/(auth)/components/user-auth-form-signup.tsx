"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signUp, signInWithGoogle } from "@/lib/firebase/authService"
import { auth } from "@/lib/firebase/firebase"
import { useRouter } from "next/navigation"
import { db } from "@/lib/firebase/firebase"
import { doc, setDoc } from 'firebase/firestore'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthFormSignUp({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const [confirmPassword, setConfirmPassword] = React.useState<string>("")
  const [firstName, setFirstName] = React.useState<string>("")
  const [lastName, setLastName] = React.useState<string>("")
  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    if (password !== confirmPassword) {
      console.error("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      await signUp(email, password)
      const user = auth.currentUser
      if (user) {
        const userDocRef = doc(db, 'users', user.uid)
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          firstName,
          lastName,
        })
      }
      router.push("/home")
    } catch (error) {
      console.error("Error signing up:", error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGoogleSignUp() {
    setIsLoading(true)
    try {
      await signInWithGoogle()
      router.push("/home")
    } catch (error) {
      console.error("Error signing up with Google:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-4", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  id="first-name"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div>
                <Label htmlFor="last-name">Last Name</Label>
                <Input
                  id="last-name"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                placeholder="Enter your password again"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>
          <Button disabled={isLoading} className="mt-2">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background dark:bg-slate px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading} onClick={handleGoogleSignUp}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Sign In with Google
      </Button>
    </div>
  )
}
