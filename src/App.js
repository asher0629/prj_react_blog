import "./App.css";
import { createContext } from "react";
import Header from "./component/header";
import Router from "./router/router";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
