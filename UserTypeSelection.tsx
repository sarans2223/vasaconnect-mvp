import { Button } from "../ui/button";
import { Briefcase, UserCheck } from "lucide-react";

interface UserTypeSelectionProps {
  onSelectType: (type: 'worker' | 'client') => void;
}

export function UserTypeSelection({ onSelectType }: UserTypeSelectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-white">How will you use VASA?</h2>
        <p className="opacity-90 max-w-sm mb-8">
          Choose your role to get started with a personalized experience.
        </p>

        <div className="w-full space-y-4">
          <button
            onClick={() => onSelectType('worker')}
            className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-2xl p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">I'm looking for work</h4>
                <p className="text-white/80">Find jobs, upskill, and grow your career</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectType('client')}
            className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-2xl p-6 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white mb-1">I'm looking to hire</h4>
                <p className="text-white/80">Post jobs and find verified workers</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
