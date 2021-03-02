import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import { ctaEditorConfig, youtubeEditorConfig } from "./editor-components"

// Add Previews
CMS.registerPreviewTemplate('blog', BlogPostPreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)
CMS.registerEditorComponent(youtubeEditorConfig)
