import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from '../TdbPageComponents/DefaultLayout';

import Home from "./Pages/Home/Home";
import Download from "./Pages/Download/Download";
import About from "./Pages/About/About";
import Search from "./Pages/Search/Search";

import Blast from "./Pages/Blast/Blast";
import Jbrowse from "./Pages/Jbrowse/Jbrowse";

export default function ProjectPagesRoutes() {
  return (
    <BrowserRouter basename="/TDB-page/">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/blast" element={<Blast/>}/>
          <Route path="/jbrowse" element={<Jbrowse/>}/>
          <Route path="/download" element={<Download/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/search" element={<Search/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};