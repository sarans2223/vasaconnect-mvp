import { ArrowLeft, Send, User, MoreVertical } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { useState } from "react";

interface ChatScreenProps {
  onNavigate: (screen: string) => void;
}

const messages = [
  {
    id: 1,
    sender: "worker",
    text: "Hello! I'm very interested in the Home Tutor position.",
    time: "10:30 AM"
  },
  {
    id: 2,
    sender: "client",
    text: "Hi Priya! Thank you for applying. Can you tell me about your teaching experience?",
    time: "10:32 AM"
  },
  {
    id: 3,
    sender: "worker",
    text: "I have 1 year of experience teaching math and English to school students. I've completed the Communication Training course on VASA.",
    time: "10:35 AM"
  },
  {
    id: 4,
    sender: "client",
    text: "That's great! Are you available for 1-2 hours daily?",
    time: "10:36 AM"
  },
  {
    id: 5,
    sender: "worker",
    text: "Yes, I'm available. Preferably in the evening hours.",
    time: "10:38 AM"
  },
  {
    id: 6,
    sender: "worker",
    text: "Thank you for the opportunity! When can I start?",
    time: "2m ago"
  }
];

export function ChatScreen({ onNavigate }: ChatScreenProps) {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('messages')}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-white">Priya Sharma</h4>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-white/80">Online</span>
              </div>
            </div>
          </div>
          <button>
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl p-3 ${
                message.sender === 'client'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-900 shadow-sm'
              }`}
            >
              <p className={message.sender === 'client' ? 'text-white' : 'text-gray-900'}>
                {message.text}
              </p>
              <p
                className={`mt-1 ${
                  message.sender === 'client' ? 'text-white/70' : 'text-gray-500'
                }`}
              >
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            className="bg-purple-600 hover:bg-purple-700"
            size="icon"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
