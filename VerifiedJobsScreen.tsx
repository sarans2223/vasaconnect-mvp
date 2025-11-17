import { ShieldCheck } from "lucide-react";

interface VerifiedJobsScreenProps {
  onNext: () => void;
}

export function VerifiedJobsScreen({ onNext }: VerifiedJobsScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white">
      <div className="flex-1 flex flex-col items-center justify-center text-center" onClick={onNext}>
        <div className="mb-8 bg-white/20 backdrop-blur-sm rounded-full p-6">
          <ShieldCheck className="w-16 h-16" />
        </div>
        
        <h2 className="mb-4">Jobs you can trust</h2>
        
        <p className="opacity-90 max-w-sm">
          We verify both clients and workers to create a safe and reliable work environment.
        </p>
      </div>
      
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
      </div>
    </div>
  );
}
