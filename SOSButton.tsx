import { AlertCircle } from "lucide-react";

interface SOSButtonProps {
  onClick: () => void;
}

export function SOSButton({ onClick }: SOSButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full shadow-lg flex items-center justify-center z-50 animate-pulse"
      aria-label="Emergency SOS"
    >
      <AlertCircle className="w-8 h-8 text-white" />
    </button>
  );
}
