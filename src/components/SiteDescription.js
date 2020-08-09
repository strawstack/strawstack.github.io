import React from "react"
import styles from "./SiteDescription.module.css"

export default function SiteDescription(props) {
    return (
        <div className={styles.SiteDescription}>
            <div className={styles.DescriptionBox}>
                {props.children}
            </div>
        </div>
    );
}
