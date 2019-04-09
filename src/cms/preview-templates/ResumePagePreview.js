import React from 'react'
import PropTypes from 'prop-types'
import { ResumePageTemplate } from '../../templates/resume-page'

const ResumePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      <ResumePageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

ResumePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ResumePagePreview
