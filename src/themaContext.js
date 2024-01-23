import React, { createContext, useContext, useState } from "react";

export const ThemaContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemaProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemaContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemaContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ThemaContext);
};
