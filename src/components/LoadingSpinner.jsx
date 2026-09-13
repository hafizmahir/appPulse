import React from 'react';

export const LoadingSpinner = ({ label = 'Loading apps...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-brand-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-brand-600 border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-500 animate-pulse">{label}</p>
    </div>
  );
};
