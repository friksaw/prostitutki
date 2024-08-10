import React from 'react';
import styles from "../styles.module.css";

const Marquee: React.FC = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.marquee_blur} aria-hidden="true">
                <p className={styles.marquee_text}>[friksaw.ru]&nbsp;[friksaw.ru]&nbsp;[friksaw.ru]&nbsp;</p>
            </div>
            <div className={styles.marquee_clear}>
                <p className={styles.marquee_text}>[friksaw.ru][friksaw.ru]&nbsp;[friksaw.ru]&nbsp;</p>
            </div>
        </div>
    );
};

export default Marquee;
