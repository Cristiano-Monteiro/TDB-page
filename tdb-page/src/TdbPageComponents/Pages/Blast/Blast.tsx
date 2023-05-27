import styles from './Blast.module.css';

import BlastIcon from '../../static/icons/blast_icon.svg';

import UploadIcon from '../../static/icons/upload_icon.svg';
import ExpandMoreIcon from '../../static/icons/expand_more_icon.svg';

export default function Blast(){
    return(
        <section className={styles.container}>
            <div className={styles.pageTitle}>
                <figure>
                    <img src={BlastIcon} alt="Blast tool page icon" />
                </figure>
                <h1>BLAST</h1>
            </div>
            <div className={styles.options}>
                <div className={styles.option1}>
                    BlastN
                    <figure>
                        <img src={ExpandMoreIcon} alt="expand more" />
                    </figure>
                </div>
                <div className={styles.option2}>
                    Criollo
                    <figure>
                        <img src={ExpandMoreIcon} alt="expand more" />
                    </figure>
                </div>
            </div>
            <div className={styles.fastaFormat}>
                <span>FASTA format</span>
            </div>
            <div className={styles.uploadFileBox}>
                <figure>
                    <img src={UploadIcon} alt="Upload file box" />
                </figure>
                <h2>Optional: Upload file</h2>
                <span>Drag or click to upload</span>
            </div>
        </section>
    );
};