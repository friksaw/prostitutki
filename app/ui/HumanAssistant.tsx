'use client'

import React, { useEffect, useRef } from 'react';
import styles from "../styles.module.css";
import FractalCanvas from "@/app/ui/FractalCanvas";

const HumanAssistant: React.FC = () => {
    return (
        <div style={{width: "100%", maxWidth: "30ch"}}>
            <p className={styles.codeLink}>
                :Become an Human Assistant&nbsp;
            </p>
            <div className={styles.sales}>
                <p className={styles.code}>
                    <div>
                        <FractalCanvas/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Special offer!!! When registering as an Human Assistant, <span className={styles.codeRed}>10 FREE COINS</span> are
                        given as a GIFT for posting photos in the feed
                    </div>
                </p>
            </div>
        </div>
    );
};

export default HumanAssistant;
