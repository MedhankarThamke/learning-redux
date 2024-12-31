import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  return (
    <>
      <h1>learning redux toolkit</h1>
      <Todos></Todos>
      <AddTodo></AddTodo>
    </>
  );
}

export default App;
