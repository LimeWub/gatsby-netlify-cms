import CMS from 'netlify-cms'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ResumePagePreview from './preview-templates/ResumePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'


CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('resume', ResumePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
