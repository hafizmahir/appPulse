import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Apple, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { AppCard } from '../components/AppCard';
import appsData from '../data/appsData.json';

export const Home = () => {
  // First 8 apps for Trending section
  const trendingApps = appsData.slice(0, 8);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 sm:pt-16 sm:pb-12 px-4 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-700 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>Next-Generation Productivity Suite</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
          We Build <span className="text-brand-600">Productive Apps</span>
        </h1>

        <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          At AppPulse, we craft innovative apps designed to make everyday life easier, sharper, and more exciting. Explore our top-tier apps designed to elevate your productivity to new heights.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Google Play</span>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5"
          >
            <Apple className="w-4.5 h-4.5 fill-white" />
            <span>App Store</span>
          </a>
        </div>

        {/* Hero App Showcase Mockup */}
        <div className="mt-12 relative max-w-xl mx-auto">
          <div className="relative mx-auto w-64 sm:w-72 h-[420px] bg-slate-900 rounded-[40px] p-3 border-4 border-slate-800 shadow-2xl shadow-brand-500/20">
            {/* Phone Screen Mockup */}
            <div className="w-full h-full bg-slate-950 rounded-[30px] p-4 text-white overflow-hidden relative flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-brand-400">SmPian-ToDo List</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium">Active</span>
              </div>

              <div className="space-y-2.5 my-auto text-left">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium text-slate-200">Complete Web Mockup</span>
                  </div>
                  <span className="text-[10px] text-slate-400">9:30 AM</span>
                </div>
                <div className="p-3 rounded-xl bg-brand-950/80 border border-brand-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-400" />
                    <span className="text-xs font-medium text-slate-200">Optimize Build Speed</span>
                  </div>
                  <span className="text-[10px] text-brand-300">11:00 AM</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-medium text-slate-200">Review Release Notes</span>
                  </div>
                  <span className="text-[10px] text-slate-400">2:15 PM</span>
                </div>
              </div>

              <div className="bg-brand-600 rounded-xl py-2 px-3 text-center text-xs font-bold text-white shadow-md">
                Explore Productivity
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="hidden sm:flex absolute -left-12 top-1/4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-bounce duration-[3000ms]">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">100% Secure</p>
              <p className="text-[10px] text-slate-500">Verified Apps</p>
            </div>
          </div>

          <div className="hidden sm:flex absolute -right-12 bottom-1/4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-pulse">
            <div className="w-9 h-9 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">Ultra Fast</p>
              <p className="text-[10px] text-slate-500">Lightweight Apps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="bg-brand-600 text-white py-12 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-white">29.6M</div>
              <p className="text-sm font-medium text-brand-100">Total Downloads</p>
              <p className="text-xs text-brand-200/80 mt-1">Across iOS & Android</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-white">906K</div>
              <p className="text-sm font-medium text-brand-100">Active Users</p>
              <p className="text-xs text-brand-200/80 mt-1">Daily Active Engagement</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
              <div className="text-4xl sm:text-5xl font-black mb-2 text-white">132+</div>
              <p className="text-sm font-medium text-brand-100">Products Built</p>
              <p className="text-xs text-brand-200/80 mt-1">Published Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Apps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
