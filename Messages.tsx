import { ArrowLeft, Send, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

interface MessagesProps {
  onNavigate: (screen: string) => void;
}

const conversations = [
  {
    id: 1,
    name: "Priya Sharma",
    lastMessage: "Thank you for the opportunity! When can I start?",
    time: "2m ago",
    unread: 2,
    verified: true
  },
  {
    id: 2,
    name: "Anjali Kumar",
    lastMessage: "I have experience teaching math for 2 years",
    time: "1h ago",
    unread: 0,
    verified: true
  },
  {
    id: 3,
    name: "Kavya Menon",
    lastMessage: "Could you provide more details about the work schedule?",
    time: "3h ago",
    unread: 1,
    verified: true
  }
];

export function Messages({ onNavigate }: MessagesProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('client-dashboard')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">Messages</h2>
        <p className="text-white/80">{conversations.filter(c => c.unread > 0).length} unread</p>
      </div>

      {/* Conversations List */}
      <div className="p-6 space-y-3">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onNavigate('chat')}
            className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h5 className="text-gray-900">{conversation.name}</h5>
                    {conversation.verified && (
                      <Badge className="bg-green-100 text-green-700 text-xs">✓</Badge>
                    )}
                  </div>
                  <span className="text-gray-500">{conversation.time}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 truncate">{conversation.lastMessage}</p>
                  {conversation.unread > 0 && (
                    <div className="ml-2 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">{conversation.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}