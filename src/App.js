import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Timer from "./components/Timer.js";
import "./App.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Timer />} />
          <Route path="home" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
