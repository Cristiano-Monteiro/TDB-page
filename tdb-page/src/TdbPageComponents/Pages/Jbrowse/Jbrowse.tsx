import styles from './Jbrowse.module.css';

import GeneticIcon from '../../static/icons/genetic_icon.svg';

import JBrowseExemple from '../../static/imgs/jbrowse-exemplo.png';

import CriolloIdiogram1 from '../../static/imgs/Criollo-idiogram1.png';

export default function Jbrowse(){
    return(
        <section className={styles.container}>
            <div className={styles.pageTitle}>
                <figure>
                    <img src={GeneticIcon} alt="JBrowse tool page icon" />
                </figure>
                <h1>JBROWSE</h1>
            </div>
            <ul className={styles.families}>
                <li>Criollo</li>
                <li>Matina</li>
                <li>C174</li>
                <li>C174 - Diploid</li>
                <li>C1074</li>
                <li>C1074 - Diploid</li>
            </ul>
            <div className={styles.jbrowseContainer}>
                <div className={styles.jbrowseTool}>
                    <img src={JBrowseExemple} alt="JBrowse example" />
                </div>
                <figure className={styles.fig2}>
                    <img src={CriolloIdiogram1} alt="Criollo Idiogram image" />
                </figure>
            </div>
        </section>
    );
};