import React from 'react';
import { Star } from 'lucide-react';

export const StarRating = ({ rating, count }) => {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
      <span className="font-semibold text-slate-800 text-sm">{rating.toFixed(1)}</span>
      {count !== undefined && (
        <span className="text-xs text-slate-500">({count.toLocaleString()})</span>
      )}
    </div>
  );
};

