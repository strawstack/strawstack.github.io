import React from "react"
import styles from "./Project.module.css"

function imageUrl(node) {
    const repoName = node.name;
    const data = node.ref.target.tree.entries;
    for (let file of data) {
        const fileName = file.name;
        const imagePrefix = "screenshot";
        const baseURL = "https://strawstack.github.io";
        const currentPrefix = fileName.substr(0, 10).toLowerCase();
        if (imagePrefix === currentPrefix) {
            return `${baseURL}/${repoName}/${fileName}`;
        }
    }

    // If there is no screenshot
    return false;
}

function ImageOrPlaceHolder(node) {
    const url = imageUrl(node);
    if (url) {
        return (
            <div className={styles.ImageArea} style={{
                backgroundImage: `url(${imageUrl(node)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}></div>
        );
    } else {
        return (
            <div className={styles.Placeholder}>{node.name}</div>
        );
    }
}

function demoOrPlaceholder(node) {
    const url = node.homepageUrl;
    if (url !== null) {
        return (
            <a
                className={`${styles.LinkArea} ${styles.Demo}`}
                href={node.homepageUrl}
                target="_blank"
                alt="Project"
                rel="noreferrer"
            >demo</a>
        );
    } else {
        return (
            <div
                className={`${styles.Demo}`}
            ></div>
        )
    }
}

export default function Project(props) {
    return (
        <div className={styles.Project}>
            {ImageOrPlaceHolder(props.data.node)}
            <div className={styles.DescriptionArea}>
                <span className={styles.TitleArea}>
                    {props.data.node.name}:
                </span> {props.data.node.description}
            </div>
            {demoOrPlaceholder(props.data.node)}
            <a
                className={`${styles.LinkArea} ${styles.Code}`}
                href={props.data.node.url}
                target="_blank"
                alt="Project"
                rel="noreferrer"
            >code</a>
        </div>
    );
}
