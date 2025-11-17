import { Button } from "../ui/button";
import { Target } from "lucide-react";

interface SmartMatchingScreenProps {
  onNext: () => void;
}

export function SmartMatchingScreen({ onNext }: SmartMatchingScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-8 bg-white/20 backdrop-blur-sm rounded-full p-6">
          <Target className="w-16 h-16" />
        </div>
        
        <h2 className="mb-4">Matched for you</h2>
        
        <p className="opacity-90 max-w-sm mb-8">
          We use your skills and preferences to recommend the most relevant job opportunities.
        </p>
      </div>
      
      <div className="w-full space-y-4">
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
        
        <Button 
          onClick={onNext}
          className="w-full bg-white text-purple-600 hover:bg-gray-100"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
