import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, SearchX } from 'lucide-react';

export const AppNotFound = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm flex flex-col items-center">
        {/* Illustration Icon */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-6 border-4 border-amber-100 shadow-inner">
          <SearchX className="w-14 h-14 sm:w-20 sm:h-20" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
          OPPS!! APP NOT FOUND
        </h2>

        {/* Message */}
        <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          The app you are searching for is not found on our server, please try another app.
        </p>

        {/* Action Button */}
        <Link
          to="/apps"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all shadow-md shadow-brand-600/25 hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go Back to All Apps</span>
        </Link>
      </div>
    </div>
  );
};

