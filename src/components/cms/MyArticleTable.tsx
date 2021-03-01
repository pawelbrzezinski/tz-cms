import React from "react";

import "../../styles/cms.scss";

const MyArticleTable = (props) => {
  return (
    <div className="article-table-wrapper">
      <table {...props} />
    </div>
  )
}
export default MyArticleTable;
