import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PersonalStatement from '../components/PersonalStatement'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

const ResumePage = ({ data }) => {
  const { markdownRemark: post } = data
  const fm = post.frontmatter;

  return (
    <Layout>
      <PersonalStatement />
      <Skills />
      <Experience />
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
