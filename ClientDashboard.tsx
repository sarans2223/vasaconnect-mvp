import { Button } from "../ui/button";
import { ArrowLeft, Briefcase, Users, FileText, TrendingUp, MessageCircle } from "lucide-react";
import { Badge } from "../ui/badge";

interface ClientDashboardProps {
  onNavigate: (screen: string) => void;
}

export function ClientDashboard({ onNavigate }: ClientDashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => onNavigate('messages')}
            className="relative"
          >
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs">3</span>
            </div>
          </button>
        </div>
        <h2 className="text-white">Client Dashboard</h2>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-purple-600" />
              <span className="text-gray-500">Active Jobs</span>
            </div>
            <p className="text-gray-900">3</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-gray-500">Applicants</span>
            </div>
            <p className="text-gray-900">12</p>
          </div>
        </div>

        {/* My Job Posts */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-gray-900">My Job Posts</h4>
            <button 
              onClick={() => onNavigate('my-jobs')}
              className="text-purple-600 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-gray-900">Home Tutor</h5>
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>
              <p className="text-gray-600 mb-3">5 applicants</p>
              <Button 
                onClick={() => onNavigate('view-applications')}
                variant="outline" 
                size="sm" 
                className="w-full"
              >
                View Applications
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-gray-900">Data Entry Work</h5>
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>
              <p className="text-gray-600 mb-3">4 applicants</p>
              <Button variant="outline" size="sm" className="w-full">
                View Applications
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-gray-900">Virtual Assistant</h5>
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>
              <p className="text-gray-600 mb-3">3 applicants</p>
              <Button variant="outline" size="sm" className="w-full">
                View Applications
              </Button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button 
            onClick={() => onNavigate('post-job')}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Create New Job
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={() => onNavigate('my-jobs')}
              variant="outline"
            >
              <FileText className="w-4 h-4 mr-2" />
              Track Applications
            </Button>
            <Button 
              onClick={() => onNavigate('matched-workers')}
              variant="outline"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Workers Matched
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}