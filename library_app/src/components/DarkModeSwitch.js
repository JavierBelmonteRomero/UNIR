import React, { useState, useEffect } from 'react';

const DarkModeSwitch = ({ onChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedDarkMode === 'true');
  }, []);

  const handleToggle = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem('darkMode', newDarkModeState.toString());

    if (onChange) {
      onChange(newDarkModeState);
    }
  };

  return (
    <div className='dark-mode-toggle'>
        <label className='switch'>
            <input type='checkbox' checked={isDarkMode} onChange={handleToggle} />
            <span className='slider round'></span>
        </label>
        <span className='dark-mode-label'>Dark Mode</span>
    </div>
  );
};

export default DarkModeSwitch;