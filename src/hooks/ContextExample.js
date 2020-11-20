import React, { useState, useContext } from "react";

const themes = {
  light: {
    foreground: "#000",
    background: "#eee"
  },
  dark: {
    foreground: "#fff",
    background: "#222"
  }
};

const ThemeContext = React.createContext({
  theme: themes.light,
  toggle: () => {}
});
export default () => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: () => {
          setTheme((theme) => {
            setTheme(theme === themes.light ? themes.dark : themes.light);
          });
        }
      }}
    >
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return <ThemeButton />;
};

const ThemeButton = () => {
  const context = useContext(ThemeContext);
  return (
    <div
      style={{
        fontSize: "30px",
        color: context.theme.foreground,
        background: context.theme.background
      }}
      onClick={() => {
        context.toggle();
      }}
    >
      useContext button
    </div>
  );
};
