import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, MapPin, Briefcase, CheckCircle, User, Star, Phone, Mail, Award } from "lucide-react";

interface WorkerProfileViewProps {
  onNavigate: (screen: string) => void;
  workerId: number | null;
}

export function WorkerProfileView({ onNavigate, workerId }: WorkerProfileViewProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('view-applications')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">Worker Profile</h2>
      </div>

      {/* Profile Content */}
      <div className="p-6">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-1">Priya Sharma</h3>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-600">Verified</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-gray-700">4.5</span>
                <span className="text-gray-500">(24 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <h4 className="text-gray-900 mb-3">Contact Information</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">priya.sharma@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">Chennai, India</span>
            </div>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <h4 className="text-gray-900 mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">Tailoring</Badge>
            <Badge variant="secondary">Data Entry</Badge>
            <Badge variant="secondary">Basic Excel</Badge>
            <Badge variant="secondary">Communication</Badge>
            <Badge variant="secondary">Teaching</Badge>
          </div>
          
          <h4 className="text-gray-900 mb-2">Experience</h4>
          <p className="text-gray-700">1 year experience</p>
        </div>

        {/* Completed Courses */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <h4 className="text-gray-900 mb-3">Completed Courses</h4>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900">Communication Training</p>
                <p className="text-gray-500">Completed Nov 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900">Basic Computer Skills</p>
                <p className="text-gray-500">Completed Oct 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900">Data Entry Basics</p>
                <p className="text-gray-500">Completed Sep 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Work */}
        <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
          <h4 className="text-gray-900 mb-3">Previous Work</h4>
          <div className="space-y-3">
            <div className="border-l-2 border-purple-600 pl-3">
              <p className="text-gray-900">Home Tutor</p>
              <p className="text-gray-600">6 months • Chennai</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-gray-700">4.7 rating</span>
              </div>
            </div>
            <div className="border-l-2 border-purple-600 pl-3">
              <p className="text-gray-900">Data Entry Assistant</p>
              <p className="text-gray-600">3 months • Remote</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-gray-700">4.5 rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Accept Application
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline">
              Message
            </Button>
            <Button variant="outline">
              Schedule Interview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
