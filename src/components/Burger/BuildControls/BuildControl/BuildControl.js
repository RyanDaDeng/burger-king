import React from 'react';
import styles from './BuildControl.module.css'

const buildControl = (props) => {

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button
                disabled={props.disabled}
                onClick={props.removed}
                className={styles.Less}>
                -
            </button>
            <button
                onClick={props.added}
                className={styles.More}>
                +
            </button>
        </div>
    )
};

export default buildControl;