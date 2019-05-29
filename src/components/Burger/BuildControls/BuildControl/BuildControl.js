import React from 'react';
import styles from './BuildControl.module.css'

function BuildControl({disabled, label, removed, added}) {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{label}</div>
            <button
                disabled={disabled}
                onClick={removed}
                className={styles.Less}>
                -
            </button>
            <button
                onClick={added}
                className={styles.More}>
                +
            </button>
        </div>
    )
};

export default BuildControl;