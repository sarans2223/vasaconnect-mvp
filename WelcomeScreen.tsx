import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-8 bg-white/20 backdrop-blur-sm rounded-full p-6">
          <Sparkles className="w-16 h-16" />
        </div>
        
        <h1 className="mb-6">VASA</h1>
        
        <p className="opacity-90 max-w-sm">
          Empowering women to upskill, verify identity, and get matched with real job opportunities.
        </p>
      </div>
      
      <Button 
        onClick={onNext}
        className="w-full bg-white text-purple-600 hover:bg-gray-100"
      >
        Get Started
      </Button>
    </div>
  );
}
