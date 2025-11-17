import { Button } from "../ui/button";
import { FeatureBlock } from "../shared/FeatureBlock";
import { SOSButton } from "../shared/SOSButton";
import { BookOpen, ShieldCheck, Target, TrendingUp, Users, Briefcase, Menu, Bell, ArrowLeftRight } from "lucide-react";

interface HomeProps {
  userType: 'worker' | 'client';
  onNavigate: (screen: string) => void;
  onSwitchType?: () => void;
}

export function Home({ userType, onNavigate, onSwitchType }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => onNavigate('settings')}>
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex gap-3">
            {userType === 'client' && (
              <button 
                onClick={() => onNavigate('messages')}
                className="relative"
              >
                <Bell className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
              </button>
            )}
            <Bell className="w-6 h-6" />
          </div>
        </div>
        
        <h3 className="text-white">Hello, {userType === 'worker' ? 'Priya' : 'Lakshmi'} 👋</h3>
        <p className="text-white/80 mt-1">{userType === 'worker' ? 'Worker Account' : 'Client Account'}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="mb-4 text-gray-900">What you can do here</h4>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {userType === 'worker' ? (
            <>
              <FeatureBlock 
                icon={<BookOpen className="w-6 h-6" />}
                title="Upskill with short courses"
                gradient="from-blue-500 to-cyan-500"
                onClick={() => onNavigate('courses')}
              />
              <FeatureBlock 
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Verify your profile"
                gradient="from-emerald-500 to-teal-500"
                onClick={() => onNavigate('profile')}
              />
              <FeatureBlock 
                icon={<Target className="w-6 h-6" />}
                title="Get matched with jobs"
                gradient="from-purple-500 to-pink-500"
                onClick={() => onNavigate('job-listings')}
              />
              <FeatureBlock 
                icon={<TrendingUp className="w-6 h-6" />}
                title="Track your progress"
                gradient="from-orange-500 to-red-500"
                onClick={() => onNavigate('profile')}
              />
            </>
          ) : (
            <>
              <FeatureBlock 
                icon={<Users className="w-6 h-6" />}
                title="Explore client needs"
                gradient="from-blue-500 to-cyan-500"
                onClick={() => onNavigate('client-dashboard')}
              />
              <FeatureBlock 
                icon={<Briefcase className="w-6 h-6" />}
                title="Connect with opportunities"
                gradient="from-purple-500 to-pink-500"
                onClick={() => onNavigate('client-dashboard')}
              />
            </>
          )}
        </div>

        <Button 
          onClick={() => onNavigate(userType === 'worker' ? 'job-listings' : 'post-job')}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          {userType === 'worker' ? 'Find Jobs' : 'Create Job Request'}
        </Button>
      </div>

      {/* SOS Button */}
      <SOSButton onClick={() => onNavigate('sos')} />
    </div>
  );
}