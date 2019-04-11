import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import KeywordInput from "../components/KeywordInput.js"

class Skills extends React.Component {
    render() {
        const { data } = this.props
        const { edges: resumePages } = data.allMarkdownRemark
        const resumePage = resumePages[0] // only one
        const skills = resumePage.node.frontmatter.skills.node

        return (
            <section>
                <form>
                <ul>
                    {skills &&
                    skills.map((node, i) => (
                        <li className="" key={i}>
                            <h3>{node.name}</h3>
                            {node.keywords &&
                            node.keywords.map((keyword, k) => (
                                <KeywordInput
                                key={k}
                                keyword={keyword} 
                                />
                            ))}
                        </li>
                    ))}
                </ul>
            </form>
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
