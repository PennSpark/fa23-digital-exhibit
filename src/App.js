import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Timer from "./components/Timer.js";
import "./App.css";
import Home from "./pages/Home";
import Nascent from "./pages/Nascent.jsx";
import Kindergarten from "./pages/Kindergarten.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Timer />} />
          <Route path="home" element={<Navigate replace to="/" />} />
          <Route path="nav" element={<Home />} />
          <Route path="nascent" element={<Nascent />} />
          <Route path="kindergarten" element={<Kindergarten />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
