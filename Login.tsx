import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ArrowLeft } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
  onSignup: () => void;
}

export function Login({ onLogin, onSignup }: LoginProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="flex-1">
        <div className="mb-8">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-6">
            <ArrowLeft className="w-5 h-5 text-purple-600" />
          </div>
          
          <h2 className="mb-2 text-gray-900">Welcome back</h2>
          <p className="text-gray-600">Login to continue your journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Email address"
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
            Login
          </Button>
        </form>
      </div>

      <div className="text-center">
        <button 
          onClick={onSignup}
          className="text-purple-600 hover:underline"
        >
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
}
