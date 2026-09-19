import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Star } from 'lucide-react';

export const formatDownloads = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toString();
};

export const AppCard = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="group bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-brand-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
    >
      <div>
        {/* App Image Container */}
        <div className="aspect-square w-full rounded-xl bg-slate-100 overflow-hidden mb-4 relative group-hover:scale-[1.02] transition-transform duration-300">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* App Title */}
        <h3 className="font-semibold text-slate-800 text-base line-clamp-1 group-hover:text-brand-600 transition-colors mb-2">
          {app.title}
        </h3>
      </div>

      {/* Metrics Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-2">
        {/* Download Count */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium">
          <Download className="w-3.5 h-3.5" />
          <span>{formatDownloads(app.downloads)}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-semibold">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{app.ratingAvg.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

