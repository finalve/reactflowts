import { useState } from "react";

import "./App.css";

import { ReactFlowProvider } from "reactflow";

import './index.css';

import DnDFlow from "./flow/DnDFlow";
function App() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlowProvider>
          <DnDFlow />
        </ReactFlowProvider>
      </div>
    </>
  );
}

export default App;
