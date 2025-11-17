import { ArrowLeft, Edit2, Trash2, Eye, Users, IndianRupee } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface MyJobsProps {
  onNavigate: (screen: string) => void;
}

const activeJobs = [
  {
    id: 1,
    title: "Home Tutor",
    pay: 250,
    location: "Chennai",
    type: "On-site",
    applicants: 5,
    postedDate: "1 week ago",
    status: "Active"
  },
  {
    id: 2,
    title: "Data Entry Work",
    pay: 200,
    location: "Remote",
    type: "Remote",
    applicants: 4,
    postedDate: "3 days ago",
    status: "Active"
  },
  {
    id: 3,
    title: "Virtual Assistant",
    pay: 220,
    location: "Remote",
    type: "Remote",
    applicants: 3,
    postedDate: "5 days ago",
    status: "Active"
  }
];

const completedJobs = [
  {
    id: 4,
    title: "Tailoring Work",
    pay: 300,
    location: "Chennai",
    type: "On-site",
    completedDate: "2 weeks ago",
    worker: "Kavya Menon",
    rating: 4.8
  },
  {
    id: 5,
    title: "Basic Excel Work",
    pay: 180,
    location: "Remote",
    type: "Remote",
    completedDate: "1 month ago",
    worker: "Pooja Iyer",
    rating: 4.5
  }
];

export function MyJobs({ onNavigate }: MyJobsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('client-dashboard')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">My Jobs</h2>
      </div>

      {/* Tabs */}
      <div className="p-6">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="active">Active ({activeJobs.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedJobs.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-4">
            {activeJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-gray-900 mb-1">{job.title}</h4>
                    <Badge className="bg-green-100 text-green-700">{job.status}</Badge>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit2 className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">₹{job.pay} / hour</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{job.applicants} applicants</span>
                  </div>
                  <p className="text-gray-500">Posted {job.postedDate}</p>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => onNavigate('view-applications')}
                    variant="outline" 
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Applications
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Edit Job
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="mb-3">
                  <h4 className="text-gray-900 mb-1">{job.title}</h4>
                  <Badge variant="outline">Completed</Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">₹{job.pay} / hour</span>
                  </div>
                  <div>
                    <p className="text-gray-600">Completed by: {job.worker}</p>
                    <p className="text-gray-500">Rating: ⭐ {job.rating}</p>
                  </div>
                  <p className="text-gray-500">Completed {job.completedDate}</p>
                </div>

                <Button variant="outline" className="w-full">
                  Hire Again
                </Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
