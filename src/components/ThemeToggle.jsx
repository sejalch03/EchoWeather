import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    className={`theme-toggle ${theme === 'dark' ? 'toggle-dark' : 'toggle-light'}`}
    onClick={toggleTheme}
    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    type="button"
  >
    {theme === 'light' ? (
      <>
        <span className="toggle-icon" aria-hidden="true" role="img">
          {/* Moon SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M21 13A9 9 0 1 1 13 3a7 7 0 0 0 8 10z"
                 fill="url(#moon-gradient)" />
            <defs>
              <linearGradient id="moon-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#43e97b"/>
                <stop offset="1" stopColor="#38f9d7"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="toggle-label">Dark Mode</span>
      </>
    ) : (
      <>
        <span className="toggle-icon" aria-hidden="true" role="img">
          {/* Sun SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" fill="url(#sun-gradient)" />
            <g stroke="url(#sun-gradient)" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.65" y2="5.65"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.65" y2="18.36"/>
              <line x1="18.36" y1="5.65" x2="19.78" y2="4.22"/>
            </g>
            <defs>
              <linearGradient id="sun-gradient" x1="0" y1="0" x2="24" y2="24">
                <stop stopColor="#fceabb"/>
                <stop offset="1" stopColor="#f8b500"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="toggle-label">Light Mode</span>
      </>
    )}
  </button>
);

export default ThemeToggle;


