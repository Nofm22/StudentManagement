import React, { useEffect, useState } from "react";
import "./Toogle.scss";

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };
  useEffect(handleToggle, [setIsDarkMode]);

  return (
    <label className={`toggle ${isDarkMode ? "dark" : "light"}`}>
      <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <span className="slider" />
    </label>
  );
};

export default Toggle;
