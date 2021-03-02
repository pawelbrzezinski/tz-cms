/* eslint-disable */
import { trim } from 'lodash'

const ctaEditor = props =>
  `<More link="${props.link || ""}" text="${props.text || ""}" cta="${props.cta || ""}" />`

export const ctaEditorConfig = {
  // Internal id of the component
  id: "cta",
  // Visible label
  label: "Zobacz wiecej",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { label: "Text", name: "text", widget: "string"},
    { label: "Call To Action", name: "cta", widget: "string", default: "Sprawdź" },
    { label: "Link", name: "link", widget: "string" },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<More link="(\S+)" text="(.*)" cta="(.*)" \/>/g,
  // pattern: ,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    const props = match[0].match(/(\"([^"]*)\")/g)

    return {
      link: trim(props[0], '"'),
      text: trim(props[1], '"'),
      cta: trim(props[2], '"'),
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (props) {
    // console.log("TO BLOCK", props)
    return ctaEditor(props)
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (props) {
    // console.log(" toPreview", props)
    return ctaEditor(props)
  },
}
