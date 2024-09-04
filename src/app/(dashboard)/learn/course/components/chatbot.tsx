import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Chatbot() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Chatbot Assistant</p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoveHorizontalIcon className="w-5 h-5" />
          <span className="sr-only">More options</span>
        </Button>
      </CardHeader>
      <CardContent className="px-4 py-6 space-y-4">
        <div className="flex flex-col gap-2">
          <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 self-start max-w-[75%]">
            <p>{"Hello! I'm here to help you with any questions or concerns you may have. How can I assist you today?"}</p>
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 self-end max-w-[75%]">
            <p>{"I'm having trouble with my account. Can you help me?"}</p>
          </div>
          <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 self-start max-w-[75%]">
            <p>{"Absolutely, I'd be happy to help. Can you please provide me with your account number?"}</p>
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 self-end max-w-[75%]">
            <p>{"Sure, it's 123456789."}</p>
          </div>
          <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 self-start max-w-[75%]">
            <p>{"Great, let me take a look at that. One moment, please."}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-3 border-t">
        <form className="flex items-center space-x-2">
          <Input id="message" placeholder="Type your message..." className="flex-1" autoComplete="off" />
          <Button type="submit" size="icon">
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

function MoveHorizontalIcon(props: any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function SendIcon(props: any) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}