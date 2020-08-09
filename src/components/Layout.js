import React from "react"
import styles from "./Layout.module.css"

export default function Layout(props) {
    return (
        <div className={styles.Layout}>
            {props.children}
        </div>
    );
}
