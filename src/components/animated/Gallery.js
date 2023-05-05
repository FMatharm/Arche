import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function getThreeLatest(data) {
    let idArray = data.allFile.nodes.map(obj => (obj.id))
    let projectArray = idArray.map(id => {
        let project = data.allMarkdownRemark.nodes.find(obj => (obj.parent.id === id)).frontmatter
        let projectImageName = project.thumbnail.match(/[A-z]+\.(png|webp|jpg|jpeg|tif|tiff)$/)[0]
        let imageData = data.allImageSharp.nodes.find(obj => (obj.parent.base === projectImageName))
        project.imageData = imageData
        return project
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
        allFile(
          sort: {fields: birthTime, order: DESC}
          limit: 3
          filter: {extension: {eq: "md"}}
        ) {
          nodes {
            id
          }
        }
        allImageSharp {
          nodes {
            gatsbyImageData(width: 360, height: 240)
            parent {
              ... on File {
                base
              }
            }
          }
        }
      } 
    `)
    const projects = getThreeLatest(data)
    return (
        <div id="gallery-wrapper">
            {projects.map((project, index) => (
                <a key={index} className='gallery-panel' id={`panel${index}`} href={project.link} target='_blank' rel='noreferrer'>
                    <div className='shadow-panel'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div> 
                    <GatsbyImage 
                        image={getImage(project.imageData)}
                        alt={project.title}
                    />
                </a>
            ))}
        </div>
    )
}