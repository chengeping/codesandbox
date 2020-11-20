import React from "react";
import "./styles.css";
import Demo from "./demo";
import UseMemoExample from "./hooks/MemoExample";
import CallbackExample from "./hooks/CallbackExample";
import Sync from "./hooks/Sync";
import CreateHook from "./hooks/CreateHook";
import ContextExample from "./hooks/ContextExample";
import ReducerExample from "./hooks/ReducerExample";
export default function App() {
  return (
    <div className="App">
      <Demo />
      <hr />
      <UseMemoExample></UseMemoExample>
      <hr />
      <CallbackExample />
      <hr />
      <Sync />
      <hr />
      <CreateHook />
      <hr />
      <ContextExample />
      <hr />
      <ReducerExample />
    </div>
  );
}
