import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from '../TdbPageComponents/DefaultLayout';

// Home
// Tools
// Download
// About

export default function ProjectPagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element="" />
          <Route path="/tools" element="" />
          <Route path="/download" element="" />
          <Route path="/about" element="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};