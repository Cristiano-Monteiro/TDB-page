import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from '../TdbPageComponents/DefaultLayout';

import Home from "./Pages/Home/Home";
import Tools from "./Pages/Tools/Tools";
import Download from "./Pages/Download/Download";
import About from "./Pages/About/About";

export default function ProjectPagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/tools" element={<Tools/>} />
          <Route path="/download" element={<Download/>} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};