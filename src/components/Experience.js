import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class Experience extends React.Component {
  render() {
    const { data } = this.props
    const { edges: experience } = data.allMarkdownRemark

    return (
        <section>
            <ul>
        {experience &&
          experience.map(({ node }) => (
            <li className="" key={node.id}>
                <button>{node.id}</button>
            </li>
          ))}
        </ul>
    </section>
    )
  }
}

Experience.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ExperienceQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "resume_page" } } }
        ) {
          edges {
            node {
              frontmatter {
                experience {
                    node {
                        title
                        type
                        establishment
                        startDate
                        endDate
                        tldr
                        description
                        keywords {
                            id
                            name
                        }
                    }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Experience data={data} count={count} />}
  />
)
