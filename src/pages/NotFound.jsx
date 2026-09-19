import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-sm flex flex-col items-center">
        {/* 404 Illustration Badge */}
        <div className="relative mb-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-brand-50 border-4 border-brand-100 flex items-center justify-center text-brand-600 shadow-inner">
            <span className="text-4xl sm:text-5xl font-black tracking-tighter">404</span>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-red-500 text-white p-2 rounded-full shadow-md">
            <AlertCircle className="w-6 h-6" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight">
          Oops, page not found!
        </h1>

        {/* Description */}
        <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all shadow-lg shadow-brand-600/25 hover:-translate-y-0.5"
        >
          <Home className="w-4 h-4" />
          <span>Go Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

