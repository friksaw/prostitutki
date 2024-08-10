import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.module.css';

console.clear();

interface FlippableProps {
    className?: string;
    component?: React.ElementType<any>;
    flipId: string;
}

const FLIP_TRANSITION_EVENT = "flip-transition";
const FLIP_TRANSITION_END_EVENT = "flip-transition-end";

export default function MainCard(callback: any, flipId: any) {
 return (
     <div className={styles.container}>
         <div className={styles.s}></div>
         <div className={styles.s}></div>
         <div className={styles.s}></div>
     </div>
 )
}


