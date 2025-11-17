import { MapPin, IndianRupee, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";

interface JobCardProps {
  title: string;
  pay: number;
  location: string;
  postedBy: string;
  type: string;
  onClick?: () => void;
}

export function JobCard({ title, pay, location, postedBy, type, onClick }: JobCardProps) {
  return (
    <button 
      onClick={onClick}
      className="w-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-left"
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-gray-900">{title}</h4>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="flex items-center gap-1 mb-2">
        <IndianRupee className="w-4 h-4 text-purple-600" />
        <span className="text-purple-600">₹{pay} / hour</span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-4 h-4 text-gray-500" />
        <span className="text-gray-600">{location}</span>
        <Badge variant="outline" className="ml-auto">{type}</Badge>
      </div>

      <p className="text-gray-500">Posted by {postedBy}</p>
    </button>
  );
}
