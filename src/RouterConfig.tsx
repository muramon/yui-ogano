import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Gallery from "./components/Gallery";
import Biography from "./components/Biography";
import Zine from "./components/Zine";


export const RouterConfig:React.VFC =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="biography" element={<Biography />} />
        <Route path="zine" element={<Zine />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}