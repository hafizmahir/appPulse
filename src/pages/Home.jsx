import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, ChevronLeft, Play, FileText, Gauge, Check, Power, Clock, LayoutGrid, Zap } from 'lucide-react';
import { AppCard } from '../components/AppCard';
import appsData from '../data/appsData.json';

export const Home = () => {
  // First 8 apps for Trending section
  const trendingApps = appsData.slice(0, 8);

  return (
    <div className="space-y-16 pb-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-2 sm:pt-16 sm:pb-6 px-4 max-w-7xl mx-auto text-center">
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
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-xs"
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
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-xs"
          >
            <svg className="w-5 h-5 fill-current text-slate-900" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-.99 2.96 1.07.08 2.14-.56 2.8-1.36z"/>
            </svg>
            <span>App Store</span>
          </a>
        </div>

        {/* Center Phone Mockup Showcase & Floating Badges */}
        <div className="mt-14 relative max-w-2xl mx-auto flex items-center justify-center">
          {/* Left Floating Badges */}
          <div className="hidden sm:flex flex-col gap-10 absolute -left-4 sm:-left-12 z-20">
            {/* 1. Speedometer Badge (Cyan) */}
            <div className="w-14 h-14 rounded-full bg-[#00a8cc] text-white flex items-center justify-center shadow-lg shadow-cyan-500/40 hover:scale-110 transition-transform">
              <Gauge className="w-7 h-7" />
            </div>
            {/* 2. Checkmark Badge (Dark Blue) */}
            <div className="w-14 h-14 rounded-full bg-[#0052cc] text-white flex items-center justify-center shadow-lg shadow-blue-600/40 hover:scale-110 transition-transform">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            {/* 3. Power Badge (Green) */}
            <div className="w-14 h-14 rounded-full bg-[#2e7d32] text-white flex items-center justify-center shadow-lg shadow-green-600/40 hover:scale-110 transition-transform">
              <Power className="w-7 h-7 stroke-[2.5]" />
            </div>
          </div>

          {/* Phone Frame */}
          <div className="relative z-10 w-72 sm:w-80 h-[450px] bg-slate-900 rounded-[48px] p-2.5 border-[6px] border-slate-700 shadow-2xl shadow-purple-600/30 translate-y-10 overflow-hidden">
            {/* Speaker Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center gap-2">
              <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
            </div>

            {/* Screen Content */}
            <div className="w-full h-full bg-[#120d31] rounded-[38px] pt-6 px-4 pb-4 text-white flex flex-col justify-start space-y-4 border border-slate-800 select-none text-left">
              {/* Header inside phone */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-slate-300 font-semibold text-xs">
                  <ChevronLeft className="w-4 h-4" />
                  <span>All Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#e67e22] text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                    👑 PRO
                  </span>
                  <span className="bg-[#ff6b6b] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                    💎 345
                  </span>
                  <div className="relative">
                    <Bell className="w-4 h-4 text-slate-300" />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 bg-[#1b1542] p-1 rounded-xl">
                <div className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-[#6342e8] text-[11px] font-bold text-white shadow-sm">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Regular Course</span>
                </div>
                <div className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-400">
                  <Play className="w-3 h-3 fill-current" />
                  <span>Video Course</span>
                </div>
              </div>

              {/* Section Header */}
              <p className="text-xs font-bold text-slate-200 pt-1">Chose your Course</p>

              {/* Card 1: Web Dev */}
              <div className="relative p-4 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-lg overflow-hidden">
                <div className="pr-16 space-y-1">
                  <p className="text-xs font-extrabold leading-tight">Complete Web development</p>
                  <p className="text-[10px] text-purple-200 font-medium">203 Lesson</p>
                </div>
                <span className="absolute bottom-3 left-32 text-[10px] font-bold text-purple-100">32%</span>

                {/* Right side floating code window illustration */}
                <div className="absolute right-2 top-3 w-16 h-12 bg-[#2d1b69] border border-purple-400/30 rounded-lg p-1.5 shadow-md flex flex-col justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full bg-purple-400/50 h-1 rounded-full"></div>
                    <div className="w-3/4 bg-purple-300/40 h-1 rounded-full"></div>
                    <div className="w-1/2 bg-amber-400/80 h-1 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Card 2: Python */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-white shadow-lg space-y-1">
                <p className="text-xs font-extrabold">Python Programming</p>
                <p className="text-[10px] text-orange-100 font-medium">145 Lesson</p>
              </div>
            </div>
          </div>

          {/* Right Floating Badges */}
          <div className="hidden sm:flex flex-col gap-10 absolute -right-4 sm:-right-12 z-20">
            {/* 4. Clock Badge (Red) */}
            <div className="w-14 h-14 rounded-full bg-[#f44336] text-white flex items-center justify-center shadow-lg shadow-red-500/40 hover:scale-110 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            {/* 5. Trello/Layout Badge (Blue) */}
            <div className="w-14 h-14 rounded-full bg-[#0067b8] text-white flex items-center justify-center shadow-lg shadow-blue-600/40 hover:scale-110 transition-transform">
              <LayoutGrid className="w-7 h-7" />
            </div>
            {/* 6. Swords/Tools Badge (Cyan/Blue) */}
            <div className="w-14 h-14 rounded-full bg-[#0288d1] text-white flex items-center justify-center shadow-lg shadow-sky-500/40 hover:scale-110 transition-transform">
              <Zap className="w-7 h-7" />
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
