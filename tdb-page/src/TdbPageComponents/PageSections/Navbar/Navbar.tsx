import { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

import DatabaseIcon from '../Navbar/icons/database_icon.svg';
import SearchIcon from '../Navbar/icons/search_icon.svg';

import ToolsIcon from '../Navbar/icons/tools_icon.svg';
import DownloadIcon from '../Navbar/icons/download_icon.svg';
import InfoIcon from '../Navbar/icons/info_icon.svg';

export default function Navbar() {
  // Estados necessários nos funcionamentos de alguns componentes
  const [openMenu, setOpenMenu] = useState(false);

  // Objetos que "referenciam" os elementos DOM da página
  const navbarTools = useRef<HTMLUListElement>(null);
  const menuBar1 = useRef<HTMLDivElement>(null);
  const menuBar2 = useRef<HTMLDivElement>(null);
  const menuBar3 = useRef<HTMLDivElement>(null);

  // Chama a função "handleMobileMenu" quando a página carrega
  useEffect(() => {
    handleMobileMenu();
  }, []);

  // handleMobileMenu => Adiciona e remove as animações nos elementos "navbarTools" e "menuBar"
  function handleMobileMenu(){
    setOpenMenu(!openMenu);
    
    if(openMenu){
      if(navbarTools.current){
        navbarTools.current.style.transform = 'translateX(0)';
      };
      if(menuBar1.current && menuBar2.current && menuBar3.current){
        menuBar1.current.style.transform = 'rotateZ(45deg)';
        menuBar2.current.style.transform = 'scale(0)';
        menuBar3.current.style.transform = 'rotateZ(-45deg)';
      };
    } else {
      if(navbarTools.current){
        navbarTools.current.style.transform = 'translateX(-100vw)';
      };
      if(menuBar1.current && menuBar2.current && menuBar3.current){
        menuBar1.current.style.transform = 'rotateZ(0deg) translateY(-1.3rem)';
        menuBar2.current.style.transform = 'scale(1)';
        menuBar3.current.style.transform = 'rotateZ(0deg) translateY(1.3rem)';
      };
    };
  };

  return (
    <nav className={styles.navbar}>

      <div className={styles.menuIcon} onClick={() => handleMobileMenu()}>
        <div className={styles.menuBar1} ref={menuBar1}></div>
        <div className={styles.menuBar2} ref={menuBar2}></div>
        <div className={styles.menuBar3} ref={menuBar3}></div>
      </div>

      <Link to='/' className={styles.tdbLogo}>
        <figure>
          <img src={DatabaseIcon} alt="Ícone do Theobroma DataBase" />
        </figure>
        <h2>TDB</h2>
      </Link>

      <ul className={styles.navbarTools} ref={navbarTools}>
        <li>
          <Link to="/tools">
            <img src={ToolsIcon} alt="Ícone de ferramentas" />
            Tools
          </Link>
        </li>
        <li>
          <Link to="/download">
            <img src={DownloadIcon} alt="Ícone de download" />
            Download
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img src={InfoIcon} alt="Ícone de informações" />
            About
          </Link>
        </li>
      </ul>

      <div className={styles.searchBttn}>
        <figure>
          <img src={SearchIcon} alt="Ícone de Pesquisa" />
        </figure>
      </div>

    </nav>
  );
};