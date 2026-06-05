import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");

    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");

    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;