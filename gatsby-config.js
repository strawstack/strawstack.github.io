require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
      {
        resolve: `gatsby-source-github-api`,
        options: {
          token: `${process.env.GIT_TOKEN}`,
          graphQLQuery: `
          query {
            user(login: "strawstack") {
              repositories(first: 100, privacy: PUBLIC) {
                edges {
                  node {
                    name
                    url
                    homepageUrl
                    description
                    ref(qualifiedName: "master") {
                      target {
                        ... on Commit {
                          tree {
                            entries {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }`,
        }
      }
  ],
}
