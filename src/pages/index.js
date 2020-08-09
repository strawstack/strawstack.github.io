import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import CenterColumn from "../components/CenterColumn";
import HelloMsg from "../components/HelloMsg";
import SmileFace from "../components/SmileFace";
import SiteDescription from "../components/SiteDescription";
import Project from "../components/Project";
import styles from "./index.module.css";

// These sites will not show in the project list
const block = {
    "IEEE-Xtreme-10.0": true,
    "StrawstackGame": true,
    "YBot": true,
    "fizzBuzzBizz": true,
    "uOttawa-TimeTable-Maker": true,
    "UOTTAHACK_Hackathon": true,
    "hello-github-actions": true,
    "strawstack.github.io": true
};

const filterBlocked = lst => {
    return lst.filter(r => !(r.node.name in block))
};

function Link(props) {
    return (
        <a
            className={styles.Link}
            href={props.href}
            alt="More cool stuff"
            target="_blank"
            rel="noreferrer"
        >{props.children}</a>
    );
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example: false
        };
    }
    render () {
        return (
            <StaticQuery
            query={graphql`
                query Query {
                    githubData {
                        data {
                            user {
                                repositories {
                                    edges {
                                        node {
                                            ref {
                                                target {
                                                    tree {
                                                        entries {
                                                            name
                                                        }
                                                    }
                                                }
                                            }
                                            description
                                            homepageUrl
                                            name
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                `}
                render={data => (
                    <Layout>
                        <CenterColumn>

                            <HelloMsg
                                title="Richard"
                                subtitle="Hello, I'm"
                            />

                            <SmileFace />

                            <SiteDescription>
                                <p><span>About:</span> I'm a programer who makes tools, games, and digital art.</p>
                                <p>I pulled data for this site from my public repos using the Github GraphQL API and Gatsby.</p>
                                <p><Link href="https://strawstack.github.io/">Fork the code</Link> for this site on Github.</p>
                                <p>Here's a link to <Link href="https://drive.google.com/file/d/1Jisvj2ih6ZE1sOBZKavhUZaZQKs0385J/view?usp=sharing">my resume</Link>. Check out my <Link href="https://richard.dev/">other site</Link> for more cool stuff.</p>
                            </SiteDescription>

                            {filterBlocked(data.githubData.data.user.repositories.edges).map((repo, i) => (
                                <Project
                                    key={i}
                                    data={repo}
                                />
                            ))}

                        </CenterColumn>
                    </Layout>
                )}
            />
        )
    }
}
