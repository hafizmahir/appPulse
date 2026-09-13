import React from 'react';
import { useParams } from 'react-router-dom';
import { Download, Star, MessageSquare, Check, HardDrive } from 'lucide-react';
import { useInstalled } from '../context/InstalledContext';
import { ReviewChart } from '../components/ReviewChart';
import { AppNotFound } from '../components/AppNotFound';
import { formatDownloads } from '../components/AppCard';
import appsData from '../data/appsData.json';

export const AppDetails = () => {
  const { id } = useParams();
  const { isInstalled, installApp } = useInstalled();

  // Find app by numerical ID
  const appId = parseInt(id, 10);
  const app = appsData.find((a) => a.id === appId);

  // Handle non-existent app ID
  if (!app) {
    return <AppNotFound />;
  }

  const installed = isInstalled(app.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Top App Info Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
        {/* App Image (Left) */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* App Details (Right) */}
        <div className="flex-1 space-y-4 text-center md:text-left w-full">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {app.title}
            </h1>
            <p className="text-sm font-medium text-brand-600 mt-1">
              {app.companyName || 'Developed by AppPulse Studio'}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 py-2 border-y border-slate-100">
            {/* Downloads */}
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <Download className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Downloads</p>
                <p className="text-base font-bold text-slate-800">{formatDownloads(app.downloads)}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-500">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Rating</p>
                <p className="text-base font-bold text-slate-800">{app.ratingAvg.toFixed(1)} / 5.0</p>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-brand-50 text-brand-600">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Reviews</p>
                <p className="text-base font-bold text-slate-800">{formatDownloads(app.reviews)}</p>
              </div>
            </div>

            {/* Size */}
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                <HardDrive className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Size</p>
                <p className="text-base font-bold text-slate-800">{app.size ? `${app.size} MB` : '18 MB'}</p>
              </div>
            </div>
          </div>

          {/* Action Install Button */}
          <div className="pt-2">
            {installed ? (
              <button
                disabled
                className="inline-flex items-center gap-2.5 bg-emerald-600 text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-2xl cursor-not-allowed opacity-90 shadow-md shadow-emerald-600/20"
              >
                <Check className="w-5 h-5" />
                <span>Installed</span>
              </button>
            ) : (
              <button
                onClick={() => installApp(app)}
                className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-2xl transition-all shadow-md shadow-brand-600/30 hover:shadow-lg hover:shadow-brand-600/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Install App ({app.size || 18} MB)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Review Bar Chart Section */}
      <ReviewChart ratings={app.ratings} />

      {/* Description Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Description</h2>
        <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
          <p>{app.description}</p>
          <p>
            Designed with user ergonomics and seamless responsiveness in mind, this application integrates cutting-edge technology with intuitive controls to deliver an uncompromised experience across desktop, tablet, and mobile displays.
          </p>
          <p>
            Whether managing complex workflows, setting up automated smart alerts, or analyzing weekly progress reports, {app.title} delivers the essential tools required to streamline your routine and elevate overall productivity.
          </p>
        </div>
      </div>
    </div>
  );
};
