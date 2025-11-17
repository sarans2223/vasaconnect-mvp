import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, MapPin, Briefcase, CheckCircle, User, Plus } from "lucide-react";
import { SOSButton } from "../shared/SOSButton";
import { Progress } from "../ui/progress";

interface WorkerProfileProps {
  onNavigate: (screen: string) => void;
}

export function WorkerProfile({ onNavigate }: WorkerProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('home')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">My Profile</h2>
      </div>

      {/* Profile Content */}
      <div className="p-6">
        {/* Profile Picture & Name */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900">Priya Sharma</h3>
              <div className="flex items-center gap-1 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>Verified</span>
              </div>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Profile Completion</span>
              <span className="text-purple-600">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
        </div>

        {/* Information Cards */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <p className="text-gray-500">Location</p>
                <p className="text-gray-900">Chennai, India</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-purple-600 mt-1" />
              <div className="flex-1">
                <p className="text-gray-500 mb-2">Skills</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tailoring</Badge>
                  <Badge variant="secondary">Data Entry</Badge>
                  <Badge variant="secondary">Basic Excel</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <p className="text-gray-500">Experience</p>
                <p className="text-gray-900">1 year experience</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <p className="text-gray-500">Identity Verification</p>
                <p className="text-green-600">Verified ✔</p>
              </div>
            </div>
          </div>
        </div>

        <Button 
          className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
        >
          Edit Profile
        </Button>
      </div>

      {/* SOS Button */}
      <SOSButton onClick={() => onNavigate('sos')} />
    </div>
  );
}