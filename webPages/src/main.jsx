// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// 1. 아래 줄 추가
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2. App을 BrowserRouter로 감싸기 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
