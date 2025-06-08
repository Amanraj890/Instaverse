import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AIChatbot from "./components/AIChatbot";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <AIChatbot />
      </div>
    </Router>
  );
}
export default App;