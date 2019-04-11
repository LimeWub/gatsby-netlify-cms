import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PersonalStatement from '../components/PersonalStatement'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import KeywordsContextProvider from "../contexts/KeywordsContext.js"

export const ResumePageTemplate = ({
  title,
  personalStatement
}) => (
  <KeywordsContextProvider>
    <PersonalStatement statement={personalStatement} />
    <Skills />
    <Experience />
  </KeywordsContextProvider>
)

ResumePageTemplate.propTypes = {
  title: PropTypes.string,
  personalStatement: PropTypes.string
}

const ResumePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <ResumePageTemplate
        title={frontmatter.title}
        personalStatement={frontmatter.personalStatement}
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
      }
    }
  }
`
