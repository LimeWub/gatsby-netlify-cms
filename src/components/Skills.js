import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class Skills extends React.Component {
    render() {
        const { data } = this.props
        const { edges: skills } = data.allMarkdownRemark
        // THIS IS ENTIRELY WRONG
        console.log(skills, data);
        return (
            <section>
                <ul>
                    {skills &&
                        skills.map((node, i) => (
                            <li className="" key={i}>
                                <button>Name: {node.name}</button>
                            </li>
                        ))}
                </ul>
            </section>
        )
    }
}

Skills.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query SkillsQuery {
        allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "resume-page" } } }
        ) {
          edges {
            node {
              frontmatter {
                skills {
                    node {
                        name
                        level
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
        render={(data, count) => <Skills data={data} count={count} />}
    />
)
