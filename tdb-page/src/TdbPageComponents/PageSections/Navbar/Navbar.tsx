import { useState, useRef, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import DatabaseIcon from '../../static/icons/database_icon.svg';
import SearchIcon from '../../static/icons/search_icon.svg';

import HomeIcon from '../../static/icons/home_fill_icon.svg';
import ToolsIcon from '../../static/icons/tools_icon.svg';
import DownloadIcon from '../../static/icons/download_icon.svg';
import InfoIcon from '../../static/icons/info_icon.svg';

import BlastIcon from '../../static/icons/blast_icon.svg';
import GeneticIcon from '../../static/icons/genetic_icon.svg';

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
        navbarTools.current.style.left = '0vw';
      };
      if(menuBar1.current && menuBar2.current && menuBar3.current){
        menuBar1.current.style.transform = 'rotateZ(45deg)';
        menuBar2.current.style.transform = 'scale(0)';
        menuBar3.current.style.transform = 'rotateZ(-45deg)';
      };
    } else {
      if(navbarTools.current){
        navbarTools.current.style.left = '-100vw';
      };
      if(menuBar1.current && menuBar2.current && menuBar3.current){
        menuBar1.current.style.transform = 'rotateZ(0deg) translateY(-.9rem)';
        menuBar2.current.style.transform = 'scale(1)';
        menuBar3.current.style.transform = 'rotateZ(0deg) translateY(.9rem)';
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
      <NavLink to='/' className={styles.tdbLogo}>
        <figure>
          <img src={DatabaseIcon} alt="Ícone do Theobroma DataBase" />
        </figure>
        <h2>TDB</h2>
      </NavLink>
      <ul className={styles.navbarTools} ref={navbarTools}>
        <li>
          <NavLink to="/">
            <img src={HomeIcon} alt="Ícone de início" />
            Home
          </NavLink>
        </li>
        <li>
          <span className={styles.toolsBttn}>
            <img src={ToolsIcon} alt="Ícone de ferramentas" />
            Tools
          </span>
          <div className={styles.dropDown}>
            <NavLink to="/blast">
              <img src={BlastIcon} alt="BLAST tool icon " />
              BLAST
            </NavLink>
            <NavLink to="/jbrowse">
              <img src={GeneticIcon} alt="JBROWSE tool icon" />
              JBROWSE
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink to="/download">
            <img src={DownloadIcon} alt="Ícone de download" />
            Download
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <img src={InfoIcon} alt="Ícone de informações" />
            About
          </NavLink>
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