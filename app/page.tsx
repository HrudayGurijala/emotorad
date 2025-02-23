"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isRegister, setIsRegister] = useState(false)

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard")
    }
  }, [status, router])

  const toggleView = () => setIsRegister(!isRegister)

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Section */}
      <div className="relative hidden md:flex flex-col bg-primary text-primary-foreground p-10">
        <div className="flex-1">
          <h1 className="text-8xl font-bold mb-6">Board.</h1>
          <div className="absolute bottom-10 left-10 flex gap-4">
            <Link href="#" className="hover:opacity-80"><Github className="h-6 w-6" /></Link>
            <Link href="#" className="hover:opacity-80"><Twitter className="h-6 w-6" /></Link>
            <Link href="#" className="hover:opacity-80"><Linkedin className="h-6 w-6" /></Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{isRegister ? "Register" : "Sign In"}</CardTitle>
            <CardDescription>{isRegister ? "Create your account" : "Sign in to your account"}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full" onClick={() => signIn("google")}>
              <Image src="/icons8-google.svg" alt="Google" width={20} height={20} className="mr-2" />
              {isRegister ? "Sign up with Google" : "Sign in with Google"}
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="space-y-4">
              {isRegister && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" type="text" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" placeholder="john@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              {isRegister && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full">{isRegister ? "Create Account" : "Sign In"}</Button>
            <p className="text-sm text-center text-muted-foreground">
              {isRegister ? "Already have an account? " : "Don't have an account? "}
              <button onClick={toggleView} className="text-primary hover:underline">
                {isRegister ? "Sign in here" : "Register here"}
              </button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
