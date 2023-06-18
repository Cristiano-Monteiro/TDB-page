import styles from './Download.module.css';

import DownloadIcon from '../../static/icons/download_icon.svg';
import GeneticIcon from '../../static/icons/genetic_icon.svg';

export default function Download(){
    return(
        <section className={styles.container}>
            <div className={styles.pageTitle}>
                <figure>
                    <img src={DownloadIcon} alt="Ícone de download" />
                </figure>
                <h1>Download</h1>
            </div>
            <h2 className={styles.pageSubtitle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
            <div className={styles.downloadLinks}>
                <a href="">
                    <figure>
                        <img src={GeneticIcon} alt="Ícone de genoma" />
                    </figure>
                    <h3>Criollo (NCBI)</h3>
                </a>
                <a href="">
                    <figure>
                        <img src={GeneticIcon} alt="Ícone de genoma" />
                    </figure>
                    <h3>Matina (NCBI)</h3>
                </a>
                <a href="">
                    <figure>
                        <img src={GeneticIcon} alt="Ícone de genoma" />
                    </figure>
                    <h3>C1074</h3>
                </a>
                <a href="">
                    <figure>
                        <img src={GeneticIcon} alt="Ícone de genoma" />
                    </figure>
                    <h3>C174</h3>
                </a>
                <a href="">
                    <figure>
                        <img src={GeneticIcon} alt="Ícone de genoma" />
                    </figure>
                    <h3>Criollo <br /> (New Annotation)</h3>
                </a>
                <a href="">
                    <figure>
                        <img src={GeneticIcon} alt="Ícone de genoma" />
                    </figure>
                    <h3>Matina <br /> (New Annotation)</h3>
                </a>
            </div>
        </section>
    );
};