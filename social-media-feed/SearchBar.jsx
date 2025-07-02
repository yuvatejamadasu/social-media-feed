import { Search } from 'lucide-react';

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type="text"
        placeholder="Search posts, users, or topics..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 bg-white border border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 rounded px-3 py-2 w-full"
      />
    </div>
  );
}; 