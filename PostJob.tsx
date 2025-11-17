import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ArrowLeft } from "lucide-react";

interface PostJobProps {
  onNavigate: (screen: string) => void;
}

export function PostJob({ onNavigate }: PostJobProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('client-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('client-dashboard')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">Create Job Request</h2>
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input 
              id="title" 
              type="text" 
              placeholder="e.g. Home Tutor"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe the job requirements and responsibilities..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Skills Needed</Label>
            <Input 
              id="skills" 
              type="text" 
              placeholder="e.g. Communication, Basic Math"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pay">Pay (₹)</Label>
            <Input 
              id="pay" 
              type="number" 
              placeholder="e.g. 250"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workType">Work Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select work type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="onsite">On-site</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              type="text" 
              placeholder="e.g. Chennai, India"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input 
              id="duration" 
              type="text" 
              placeholder="e.g. 1-2 hours daily"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Post Job
          </Button>
        </form>
      </div>
    </div>
  );
}
