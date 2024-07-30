"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerOverlay,
} from "@/components/ui/drawer";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Email {
  id: number;
  name: string;
  subject: string;
  body: string;
  date: string;
  avatar: string;
  replay: string[]; // Make sure property name is consistent
}

export default function DashboardComponent() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [composeSubject, setComposeSubject] = useState("");
  const [composeBody, setComposeBody] = useState("");
  const [composeEmail, setComposeEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  const [emails, setEmails] = useState<Email[]>([
    {
      id: 1,
      name: "Olivia Davis",
      subject: "Question about Budget",
      body: "Hi, let's have a meeting tomorrow to discuss the project.",
      date: "Oct 08, 2023 9:15 AM",
      avatar: "OD",
      replay: [],
    },
    {
      id: 2,
      name: "Matthew Taylor",
      subject: "New Product Announcement",
      body: "Dear valued customer, we are excited to introduce our latest product!",
      date: "Oct 08, 2023 10:00 AM",
      avatar: "MT",
      replay: [],
    },
    {
      id: 3,
      name: "Olivia Davis",
      subject: "Question about Budget",
      body: "Hi, let's have a meeting tomorrow to discuss the project.",
      date: "Oct 08, 2023 9:15 AM",
      avatar: "OD",
      replay: [],
    },
    {
      id: 4,
      name: "Matthew Taylor",
      subject: "New Product Announcement",
      body: "Dear valued customer, we are excited to introduce our latest product!",
      date: "Oct 08, 2023 10:00 AM",
      avatar: "MT",
      replay: [],
    },
  ]);

  const handleReply = () => setIsReplyOpen(true);
  const handleCompose = () => setIsComposeOpen(true);
  const handleEmailClick = (email: Email) => setSelectedEmail(email);

  const handleSendReply = () => {
    if (selectedEmail) {
      // Add reply to the selected email
      const updatedEmails = emails.map((email) => {
        if (email.id === selectedEmail.id) {
          return {
            ...email,
            replay: [...email.replay, replyText], // Add the new reply
          };
        }
        return email;
      });

      setEmails(updatedEmails); // Update state with new emails list
      setReplyText(""); // Clear reply input
      setIsReplyOpen(false); // Close the reply drawer
      setSelectedEmail(
        updatedEmails.find((email) => email.id === selectedEmail.id) || null
      ); // Ensure selectedEmail is updated
    }
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      const res = await fetch("http://localhost:3000/api/auth/login");
      console.log("res**", res);
      if (!res.ok) {
        throw Error("Failed to fetch data");
      }
    };

    checkLoggedIn();
  }, []);

  const handleLogout = async () => {
    console.log("logout called");

    const response = await fetch("/api/auth/logout", { method: "GET" });
    if (response.ok) {
      console.log("Logout successful, redirecting to login page...");
      router.push("/login");
    }
    // await fetch('/api/auth/logout', { method: 'GET' });
  };

  return (
    <div className="flex gap-6 w-full p-8 relative h-screen">
      <div className="bg-background border rounded-lg w-64 lg:w-80">
        <div className="px-4 py-3 border-b bg-muted flex justify-between items-center">
          <h2 className="text-lg font-semibold">Inbox</h2>
          <Button onClick={handleCompose} className="ml-4">
            Compose
          </Button>
        </div>
        <div className="flex flex-col divide-y">
          {emails.map((email) => (
            <div
              key={email.id}
              className="flex items-center gap-4 px-4 py-3 hover:bg-accent transition-colors cursor-pointer"
              onClick={() => handleEmailClick(email)}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>{email.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">{email.subject}</div>
                <div className="text-sm text-muted-foreground line-clamp-1">
                  {email.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-background border rounded-lg overflow-hidden flex-1">
        <header className="flex items-center justify-between bg-primary px-4 py-3 shadow-sm md:px-6">
          <div className="text-2xl font-bold tracking-tight text-primary-foreground">
            Email Details
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon">
                <Image
                  src="/ellipsis.svg"
                  alt="Menu Icon"
                  width="24"
                  height="24"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleLogout}>
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <div className="h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {selectedEmail ? (
          <div className="p-4 space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>{selectedEmail.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{selectedEmail.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {selectedEmail.date}
                  </div>
                </div>
                <div className="text-xs font-medium">
                  {selectedEmail.subject}
                </div>
                <div className="text-sm text-muted-foreground line-clamp-2">
                  {selectedEmail.body}
                </div>
              </div>
            </div>
            <Button className="w-full" onClick={handleReply}>
              Reply
            </Button>
            {selectedEmail.replay.length > 0 && (
              <div>
                {selectedEmail.replay.map((reply, index) => (
                  <div className=" border-t-2 border-t-slate-100">
                    <div className="flex gap-3 items-center mt-2 ">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>{selectedEmail.avatar}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold mb-2">Reply</h3>
                    </div>
                    <div
                      key={index}
                      className="text-sm text-muted-foreground mb-2  ml-14"
                    >
                      {reply}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="p-4">Select an email to see details.</div>
        )}
      </div>
      <Drawer open={isReplyOpen} onClose={() => setIsReplyOpen(false)}>
        <DrawerOverlay />
        <DrawerContent className="w-[25%] h-full bg-background">
          <DrawerHeader className="flex justify-between items-center">
            <DrawerTitle>Reply to Email</DrawerTitle>
            <DrawerClose onClick={() => setIsReplyOpen(false)} />
          </DrawerHeader>
          <DrawerDescription className="p-4">
            <Input
              placeholder="Type your reply here..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full h-full resize-none"
              type="textarea" // Changed `type` to `as`
            />
          </DrawerDescription>
          <DrawerFooter className="flex justify-between">
            <Button onClick={handleSendReply}>Send</Button>
            <Button
              onClick={() => setIsReplyOpen(false)}
              variant="outline"
              className="ml-2"
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer open={isComposeOpen} onClose={() => setIsComposeOpen(false)}>
        <DrawerOverlay />
        <DrawerContent className="w-[25%] h-full bg-background">
          <DrawerHeader className="flex justify-between items-center">
            <DrawerTitle>Compose New Email</DrawerTitle>
            <DrawerClose onClick={() => setIsComposeOpen(false)} />
          </DrawerHeader>
          <DrawerDescription className="p-4">
            <label className="font-semibold">To</label>
            <Input
              placeholder="email"
              value={composeEmail}
              onChange={(e) => setComposeEmail(e.target.value)}
              className="w-full my-2"
            />
            <Input
              placeholder="Subject"
              value={composeSubject}
              onChange={(e) => setComposeSubject(e.target.value)}
              className="w-full mb-2"
            />
            <Input
              placeholder="Type your email here..."
              value={composeBody}
              onChange={(e) => setComposeBody(e.target.value)}
              className="w-full h-full resize-none"
              type="textarea"
            />
          </DrawerDescription>
          <DrawerFooter className="flex justify-between">
            <Button onClick={() => setIsComposeOpen(false)}>Send</Button>
            <Button
              onClick={() => setIsComposeOpen(false)}
              variant="outline"
              className="ml-2"
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
