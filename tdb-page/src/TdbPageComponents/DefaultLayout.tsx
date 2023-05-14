import { Outlet } from 'react-router-dom';

import './GlobalStyles.css';

import Navbar from '../TdbPageComponents/PageSections/Navbar/Navbar';

//import Footer from ''; 

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* Footer */}
    </>
  );
};