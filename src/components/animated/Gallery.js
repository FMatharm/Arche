import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

function getFourLatest(data) {
    let idArray = data.allFile.nodes.map(obj => (obj.id))
    let projectArray = idArray.map(id => {
        return data.allMarkdownRemark.nodes.find(obj => (obj.parent.id === id)).frontmatter
    })
    return projectArray
}

export default function Gallery() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              description
              link
              thumbnail
              title
            }
            parent {
              ... on File {
                id
              }
            }
          }
        }
        allFile(sort: {fields: birthTime, order: DESC}, limit: 4) {
          nodes {
            id
          }
        }
      }
    `)
    const projects = getFourLatest(data)
    return (
        <div>{projects.map((el, index) => (<span key={index}>{el.description}</span>))}</div>
    )
}