import { Button } from "../ui/button";
import { Clock, Signal } from "lucide-react";
import { Badge } from "../ui/badge";

interface CourseCardProps {
  name: string;
  level: string;
  duration: string;
  color: string;
}

export function CourseCard({ name, level, duration, color }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className={`h-3 bg-gradient-to-r ${color}`}></div>
      <div className="p-5">
        <h4 className="text-gray-900 mb-3">{name}</h4>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Signal className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">{level}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">{duration}</span>
          </div>
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          Start Learning →
        </Button>
      </div>
    </div>
  );
}
