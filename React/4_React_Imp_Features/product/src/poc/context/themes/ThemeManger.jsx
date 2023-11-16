import React, { useState, useContext } from "react";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
//1st step is to createContext
export const ThemeWrapper = React.createContext();
function ThemeManger() {
  // Here we want to pass CTheme prop to Header and Footer but not to article and also change that
  const [CTheme, setCTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = CTheme == "light" ? "dark" : "light";
    setCTheme(newTheme);
  };

  return (
    // 2nd step is to create Provider
    //we need to use same prop name mentioned in value while extracting
    <ThemeWrapper.Provider value={{ CTheme }}>
      <h1>Theme Management</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Header></Header>
      <Article></Article>
      <Footer></Footer>
    </ThemeWrapper.Provider>
  );
}
//This is a custom hook
export const useTheme = () => useContext(ThemeWrapper);

export default ThemeManger;

/*
In case value prop is not provided in the <ThemeWrapper.Provider> it will take default value provided inside React.createContext
const ThemeWrapper = createContext("light");

function App() {
  return (
    <ThemeWrapper.Provider>
      <Header />
    </ThemeWrapper.Provider>
  );
}

function Header() {
  return (
    <Title />
  );
}

function Title() {
  const theme = useContext(ThemeContext);
  return (
    <h1>{theme}</h1>
  );
}



*********/
