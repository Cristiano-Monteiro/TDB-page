import styles from './About.module.css';

import QuoteIcon from '../../static/icons/quote_icon.svg';

import AboutIcon from '../../static/icons/info_icon.svg';
import MailIcon from '../../static/icons/mail_icon.svg';
import ContactEmailIcon from '../../static/icons/contact_email_icon.svg';
import GroupsIcon from '../../static/icons/groups_icon.svg';
import SendIcon from '../../static/icons/send_icon.svg';

import PedroPhoto from '../../static/imgs/pedro.png';

export default function About(){
    return(
        <div className={styles.container}>
            <div className={styles.pageTitle}>
                <figure>
                    <img src={AboutIcon} alt="About icon" />
                </figure>
                <h1>About Theobroma DataBase</h1>
            </div>
            <p className={styles.text}>
                Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. 
                Mauris aliquet nunc non turpis scelerisque, eget.A ordem dos tratores 
                não altera o pão duris.Aenean aliquam molestie leo, vitae iaculis nisl.
                Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non 
                consequat odio. Todo mundo vê os porris que eu tomo, mas ninguém vê os 
                tombis que eu levo!Cevadis im ampola pa arma uma pindureta.Não sou faixa 
                preta cumpadi, sou preto inteiris, inteiris.Mauris nec dolor in eros commodo 
                tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
            </p>
            <section className={styles.submissionNewData}>
                <div className={styles.submissionNewDataTitle}>
                    <figure>
                        <img src={SendIcon} alt="Data submission section icon" />
                    </figure>
                    <h2>Submission new data</h2>
                </div>
                <p>
                    For send a new data for add or reports 
                    bugs in the database, send a email to:
                </p>
                <a href="mailto:pedfar321@gmail.com">pedfar321@gmail.com</a>
            </section>
            <section className={styles.contactUs}>
                <div className={styles.contactUsTitle}>
                    <figure>
                        <img src={MailIcon} alt="Mail icon" />
                    </figure>
                    <h2>Contact us</h2>
                </div>
                <ul>
                    <li>
                        <a href="mailto:pedfar321@gmail.com">
                            <img src={ContactEmailIcon} alt="Contact email icon" />
                            Pedro Augusto
                        </a>
                    </li>
                    <li>
                        <a href="mailto:josemjuiortk@gmail.com">
                            <img src={ContactEmailIcon} alt="Contact email icon" />
                            José Maria
                        </a>
                    </li>
                    <li>
                        <a href="mailto:vabreu@ufpa.br">
                            <img src={ContactEmailIcon} alt="Contact email icon" />
                            Vinícius Abreu
                        </a>
                    </li>
                </ul>
            </section>
            <section className={styles.collaborators}>
                <div className={styles.collaboratorsTitle}>
                    <figure>
                        <img src={GroupsIcon} alt="Collaborators icon" />
                    </figure>
                    <h2>Collaborators</h2>
                </div>
                <ul>
                    <li>
                        <img src={PedroPhoto} alt="Pedro's photo" />
                        <span className={styles.collaboratorName}>Pedro Augusto</span>
                        <span className={styles.collaboratorFunction}>XXX</span>
                    </li>
                    <li>
                        <img src={PedroPhoto} alt="Pedro's photo" />
                        <span className={styles.collaboratorName}>Pedro Augusto</span>
                        <span className={styles.collaboratorFunction}>XXX</span>
                    </li>
                    <li>
                        <img src={PedroPhoto} alt="Pedro's photo" />
                        <span className={styles.collaboratorName}>Pedro Augusto</span>
                        <span className={styles.collaboratorFunction}>XXX</span>
                    </li>
                </ul>
            </section>
            <section className={styles.citeTdb}>
                <div className={styles.citeTdbTitle}>
                    <figure>
                        <img src={QuoteIcon} alt="icon of section cite TDB" />
                    </figure>
                    <h2>Cite TDB</h2>
                </div>
                <p>
                    If TDB is useful in your research, 
                    please cite TDB in your publications 
                    using XXXXX as reference
                </p>
            </section>
        </div>
    );
};