import { ArrowLeft, User, Bell, ShieldCheck, HelpCircle, LogOut, ChevronRight, RefreshCw } from "lucide-react";

interface SettingsProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  onSwitchType?: () => void;
  userType?: 'worker' | 'client';
}

export function Settings({ onNavigate, onLogout, onSwitchType, userType }: SettingsProps) {
  const settingsItems = [
    { icon: User, label: "Edit Profile", action: () => onNavigate('profile') },
    { icon: Bell, label: "Notifications", action: () => {} },
    { icon: ShieldCheck, label: "Identity Verification", action: () => {} },
    { icon: HelpCircle, label: "Help & Support", action: () => {} },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <button onClick={() => onNavigate('home')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">Settings</h2>
      </div>

      {/* Settings List */}
      <div className="p-6">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
          {settingsItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-purple-600" />
                <span className="text-gray-900">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>

        {/* Switch Account Type - For Demo Purposes */}
        {onSwitchType && (
          <button
            onClick={onSwitchType}
            className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:bg-purple-50 transition-colors mb-4"
          >
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-purple-600" />
              <div className="text-left">
                <p className="text-gray-900">Switch to {userType === 'worker' ? 'Client' : 'Worker'} Mode</p>
                <p className="text-gray-500">Demo feature to test both experiences</p>
              </div>
            </div>
          </button>
        )}

        <button
          onClick={onLogout}
          className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm hover:bg-red-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5 text-red-600" />
            <span className="text-red-600">Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
}