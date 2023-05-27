import styles from './Home.module.css';

import DatabaseIcon from '../../static/icons/database_icon.svg';
import TreeIcon from '../../static/icons/tree_icon.svg';
import FileIcon from '../../static/icons/file_icon.svg';
import FileFillIcon from '../../static/icons/file_fill_icon.svg';
import DescriptionIcon from '../../static/icons/description_icon.svg';
import LibraryBooksIcon from '../../static/icons/library_books_icon.svg';

export default function Home(){
    return(
        <section className={styles.container}>
            <div className={styles.welcomeMessage}>
                <h2>Welcome to the</h2>
                <div>
                    <h1>Theobroma DataBase</h1>
                    <figure>
                        <img src={DatabaseIcon} alt="Logo do Theobroma Database" />
                    </figure>
                </div>
            </div>
            <section className={styles.description}>
                <div className={styles.descriptionTitle}>
                    <figure>
                        <img src={DescriptionIcon} alt="Icon of section Genus Description" />
                    </figure>
                    <h2>Genus Description</h2>
                </div>
                <div className={styles.descriptionAbout}>
                    <figure>
                        <img src={TreeIcon} alt="Ícone de uma árvore" />
                    </figure>
                    <p>
                        The cupuaçu tree, cupuaçueiro or cupu, is native to the Amazon Basin 
                        and is found most often in the north and northeast regions, in the 
                        states of Amapá, Pará, and Amazonas. Its tree can reach an average 
                        height of 10 to 25 meters and in cultivated areas the height varies 
                        from 6 to 10 meters.;
                    </p>
                </div>
                <ul>
                    <li>
                        <strong>Scientific name:</strong> Theobroma grandiflorum;
                    </li>
                    <li>
                        <strong>Native names:</strong> "Cupuaçu" (Pará), 
                        "pupu or pupuaçu" (Maranhão), 
                        "cocoa-cupuaçu" (Bahia) or "cupu" (Pará and Acre);
                    </li>
                    <li>
                        <strong>Flowers:</strong> Simple and remain on their branches;
                    </li>
                    <li>
                        <strong>Fruits:</strong> Spherical or ovoid-shaped, up to 25 cm long;
                    </li>
                    <li>
                        <strong>Flowering:</strong> January to May;
                    </li>
                    <li>
                        <strong>Fructification:</strong> The fruit has a hard and smooth peel, 
                        and a dark brown color;
                    </li>
                    <li>
                        <strong>Uses:</strong> Ice creams, juices, vitamins, sweets, etc.
                    </li>
                </ul>
                <a href="#" target='_blank'>Learn More</a>
            </section>
            <section className={styles.publications}>
                <div className={styles.publicationsTitle}>
                    <figure>
                        <img src={LibraryBooksIcon} alt="Icon of section Group publications" />
                    </figure>
                    <h2>Group publications</h2>
                </div>
                <div className={styles.publicationsContent}>
                    <figure>
                        <img src={FileIcon} alt="Ícone do botão para o DOI da publicação" />
                    </figure>
                    <p>
                        Comparative analyses of Theobroma cacao and T. grandiflorum 
                        mitogenomes reveal conserved gene content embedded within 
                        complex and plastic structures
                    </p>
                    <ul>
                        <li>DE ABREU, VINICIUS A.C.</li>
                        <li>MOYSÉS ALVES, RAFAEL</li>
                        <li>SILVA, SAURA R.</li>
                        <li>FERRO, JESUS A.</li>
                        <li>DOMINGUES, DOUGLAS S.</li>
                        <li>MIRANDA, VITOR F.O.</li>
                        <li>Varani, Alessandro M</li>
                    </ul>
                </div>
                <a href="https://doi.org/10.1016/j.gene.2022.146904" target='_blank'>Learn More</a>
            </section>
            <section className={styles.lastPapers}>
                <div className={styles.lastPapersTitle}>
                    <figure>
                        <img src={FileFillIcon} alt="Ícone dos últimos artigos" />
                        <img src={FileIcon} alt="Ícone dos últimos artigos" />
                    </figure>
                    <h2>Last papers</h2>
                </div>
                <ul>
                    <li>
                        Implementation of pre-harvest techniques in emerging 
                        agroforestry systems to increase the yield of cocoa tree 
                        (Theobroma cacao L.). DOI: 37020938 Publish Date: 2023 Mar 
                    </li>
                    <li>
                        Assessing the Effectiveness of Chemical Marker Extraction 
                        from Amazonian Plant Cupuassu (Theobroma grandiflorum) by 
                        PSI-HRMS/MS and LC-HRMS/MS. DOI: 36984807 Publish Date: 2023 Mar 1 
                    </li>
                    <li>
                        Mexican Ancestral Foods (Theobroma cacao, Opuntia ficus indica, Persea 
                        americana and Phaseolus vulgaris) Supplementation on Anthropometric, 
                        Lipid and Glycemic Control Variables in Obese Patients: A Systematic Review and 
                        Meta-Analysis. DOI: 36981103 Publish Date: 2023 Mar 10 
                    </li>
                </ul>
            </section>
        </section>
    );
};