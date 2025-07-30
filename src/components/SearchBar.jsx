import React, { useState } from "react";

const SearchBar = ({ onSearch, onError }) => {
  const [value, setValue] = useState("");

  
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      if (onError) onError("Please enter a city name.");
      return;
    }
    if (onSearch) onSearch(value.trim());
  };

 
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search" aria-label="City Search">
      {/* Search icon */}
      <span className="search-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width={22}
          height={22}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>

      <input
        type="text"
        placeholder="Search for a city..."
        value={value}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        aria-label="City name"
        autoComplete="off"
      />

      <button type="submit" aria-label="Search">
        Search
      </button>
    </form>
  );
};

export default SearchBar;



