import React from "react"
import styles from "./CenterColumn.module.css"

export default function CenterColumn(props) {
    return (
        <div className={styles.CenterColumn}>
            {props.children}
        </div>
    );
}
