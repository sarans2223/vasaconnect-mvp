import { ReactNode } from "react";

interface FeatureBlockProps {
  icon: ReactNode;
  title: string;
  gradient: string;
  onClick?: () => void;
}

export function FeatureBlock({ icon, title, gradient, onClick }: FeatureBlockProps) {
  return (
    <button 
      onClick={onClick}
      className={`bg-gradient-to-br ${gradient} text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-left`}
    >
      <div className="mb-3">
        {icon}
      </div>
      <p className="text-white">{title}</p>
    </button>
  );
}
