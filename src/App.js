import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Main from "./main";

//Point d'entrée de l'application
function App() {
     return (
          <div className="App">
               <Main />
          </div>
     );
}

export default App;
