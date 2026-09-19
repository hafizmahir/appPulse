import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Star, Trash2 } from 'lucide-react';
import { formatDownloads } from './AppCard';

export const InstalledAppCard = ({ app, onUninstall }) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {/* Thumbnail */}
        <Link to={`/apps/${app.id}`} className="shrink-0 group">
          <img
            src={app.image}
            alt={app.title}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-slate-100 group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Info */}
        <div className="space-y-1">
          <Link
            to={`/apps/${app.id}`}
            className="font-semibold text-slate-800 text-base sm:text-lg hover:text-brand-600 transition-colors line-clamp-1"
          >
            {app.title}
          </Link>
          <p className="text-xs text-slate-500 font-medium">
            {app.companyName || 'Developed by AppPulse Studio'}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md">
              <Download className="w-3 h-3" />
              {formatDownloads(app.downloads)}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              {app.ratingAvg.toFixed(1)}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {app.size ? `${app.size} MB` : '15 MB'}
            </span>
          </div>
        </div>
      </div>

      {/* Uninstall Action Button */}
      <button
        onClick={() => onUninstall(app)}
        className="self-end sm:self-center shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow-red-500/20 cursor-pointer"
        title="Uninstall App"
      >
        <Trash2 className="w-4 h-4" />
        <span>Uninstall</span>
      </button>
    </div>
  );
};

