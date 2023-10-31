import { useContext } from "react";
import "./themeManager.css";
import { ThemeWrapper } from "./ThemeManger";

function Footer() {
  return (
    <div style={{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
      <div>Footer</div>
      <div>⬇</div>
      <Options></Options>
      <Options></Options>
      <Options></Options>
      <div>-----------------------------</div>
    </div>
  );
}
function Options() {
  // 3rd step is to useContext and pass it the variable through which you you have created context
  const { CTheme } = useContext(ThemeWrapper);
  return <div className={CTheme == "light" ? "light" : "dark"}>Option</div>;
}
export default Footer;
