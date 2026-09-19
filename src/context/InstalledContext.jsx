import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import appsData from '../data/appsData.json';

const InstalledContext = createContext();

export const InstalledProvider = ({ children }) => {
  const [installedIds, setInstalledIds] = useState(() => {
    try {
      const saved = localStorage.getItem('apppulse_installed_ids');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.error('Error reading localStorage:', err);
    }
    // Default initial installed app for demonstration (id 1)
    return [1];
  });

  useEffect(() => {
    try {
      localStorage.setItem('apppulse_installed_ids', JSON.stringify(installedIds));
    } catch (err) {
      console.error('Error saving to localStorage:', err);
    }
  }, [installedIds]);

  const installApp = (app) => {
    if (!app || !app.id) return;
    if (installedIds.includes(app.id)) {
      toast.error(`${app.title} is already installed!`);
      return;
    }
    setInstalledIds((prev) => [...prev, app.id]);
    toast.success(`${app.title} installed successfully!`, {
      style: {
        borderRadius: '10px',
        background: '#1e293b',
        color: '#fff',
      },
      iconTheme: {
        primary: '#10b981',
        secondary: '#fff',
      },
    });
  };

  const uninstallApp = (app) => {
    if (!app || !app.id) return;
    setInstalledIds((prev) => prev.filter((id) => id !== app.id));
    toast.success(`${app.title} uninstalled successfully!`, {
      style: {
        borderRadius: '10px',
        background: '#1e293b',
        color: '#fff',
      },
      iconTheme: {
        primary: '#ef4444',
        secondary: '#fff',
      },
    });
  };

  const isInstalled = (id) => {
    return installedIds.includes(Number(id));
  };

  const getInstalledApps = () => {
    return appsData.filter((app) => installedIds.includes(app.id));
  };

  return (
    <InstalledContext.Provider
      value={{
        installedIds,
        installApp,
        uninstallApp,
        isInstalled,
        getInstalledApps,
      }}
    >
      {children}
    </InstalledContext.Provider>
  );
};

export const useInstalled = () => useContext(InstalledContext);

