import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ResumePageTemplate = ({ title, content, contentComponent, personalStatement }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        {title}
        {personalStatement}
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  personalStatement: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ResumePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResumePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        personalStatement={post.frontmatter.personalStatement}
        content={post.html}
      />
    </Layout>
  )
}

ResumePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResumePage

export const ResumePageQuery = graphql`
  query ResumePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        personalStatement
        skills {
          skills {
            name
            level
            keywords {
              id
              name
            }
          }
          
        }
        experience {
          experience {
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
`
