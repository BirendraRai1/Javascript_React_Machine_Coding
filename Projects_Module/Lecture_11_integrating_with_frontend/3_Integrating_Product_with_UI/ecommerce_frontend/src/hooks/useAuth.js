import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;

//This is a custom hook because it starts with use
//So whoever wants to use my useAuth will envitably get my user object mentioned in the AuthProvider file
