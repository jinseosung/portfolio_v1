import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./utils/styles/style.css";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
