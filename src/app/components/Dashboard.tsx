// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Edit from "../../../public/edit.svg";

// const DashboardComponent = () => {
//   const [messages, setMessages] = useState<
//     { id: number; snippet: string; responses?: string[] }[]
//   >([]);
//   const [showComposeDrawer, setShowComposeDrawer] = useState(false);
//   const [emailContent, setEmailContent] = useState("");
//   const [recipient, setRecipient] = useState("");
//   const [replyContent, setReplyContent] = useState("");
//   const [replyId, setReplyId] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       const combinedMessages = [
//         {
//           id: 1,
//           snippet: "Email from Gmail: Hello from mubashershakeel1009@gmail.com",
//           responses: [
//             "Response 1 to mubashershakeel1009@gmail.com",
//             "Response 2 to mubashershakeel1009@gmail.com",
//           ],
//         },
//         {
//           id: 2,
//           snippet: "Email from Outlook: Hello from usmangq@gmail.com",
//           responses: ["Response 1 to usmangq@gmail.com"],
//         },
//         {
//           id: 3,
//           snippet: "Email from Outlook:  john.doe@example.com",
//         },
//         {
//           id: 4,
//           snippet: "Email from Gmail: jane.doe@example.com",
//         },
//       ];

//       setMessages(combinedMessages);
//     };

//     fetchMessages();
//   }, []);

//   const handleComposeClick = () => {
//     setShowComposeDrawer(true);
//   };

