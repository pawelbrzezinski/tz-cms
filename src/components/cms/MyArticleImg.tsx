import React from "react";

import "../../styles/cms.scss";

const MyArticleImg = (props) => {
  return (
    <>
      <img {...props} alt={props.alt} title={props.title} />
      <span className="image_caption">{props.title}</span>
    </>
  )
}
export default MyArticleImg;
