import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ServiceFormPage from "./pages/serviceFormPage";
import MainPage from "./pages/mainPage";
import FeedbackForm from "./components/feedbackForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/service" element={<ServiceFormPage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
