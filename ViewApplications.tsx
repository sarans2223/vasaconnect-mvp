import { ArrowLeft, User, MapPin, Star, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface ViewApplicationsProps {
  onNavigate: (screen: string) => void;
  onViewWorker: (workerId: number) => void;
}

const applicants = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Chennai, India",
    skills: ["Communication", "Basic Math", "Teaching"],
    experience: "1 year",
    rating: 4.5,
    verified: true,
    appliedDate: "2 days ago"
  },
  {
    id: 2,
    name: "Anjali Kumar",
    location: "Chennai, India",
    skills: ["Teaching", "English", "Patience"],
    experience: "2 years",
    rating: 4.8,
    verified: true,
    appliedDate: "3 days ago"
  },
  {
    id: 3,
    name: "Meena Ravi",
    location: "Chennai, India",
    skills: ["Math", "Science", "Communication"],
    experience: "6 months",
    rating: 4.2,
    verified: true,
    appliedDate: "5 days ago"
  },
  {
    id: 4,
    name: "Divya Reddy",
    location: "Chennai, India",
    skills: ["Teaching", "Computer Basics"],
    experience: "1.5 years",
    rating: 4.6,
    verified: true,
    appliedDate: "1 week ago"
  }
];

export function ViewApplications({ onNavigate, onViewWorker }: ViewApplicationsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('client-dashboard')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">Applications</h2>
        <p className="text-white/80">Home Tutor - {applicants.length} applicants</p>
      </div>

      {/* Applicants List */}
      <div className="p-6 space-y-4">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-gray-900">{applicant.name}</h4>
                  {applicant.verified && (
                    <Badge className="bg-green-100 text-green-700">Verified</Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{applicant.location}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-700">{applicant.rating}</span>
                  <span className="text-gray-500 ml-2">• {applicant.experience}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {applicant.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                <p className="text-gray-500 mb-4">Applied {applicant.appliedDate}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={() => onViewWorker(applicant.id)}
                variant="outline" 
                className="flex-1"
              >
                View Profile
              </Button>
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                Accept
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
