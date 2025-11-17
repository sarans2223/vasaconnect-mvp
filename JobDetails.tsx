import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, MapPin, IndianRupee, Clock, User, Star, BookmarkPlus } from "lucide-react";
import { SOSButton } from "../shared/SOSButton";

interface JobDetailsProps {
  jobId: number | null;
  onNavigate: (screen: string) => void;
}

export function JobDetails({ jobId, onNavigate }: JobDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('job-listings')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">Job Details</h2>
      </div>

      {/* Job Content */}
      <div className="p-6">
        {/* Job Header */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-900">Vessel Washing</h3>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <BookmarkPlus className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600">₹150 per hour</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Chennai</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">2-3 hours daily</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-600">Posted by</p>
            <p className="text-gray-900">Lakshmi</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
          <h4 className="text-gray-900 mb-3">Description</h4>
          <p className="text-gray-700">
            Need help with washing vessels and kitchen cleaning. Work 2-3 hours daily in the morning. Safe and respectful work environment.
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h4 className="text-gray-900 mb-3">Requirements</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>
              <span className="text-gray-700">Punctuality and reliability</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>
              <span className="text-gray-700">Basic cleaning knowledge</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Apply Now
          </Button>
          <Button variant="outline" className="w-full">
            Save Job
          </Button>
        </div>
      </div>

      {/* SOS Button */}
      <SOSButton onClick={() => onNavigate('sos')} />
    </div>
  );
}