import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./utils/styles/style.css";
import Header from "./components/header";
import Home from "./pages/Home/index";
import Footer from "./components/footer";
import Project from "./pages/Project/index";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:projectId" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
