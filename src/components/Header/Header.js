import React, { useState } from 'react';
import './Header.css';

const Header = ({ onSearch, onMenuClick, onLogoClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={onMenuClick}>
          <svg viewBox="0 0 24 24" width="24" height="24" preserveAspectRatio="xMidYMid meet" focusable="false">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
        <div className="logo" onClick={onLogoClick}>
            <svg viewBox="0 0 28 20" width="28" height="20" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon">
                <path fill="#FF0000" d="M27.4,3.1c-0.4-1.4-1.5-2.5-2.9-2.9C22.3,0,14,0,14,0S5.7,0,3.5,0.2C2.1,0.6,1,1.7,0.6,3.1C0,5.3,0,10,0,10s0,4.7,0.6,6.9c0.4,1.4,1.5,2.5,2.9,2.9C5.7,20,14,20,14,20s8.3,0,10.5-0.2c1.4-0.4,2.5-1.5,2.9-2.9C28,14.7,28,10,28,10S28,5.3,27.4,3.1z M11.2,14.3V5.7l7.8,4.3L11.2,14.3z"></path>
            </svg>
          <span className="logo-text">YouTube</span><span className="logo-country-code">IN</span>
        </div>
      </div>

      <div className="header-center">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div>
          <button type="button" className="mic-button">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
          </button>
        </form>
      </div>

      <div className="header-right">
        <button className="icon-button create-button">
            <svg viewBox="0 0 24 24" width="24" height="24" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path d="M17,10.5V7c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7v10c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1v-3.5l4,4v-11L17,10.5z M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z"></path>
            </svg>
        </button>
        <button className="icon-button">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
          <div className="notification-count">2</div>
        </button>
        <div className="profile-button">
          <div className="profile-avatar">R</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
