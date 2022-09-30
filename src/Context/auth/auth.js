import { createContext, useContext } from "react";

export const AuthContext = createContext({
  Professor: false,
  User_ID: null,
  User_password: null,
  Nick_Name: null,
  Hakgwa: null,
  score: null,
  point: null,
  etc: null,
  new_message: null,
  setIsLoggedIn: () => {},
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);
