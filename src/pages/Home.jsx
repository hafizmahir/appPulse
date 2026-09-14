import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, Power, Timer, Pause, XCircle } from 'lucide-react';
import { AppCard } from '../components/AppCard';
import appsData from '../data/appsData.json';

export const Home = () => {
  // First 8 apps for Trending section
  const trendingApps = appsData.slice(0, 8);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-6 sm:pt-16 sm:pb-12 px-4 max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          We Build <br />
          <span className="text-[#8b5cf6]">Productive</span> Apps
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        {/* Store Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-xs"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M3.6 1.8l10.9 10.9L3.6 23.6c-.4-.4-.6-1-.6-1.6V2.4c0-.6.2-1.2.6-1.6z"/>
              <path fill="#EA4335" d="M18.7 10.4l-4.2 2.3-3.6-3.6 3.6-3.6 4.2 2.3c.7.4 1.1 1.2 1.1 2s-.4 1.6-1.1 2.6z"/>
              <path fill="#FBBC04" d="M14.5 12.7l4.2 2.3c.7.4 1.1 1.2 1.1 2 0 .8-.4 1.6-1.1 2l-4.2 2.3-3.6-3.6 3.6-5z"/>
              <path fill="#34A853" d="M3.6 23.6l10.9-10.9 3.6 3.6-4.2 2.3-8.7 4.8c-.5.2-1.1.2-1.6.2z"/>
            </svg>
            <span>Google Play</span>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-xs"
          >
            <svg className="w-5 h-5 fill-current text-slate-900" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-.99 2.96 1.07.08 2.14-.56 2.8-1.36z"/>
            </svg>
            <span>App Store</span>
          </a>
        </div>

        {/* Center Phone Mockup Showcase & Floating Badges */}
        <div className="mt-14 relative max-w-2xl mx-auto flex items-center justify-center">
          {/* Left Floating Circular Badges */}
          <div className="hidden sm:flex flex-col gap-8 absolute left-2 sm:-left-6 z-20">
            {/* Cyan Timer */}
            <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform">
              <Timer className="w-6 h-6" />
            </div>
            {/* Dark Blue Check */}
            <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-600/30 hover:scale-110 transition-transform">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            {/* Green Power */}
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 hover:scale-110 transition-transform">
              <Power className="w-6 h-6" />
            </div>
          </div>

          {/* Phone Mockup Frame */}
          <div className="relative z-10 w-72 sm:w-80 h-[440px] bg-slate-900 rounded-[44px] p-3 border-4 border-slate-800 shadow-2xl shadow-purple-600/30 translate-y-6">
            <div className="w-full h-full bg-slate-950 rounded-[34px] p-4 text-white overflow-hidden flex flex-col justify-between border border-slate-800">
              {/* Header inside phone */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-300">‹ All Courses</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">PRO</span>
                  <span className="text-[10px] bg-brand-600 text-white px-2 py-0.5 rounded-full font-bold">345</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 my-2">
                <span className="flex-1 text-center py-1.5 rounded-lg bg-brand-600 text-[11px] font-semibold text-white">Regular Course</span>
                <span className="flex-1 text-center py-1.5 rounded-lg bg-slate-900 text-[11px] font-semibold text-slate-400">Video Course</span>
              </div>

              {/* Course items */}
              <div className="space-y-2.5 text-left my-auto">
                <p className="text-[11px] font-bold text-slate-400">Chose your Course</p>
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-700 text-white space-y-1 shadow-md">
                  <p className="text-xs font-extrabold">Complete Web development</p>
                  <div className="flex items-center justify-between text-[10px] text-brand-200">
                    <span>203 Lesson</span>
                    <span>32%</span>
                  </div>
                  <div className="w-full bg-brand-900/50 h-1.5 rounded-full overflow-hidden mt-1">
                    <div className="bg-amber-400 h-full w-[32%] rounded-full"></div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white space-y-1 shadow-md">
                  <p className="text-xs font-extrabold">Python Programming</p>
                  <p className="text-[10px] text-orange-100">145 Lesson</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Circular Badges */}
          <div className="hidden sm:flex flex-col gap-8 absolute right-2 sm:-right-6 z-20">
            {/* Red Clock */}
            <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-500/30 hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            {/* Blue Pause */}
            <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 hover:scale-110 transition-transform">
              <Pause className="w-6 h-6" />
            </div>
            {/* Light Blue Cross */}
            <div className="w-12 h-12 rounded-full bg-sky-400 text-white flex items-center justify-center shadow-lg shadow-sky-400/30 hover:scale-110 transition-transform">
              <XCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner Section ("Trusted By Millions, Built For You") */}
      <section className="bg-[#8b5cf6] text-white pt-16 pb-14 px-4 shadow-inner relative z-0">
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Total Downloads */}
            <div className="space-y-1">
              <p className="text-xs font-medium text-purple-200 uppercase tracking-wider">Total Downloads</p>
              <p className="text-4xl sm:text-5xl font-black tracking-tight text-white">29.6M</p>
              <p className="text-xs text-purple-200">21% More Than Last Month</p>
            </div>

            {/* Total Reviews */}
            <div className="space-y-1">
              <p className="text-xs font-medium text-purple-200 uppercase tracking-wider">Total Reviews</p>
              <p className="text-4xl sm:text-5xl font-black tracking-tight text-white">906K</p>
              <p className="text-xs text-purple-200">46% More Than Last Month</p>
            </div>

            {/* Active Apps */}
            <div className="space-y-1">
              <p className="text-xs font-medium text-purple-200 uppercase tracking-wider">Active Apps</p>
              <p className="text-4xl sm:text-5xl font-black tracking-tight text-white">132+</p>
              <p className="text-xs text-purple-200">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Apps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Trending Apps</h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base">
            Explore All Trending Apps on the market developed by us
          </p>
        </div>

        {/* 8 Apps Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/apps"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-brand-600 text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Show All Apps</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
