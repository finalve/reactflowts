import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Flow from "./flow/Flow";
import { ReactFlowProvider } from "reactflow";

import AddNodeOnEdgeDrop from "./flow/DragNDrop";

function App() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlowProvider>
          <AddNodeOnEdgeDrop />
        </ReactFlowProvider>
      </div>
    </>
  );
}

export default App;
