import { Outlet } from 'react-router-dom';

import { useRef } from 'react';

import './GlobalStyles.css';

import OpeningScreen from './PageSections/OpeningScreen/OpeningScreen';

import Navbar from '../TdbPageComponents/PageSections/Navbar/Navbar';

//import Footer from ''; 

export default function DefaultLayout() {
  const main = useRef<HTMLDivElement>(null);

  setTimeout(()=>{
    if(main.current){
      main.current.style.display = 'flex';
    };
  }, 2500);

  return (
    <>
      <OpeningScreen/>
      <div className='main' ref={main}>
        <Navbar />
        <Outlet />
        {/* Footer */}
      </div>
    </>
  );
};