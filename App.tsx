import { useState } from 'react';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { UpskillScreen } from './components/onboarding/UpskillScreen';
import { VerifiedJobsScreen } from './components/onboarding/VerifiedJobsScreen';
import { SmartMatchingScreen } from './components/onboarding/SmartMatchingScreen';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { UserTypeSelection } from './components/auth/UserTypeSelection';
import { Home } from './components/home/Home';
import { WorkerProfile } from './components/profile/WorkerProfile';
import { JobListings } from './components/jobs/JobListings';
import { JobDetails } from './components/jobs/JobDetails';
import { ClientDashboard } from './components/client/ClientDashboard';
import { PostJob } from './components/client/PostJob';
import { ViewApplications } from './components/client/ViewApplications';
import { WorkerProfileView } from './components/client/WorkerProfileView';
import { MatchedWorkers } from './components/client/MatchedWorkers';
import { MyJobs } from './components/client/MyJobs';
import { Messages } from './components/client/Messages';
import { ChatScreen } from './components/client/ChatScreen';
import { Courses } from './components/courses/Courses';
import { Settings } from './components/settings/Settings';
import { SOSScreen } from './components/emergency/SOSScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userType, setUserType] = useState<'worker' | 'client'>('worker');
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [selectedWorkerId, setSelectedWorkerId] = useState<number | null>(null);

  const navigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  const switchUserType = () => {
    setUserType(prev => prev === 'worker' ? 'client' : 'worker');
    navigate('home');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNext={() => navigate('upskill')} />;
      case 'upskill':
        return <UpskillScreen onNext={() => navigate('verified-jobs')} />;
      case 'verified-jobs':
        return <VerifiedJobsScreen onNext={() => navigate('smart-matching')} />;
      case 'smart-matching':
        return <SmartMatchingScreen onNext={() => navigate('login')} />;
      case 'login':
        return <Login onLogin={() => navigate('user-type')} onSignup={() => navigate('signup')} />;
      case 'signup':
        return <Signup onSignup={() => navigate('user-type')} onLogin={() => navigate('login')} />;
      case 'user-type':
        return <UserTypeSelection onSelectType={(type) => { setUserType(type); navigate('home'); }} />;
      case 'home':
        return <Home userType={userType} onNavigate={navigate} onSwitchType={switchUserType} />;
      case 'profile':
        return <WorkerProfile onNavigate={navigate} />;
      case 'job-listings':
        return <JobListings onNavigate={navigate} onSelectJob={(id) => { setSelectedJobId(id); navigate('job-details'); }} />;
      case 'job-details':
        return <JobDetails jobId={selectedJobId} onNavigate={navigate} />;
      case 'client-dashboard':
        return <ClientDashboard onNavigate={navigate} />;
      case 'post-job':
        return <PostJob onNavigate={navigate} />;
      case 'view-applications':
        return <ViewApplications onNavigate={navigate} onViewWorker={(id) => { setSelectedWorkerId(id); navigate('worker-profile-view'); }} />;
      case 'worker-profile-view':
        return <WorkerProfileView workerId={selectedWorkerId} onNavigate={navigate} />;
      case 'matched-workers':
        return <MatchedWorkers onNavigate={navigate} />;
      case 'my-jobs':
        return <MyJobs onNavigate={navigate} />;
      case 'messages':
        return <Messages onNavigate={navigate} />;
      case 'chat':
        return <ChatScreen onNavigate={navigate} />;
      case 'courses':
        return <Courses onNavigate={navigate} />;
      case 'settings':
        return <Settings onNavigate={navigate} onLogout={() => navigate('login')} onSwitchType={switchUserType} userType={userType} />;
      case 'sos':
        return <SOSScreen onNavigate={navigate} />;
      default:
        return <WelcomeScreen onNext={() => navigate('upskill')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {renderScreen()}
      </div>
    </div>
  );
}