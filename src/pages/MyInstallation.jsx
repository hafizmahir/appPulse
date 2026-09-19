import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpDown, DownloadCloud } from 'lucide-react';
import { useInstalled } from '../context/InstalledContext';
import { InstalledAppCard } from '../components/InstalledAppCard';

export const MyInstallation = () => {
  const { getInstalledApps, uninstallApp } = useInstalled();
  const [sortOrder, setSortOrder] = useState('high-low');

  const installedApps = getInstalledApps();

  // Sort installed apps based on dropdown selection
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === 'high-low') {
      return b.downloads - a.downloads;
    } else {
      return a.downloads - b.downloads;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Your Installed Apps
        </h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
          Explore your installed apps on the market developed by us
        </p>
      </div>

      {/* Control Bar (Installed Counter & Download Sort Dropdown) */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Count */}
        <div className="text-slate-800 font-bold text-base sm:text-lg">
          <span className="text-brand-600 font-extrabold">{sortedApps.length}</span> Apps Installed
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <label htmlFor="sort-downloads" className="text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap flex items-center gap-1">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>Sort by Downloads:</span>
          </label>
          <select
            id="sort-downloads"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-slate-800 font-medium text-sm rounded-xl px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all cursor-pointer w-full sm:w-auto"
          >
            <option value="high-low">High-Low (Descending)</option>
            <option value="low-high">Low-High (Ascending)</option>
          </select>
        </div>
      </div>

      {/* Installed List or Empty State */}
      {sortedApps.length > 0 ? (
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <InstalledAppCard
              key={app.id}
              app={app}
              onUninstall={uninstallApp}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 border border-slate-200/80 shadow-sm text-center max-w-lg mx-auto my-12">
          <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <DownloadCloud className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No Apps Installed Yet</h3>
          <p className="text-sm text-slate-500 mb-6">
            You haven't installed any apps yet. Browse our applications gallery and install apps to see them here!
          </p>
          <Link
            to="/apps"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-brand-600/25"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore All Apps</span>
          </Link>
        </div>
      )}
    </div>
  );
};

