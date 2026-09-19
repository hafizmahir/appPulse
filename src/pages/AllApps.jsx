import React, { useState, useTransition } from 'react';
import { Search, SearchX, X } from 'lucide-react';
import { AppCard } from '../components/AppCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import appsData from '../data/appsData.json';

export const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  // Case-insensitive filtering
  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Our All Applications
        </h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
          Explore All Apps Built for Seamless Development by Us - We Build Productive Apps
        </p>
      </div>

      {/* Control Bar (Stats Left, Search Right) */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Total Apps Found */}
        <div className="text-slate-800 font-bold text-base sm:text-lg">
          <span className="text-brand-600 font-extrabold">{filteredApps.length}</span> Apps Found
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search apps..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-full"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Loading State or Apps Grid */}
      {isPending ? (
        <LoadingSpinner label="Searching apps..." />
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        /* No App Found Fallback */
        <div className="bg-white rounded-3xl p-12 border border-slate-200/80 shadow-sm text-center max-w-lg mx-auto my-12">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <SearchX className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">No App Found</h3>
          <p className="text-sm text-slate-500 mb-6">
            We couldn't find any app matching "<span className="font-semibold text-slate-700">{searchTerm}</span>". Try refining your search keyword.
          </p>
          <button
            onClick={clearSearch}
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm px-6 py-2.5 rounded-full transition-all shadow-md shadow-brand-600/20"
          >
            Clear Search Filter
          </button>
        </div>
      )}
    </div>
  );
};

