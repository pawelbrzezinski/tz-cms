
/* eslint-disable */
import { trim } from 'lodash'

const youtubeEditor = props =>
  `<YoutubePlayer url="${props.url || ""}" start="${props.start || 0}" end="${props.end || 0}" />`

export const youtubeEditorConfig = {
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "YouTube Player",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { label: "URL", name: "url", widget: "string", default: "https://www.youtube.com/watch?v=1TcRqoI02cU"  },
    { label: "Start", name: "start", widget: "string", default: "0", required: false },
    { label: "End", name: "end", widget: "string", default: "0", required: false },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<YoutubePlayer url="(\S+)" start="(.*)" end="(.*)" \/>/g,
  // pattern: ,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    console.log(match, "match2")

    const props = match[0].match(/(\"([^"]*)\")/g)
    
    console.log(props, "props2")

    return {
      url: trim(props[0], '"'),
      start:trim(props[1], '"'),
      end: trim(props[2], '"'),
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (props) {
    // console.log("TO BLOCK", props)
    return youtubeEditor(props)
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (props) {
    // console.log(" toPreview", props)
    return youtubeEditor(props)
  },
}
