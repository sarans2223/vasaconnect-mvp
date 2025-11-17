import { ArrowLeft, Phone, MessageCircle, MapPin, AlertCircle, Shield, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface SOSScreenProps {
  onNavigate: (screen: string) => void;
}

const emergencyContacts = [
  {
    name: "Women Helpline",
    number: "1091",
    description: "24/7 Women in Distress",
    type: "National"
  },
  {
    name: "Police Emergency",
    number: "100",
    description: "Immediate Police Assistance",
    type: "Emergency"
  },
  {
    name: "Domestic Violence Helpline",
    number: "181",
    description: "Women's Helpline",
    type: "Support"
  },
  {
    name: "Child Helpline",
    number: "1098",
    description: "Child Protection Services",
    type: "Support"
  }
];

const trustedContacts = [
  {
    name: "Meera (Sister)",
    number: "+91 98765 43210",
    relation: "Family"
  },
  {
    name: "Rahul (Brother)",
    number: "+91 98765 43211",
    relation: "Family"
  },
  {
    name: "Sneha (Friend)",
    number: "+91 98765 43212",
    relation: "Friend"
  }
];

export function SOSScreen({ onNavigate }: SOSScreenProps) {
  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const message = `Emergency! I need help. My location: https://maps.google.com/?q=${latitude},${longitude}`;
        
        // Share via SMS to all trusted contacts
        trustedContacts.forEach(contact => {
          window.location.href = `sms:${contact.number}?body=${encodeURIComponent(message)}`;
        });
      });
    }
  };

  const handleAlertVASA = () => {
    // This would alert VASA support team
    alert("Emergency alert sent to VASA Safety Team. They will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white p-6">
        <button onClick={() => onNavigate('home')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <AlertCircle className="w-8 h-8" />
          <h2 className="text-white">Emergency SOS</h2>
        </div>
        <p className="text-white/90">Quick access to emergency services and your trusted contacts</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h4 className="text-gray-900 mb-4">Quick Actions</h4>
          <div className="space-y-3">
            <Button 
              onClick={() => handleEmergencyCall('100')}
              className="w-full bg-red-600 hover:bg-red-700 h-14"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Police (100)
            </Button>
            
            <Button 
              onClick={handleShareLocation}
              variant="outline" 
              className="w-full h-14 border-red-600 text-red-600 hover:bg-red-50"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Share Location with Contacts
            </Button>

            <Button 
              onClick={handleAlertVASA}
              variant="outline" 
              className="w-full h-14"
            >
              <Shield className="w-5 h-5 mr-2" />
              Alert VASA Safety Team
            </Button>
          </div>
        </div>

        {/* Emergency Helplines */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h4 className="text-gray-900 mb-4">Emergency Helplines</h4>
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="text-gray-900 mb-1">{contact.name}</h5>
                    <p className="text-gray-600">{contact.description}</p>
                  </div>
                  <Badge variant="secondary">{contact.type}</Badge>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button 
                    onClick={() => handleEmergencyCall(contact.number)}
                    className="flex-1 bg-red-600 hover:bg-red-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {contact.number}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Contacts */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-gray-900">Your Trusted Contacts</h4>
            <button className="text-purple-600 hover:underline">Edit</button>
          </div>
          <div className="space-y-3">
            {trustedContacts.map((contact, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="text-gray-900">{contact.name}</h5>
                    <p className="text-gray-500">{contact.relation}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleEmergencyCall(contact.number)}
                    variant="outline" 
                    className="flex-1"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button 
                    onClick={() => window.location.href = `sms:${contact.number}`}
                    variant="outline" 
                    className="flex-1"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    SMS
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-purple-50 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h5 className="text-purple-900 mb-2">Safety Tips</h5>
              <ul className="text-purple-800 space-y-1">
                <li>• Always meet in public places for first meetings</li>
                <li>• Share your location with trusted contacts</li>
                <li>• Trust your instincts - if something feels wrong, leave</li>
                <li>• Keep your phone charged and accessible</li>
                <li>• Verify job postings through VASA verification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
