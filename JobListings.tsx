import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, Search, MapPin, IndianRupee, Clock, Filter } from "lucide-react";
import { SOSButton } from "../shared/SOSButton";

interface JobListingsProps {
  onNavigate: (screen: string) => void;
  onSelectJob: (jobId: number) => void;
}

const jobs = [
  {
    id: 1,
    title: "Vessel Washing",
    pay: 150,
    location: "Chennai",
    postedBy: "Lakshmi",
    type: "On-site"
  },
  {
    id: 2,
    title: "Household Cleaning",
    pay: 200,
    location: "Chennai",
    postedBy: "Ramesh Family",
    type: "On-site"
  },
  {
    id: 3,
    title: "Tailoring Work",
    pay: 300,
    location: "Chennai",
    postedBy: "Fashion Studio",
    type: "On-site"
  },
  {
    id: 4,
    title: "Cooking for Family",
    pay: 250,
    location: "Chennai",
    postedBy: "Sharma Residence",
    type: "On-site"
  },
  {
    id: 5,
    title: "Farm Helper",
    pay: 180,
    location: "Rural Chennai",
    postedBy: "Kumar Farm",
    type: "On-site"
  },
  {
    id: 6,
    title: "Dairy Work",
    pay: 160,
    location: "Rural Chennai",
    postedBy: "Village Dairy",
    type: "On-site"
  },
  {
    id: 7,
    title: "Home Tutor",
    pay: 200,
    location: "Chennai",
    postedBy: "Singh Family",
    type: "On-site"
  },
  {
    id: 8,
    title: "Basic Data Entry",
    pay: 150,
    location: "Remote",
    postedBy: "Local Business",
    type: "Remote"
  }
];

export function JobListings({ onNavigate, onSelectJob }: JobListingsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button>
            <Filter className="w-6 h-6" />
          </button>
        </div>
        <h2 className="text-white">Available Jobs</h2>
        <p className="text-white/80">{jobs.length} opportunities found</p>
      </div>

      {/* Job List */}
      <div className="p-6 space-y-4">
        {jobs.map((job) => (
          <JobCard 
            key={job.id}
            {...job}
            onClick={() => onSelectJob(job.id)}
          />
        ))}
      </div>

      {/* SOS Button */}
      <SOSButton onClick={() => onNavigate('sos')} />
    </div>
  );
}