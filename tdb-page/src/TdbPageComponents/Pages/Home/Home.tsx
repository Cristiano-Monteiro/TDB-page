import styles from './Home.module.css';

import DatabaseIcon from '../../static/icons/database_icon.svg';
import TreeIcon from '../../static/icons/tree_icon.svg';

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
                <h2>Genus Description</h2>
                <div>
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
                    <ul>
                        <li>Scientific name: Theobroma grandiflorum;</li>
                        <li>
                            Native names: "Cupuaçu" (Pará), "pupu or pupuaçu" (Maranhão), 
                            "cocoa-cupuaçu" (Bahia) or "cupu" (Pará and Acre);
                        </li>
                        <li>Flowers: Simple and remain on their branches;</li>
                        <li>Fruits: Spherical or ovoid-shaped, up to 25 cm long;</li>
                        <li>Flowering: January to May;</li>
                        <li>
                            Fructification: The fruit has a hard and smooth peel, and a dark 
                            brown color;
                        </li>
                        <li>Uses: Ice creams, juices, vitamins, sweets, etc.</li>
                    </ul>
                    <a href="#">Learn More</a>
                </div>
            </section>
        </section>
    );
};