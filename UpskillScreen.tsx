import { BookOpen } from "lucide-react";

interface UpskillScreenProps {
  onNext: () => void;
}

export function UpskillScreen({ onNext }: UpskillScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
      <div className="flex-1 flex flex-col items-center justify-center text-center" onClick={onNext}>
        <div className="mb-8 bg-white/20 backdrop-blur-sm rounded-full p-6">
          <BookOpen className="w-16 h-16" />
        </div>
        
        <h2 className="mb-4">Learn the skills you need</h2>
        
        <p className="opacity-90 max-w-sm">
          Access micro-courses, quick lessons, and practical training designed for beginners.
        </p>
      </div>
      
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
      </div>
    </div>
  );
}
