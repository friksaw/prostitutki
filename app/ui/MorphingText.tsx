'use client'

import React, { useEffect, useRef } from 'react';
import styles from "./styles.module.css";

const MorphingText: React.FC = () => {
     return (
        <svg viewBox="0 0 800 600">
            <symbol id="s-text">
                <text text-anchor="middle"
                      x="50%"
                      y="35%"
                      className="text--line"
                >
                    Elastic
                </text>
                <text text-anchor="middle"
                      x="50%"
                      y="68%"
                      className="text--line2"
                >
                    Stroke
                </text>

            </symbol>

            <g className="g-ants">
                <use className="text-copy"></use>
                <use className="text-copy"></use>
                <use className="text-copy"></use>
                <use className="text-copy"></use>
                <use className="text-copy"></use>
            </g>


        </svg>
    );
};

export default MorphingText;
