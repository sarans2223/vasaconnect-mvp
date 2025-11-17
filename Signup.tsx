import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ArrowLeft } from "lucide-react";

interface SignupProps {
  onSignup: () => void;
  onLogin: () => void;
}

export function Signup({ onSignup, onLogin }: SignupProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="flex-1">
        <div className="mb-8">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-6">
            <ArrowLeft className="w-5 h-5 text-purple-600" />
          </div>
          
          <h2 className="mb-2 text-gray-900">Create your account</h2>
          <p className="text-gray-600">Join VASA and start building your future.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Full Name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Email Address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Password"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Create Account
          </Button>
        </form>
      </div>

      <div className="text-center">
        <button 
          onClick={onLogin}
          className="text-purple-600 hover:underline"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}
