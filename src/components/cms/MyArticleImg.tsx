import React from "react";

import "../../styles/cms.scss";

const MyArticleImg = (props) => {
  return (
    <>
      <img {...props} alt={props.alt} />
      <span className="image_caption">{props.alt}</span>
    </>
  )
}
export default MyArticleImg;
