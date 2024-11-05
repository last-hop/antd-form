import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveForm from "./pages/resform";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ResponsiveForm/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