//   const handleSendClick = async () => {
//     console.log("Message:", emailContent);

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       {
//         id: prevMessages.length + 1,
//         snippet: `Email to ${recipient}: ${emailContent}`,
//       },
//     ]);

//     setShowComposeDrawer(false);
//     setEmailContent("");
//     setRecipient("");
//   };

//   const handleReplyClick = (id: number) => {
//     setReplyId(id);
//   };

//   const handleSendReplyClick = () => {
//     if (replyId !== null) {
//       setMessages((prevMessages) =>
//         prevMessages.map((message) =>
//           message.id === replyId
//             ? {
//                 ...message,
//                 responses: [...(message.responses || []), replyContent],
//               }
//             : message
//         )
//       );
//     }

//     setReplyId(null);
//     setReplyContent("");
//   };

//   return (
//     <div className="p-6 h-screen mx-auto bg-gray-50 flex">
//       <div
//         className={`flex-1 transition-width duration-300 ease-in-out ${
//           showComposeDrawer ? "max-w-4xl " : "w-full"
//         }`}
//       >
//         <h1 className="text-3xl font-bold mb-4 text-black text-center">
//           Uni-box
//         </h1>
//         <button
//           className="rounded-2xl bg-blue-500 flex gap-4 justify-center items-center p-3 hover:shadow-2xl mb-6"
//           onClick={handleComposeClick}
//         >
//           <Image src={Edit} alt="Compose" width={24} height={24} priority />
//           <h4 className="text-white">Compose</h4>
//         </button>
//         <ul className="overflow-y-auto max-h-full">
//           {messages.map((message) => (
//             <li
//               key={message.id}
//               className="mb-4 p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
//             >
//               <p className="text-gray-700">{message.snippet}</p>
//               {message.responses && (
//                 <ul className="mt-2">
//                   {message.responses.map((response, index) => (
//                     <li key={index} className="text-gray-500 text-sm ml-4">
//                       {response}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//               <button
//                 onClick={() => handleReplyClick(message.id)}
//                 className="rounded-md bg-green-500 text-white px-4 py-2 mt-2 hover:bg-green-600"
//               >
//                 Reply
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {showComposeDrawer && (
//         <div className="fixed top-0 right-0 h-full w-2/5 bg-white p-6 shadow-lg z-50 transition-transform duration-300 ease-in-out">
//           <h2 className="text-2xl font-bold mb-4">Compose Email</h2>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               To:
//             </label>
//             <input
//               type="email"
//               value={recipient}
//               onChange={(e) => setRecipient(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
//               placeholder="Recipient's email"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Message:
//             </label>
//             <textarea
//               value={emailContent}
//               onChange={(e) => setEmailContent(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
//               rows={6}
//               placeholder="Write your message here..."
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               onClick={handleSendClick}
//               className="rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
//             >
//               Send
//             </button>
//             <button
//               onClick={() => setShowComposeDrawer(false)}
//               className="rounded-md bg-red-500 text-white px-4 py-2 hover:bg-red-600 ml-4"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//       {replyId !== null && (
//         <div className="fixed bottom-0 left-0 w-full  p-6 shadow-lg z-50 transition-transform duration-300 ease-in-out bg-slate-200">
//           <h2 className="text-2xl font-bold mb-4 text-black">Reply to Email</h2>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Message:
//             </label>
//             <textarea
//               value={replyContent}
//               onChange={(e) => setReplyContent(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
//               rows={6}
//               placeholder="Write your reply here..."
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               onClick={handleSendReplyClick}
//               className="rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
//             >
//               Send Reply
//             </button>
//             <button
//               onClick={() => setReplyId(null)}
//               className="rounded-md bg-red-500 text-white px-4 py-2 hover:bg-red-600 ml-4"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardComponent;

'use client'
import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerOverlay
} from "@/components/ui/drawer";

export default function Component() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');

  const emails = [
    { id: 1, name: 'Olivia Davis', subject: 'Question about Budget', body: 'Hi, let\'s have a meeting tomorrow to discuss the project.', date: 'Oct 08, 2023 9:15 AM', avatar: 'OD' },
    { id: 2, name: 'Matthew Taylor', subject: 'New Product Announcement', body: 'Dear valued customer, we are excited to introduce our latest product!', date: 'Oct 08, 2023 10:00 AM', avatar: 'MT' },
    { id: 3, name: 'Olivia Davis', subject: 'Question about Budget', body: 'Hi, let\'s have a meeting tomorrow to discuss the project.', date: 'Oct 08, 2023 9:15 AM', avatar: 'OD' },
    { id: 4, name: 'Matthew Taylor', subject: 'New Product Announcement', body: 'Dear valued customer, we are excited to introduce our latest product!', date: 'Oct 08, 2023 10:00 AM', avatar: 'MT' },
  ];

  const handleReply = () => setIsReplyOpen(true);
  const handleCompose = () => setIsComposeOpen(true);
  const handleEmailClick = (email) => setSelectedEmail(email);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 w-full max-w-6xl mx-auto py-8 px-4 relative">
      <div className="bg-background border rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b bg-muted flex justify-between items-center">
          <h2 className="text-lg font-semibold">Inbox</h2>
          <Button onClick={handleCompose} className="ml-4">Compose</Button>
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
                <div className="text-sm text-muted-foreground line-clamp-1">{email.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-background border rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b bg-muted">
          <h2 className="text-lg font-semibold">Email Details</h2>
        </div>
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
                  <div className="text-xs text-muted-foreground">{selectedEmail.date}</div>
                </div>
                <div className="text-xs font-medium">{selectedEmail.subject}</div>
                <div className="text-sm text-muted-foreground line-clamp-2">{selectedEmail.body}</div>
              </div>
            </div>
            <Button className="w-full" onClick={handleReply}>Reply</Button>
          </div>
        ) : (
          <div className="p-4">Select an email to see details.</div>
        )}
      </div>
    <Drawer open={isReplyOpen} onClose={() => setIsReplyOpen(false)}  >
        <DrawerOverlay  />
        <DrawerContent className="w-[25%] h-full bg-background"  >
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
              as="textarea"
            />
          </DrawerDescription>
          <DrawerFooter className="flex justify-between">
            <Button onClick={() => setIsReplyOpen(false)}>Send</Button>
            <Button onClick={() => setIsReplyOpen(false)} variant="outline" className="ml-2">Cancel</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   
      <Drawer open={isComposeOpen} onClose={() => setIsComposeOpen(false)}  >
        <DrawerOverlay  />
        <DrawerContent className="w-[25%] h-full bg-background">
          <DrawerHeader className="flex justify-between items-center">
            <DrawerTitle>Compose New Email</DrawerTitle>
            <DrawerClose onClick={() => setIsComposeOpen(false)} />
          </DrawerHeader>
          <DrawerDescription className="p-4">
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
              as="textarea"
            />
          </DrawerDescription>
          <DrawerFooter className="flex justify-between">
            <Button onClick={() => setIsComposeOpen(false)}>Send</Button>
            <Button onClick={() => setIsComposeOpen(false)} variant="outline" className="ml-2">Cancel</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

