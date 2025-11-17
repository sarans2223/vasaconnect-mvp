import { ArrowLeft, User, MapPin, Star, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface MatchedWorkersProps {
  onNavigate: (screen: string) => void;
}

const matchedWorkers = [
  {
    id: 1,
    name: "Kavya Menon",
    location: "Chennai, India",
    skills: ["Tailoring", "Fashion Design", "Stitching"],
    experience: "3 years",
    rating: 4.9,
    matchScore: 95,
    verified: true,
    availability: "Available now"
  },
  {
    id: 2,
    name: "Pooja Iyer",
    location: "Chennai, India",
    skills: ["Data Entry", "Excel", "Typing"],
    experience: "2 years",
    rating: 4.7,
    matchScore: 92,
    verified: true,
    availability: "Available from next week"
  },
  {
    id: 3,
    name: "Lakshmi Nair",
    location: "Chennai, India",
    skills: ["Teaching", "English", "Math"],
    experience: "4 years",
    rating: 4.8,
    matchScore: 88,
    verified: true,
    availability: "Available now"
  },
  {
    id: 4,
    name: "Radha Krishnan",
    location: "Chennai, India",
    skills: ["Virtual Assistant", "Communication", "Scheduling"],
    experience: "1.5 years",
    rating: 4.6,
    matchScore: 85,
    verified: true,
    availability: "Available now"
  }
];

export function MatchedWorkers({ onNavigate }: MatchedWorkersProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('client-dashboard')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">Matched Workers</h2>
        <p className="text-white/80">Workers that match your job requirements</p>
      </div>

      {/* Matched Workers List */}
      <div className="p-6 space-y-4">
        {matchedWorkers.map((worker) => (
          <div key={worker.id} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-gray-900">{worker.name}</h4>
                  <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-sm">{worker.matchScore}% match</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{worker.location}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-700">{worker.rating}</span>
                  <span className="text-gray-500 ml-2">• {worker.experience}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {worker.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  {worker.verified && (
                    <Badge className="bg-green-100 text-green-700">Verified</Badge>
                  )}
                  <Badge variant="outline">{worker.availability}</Badge>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                View Profile
              </Button>
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                Send Offer
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
