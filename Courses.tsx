import { CourseCard } from "../shared/CourseCard";
import { ArrowLeft } from "lucide-react";

interface CoursesProps {
  onNavigate: (screen: string) => void;
}

const courses = [
  {
    id: 1,
    name: "Basic Computer Skills",
    level: "Beginner",
    duration: "2 hours",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Communication Training",
    level: "Beginner",
    duration: "1.5 hours",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Data Entry Basics",
    level: "Beginner",
    duration: "3 hours",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    name: "Tailoring Fundamentals",
    level: "Beginner",
    duration: "4 hours",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    name: "Excel for Beginners",
    level: "Beginner",
    duration: "2.5 hours",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    name: "Professional Email Writing",
    level: "Beginner",
    duration: "1 hour",
    color: "from-pink-500 to-rose-500"
  }
];

export function Courses({ onNavigate }: CoursesProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('home')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">Courses for You</h2>
        <p className="text-white/80">{courses.length} courses available</p>
      </div>

      {/* Courses List */}
      <div className="p-6 space-y-4">
        {courses.map((course) => (
          <CourseCard 
            key={course.id}
            {...course}
          />
        ))}
      </div>
    </div>
  );
}
