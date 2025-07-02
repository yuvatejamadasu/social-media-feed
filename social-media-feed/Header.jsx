import { User, Bell, Search } from 'lucide-react';
import { Button } from './ui/button';

export const Header = ({ activeView, setActiveView }) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">SocialFeed</h1>
          </div>
          <nav className="flex items-center space-x-2">
            <Button
              variant={activeView === 'feed' ? 'default' : 'ghost'}
              onClick={() => setActiveView('feed')}
              className="transition-all duration-200"
            >
              Feed
            </Button>
            <Button
              variant={activeView === 'profile' ? 'default' : 'ghost'}
              onClick={() => setActiveView('profile')}
              className="transition-all duration-200"
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
