import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects ";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-0" style={{ height: "100vh" }}>
            <Navbar />
          </div>
          <div className="col-9">
            <div className="row" style={{ height: "8vh" }}>
              <Header />
            </div>
            <div className="row" style={{ height: "92vh" }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/integrations" element={<Integrations />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App
