import React from "react"
import styles from "./HelloMsg.module.css"

export default function HelloMsg(props) {
    return (
        <div className={styles.HelloMsg}>
            <div className={styles.Container}>
                <span
                    className={styles.Subtitle}
                >{props.subtitle}</span>
                <span
                    className={styles.Title}
                >{props.title}</span>
            </div>
        </div>
    );
}
