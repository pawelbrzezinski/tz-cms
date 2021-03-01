import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";

import "../../styles/cms.scss";

const Tags = ({ data = [] }) => {
  return (
    data &&
    data &&
    data.length && (
      <div className="article-tags">
        {data.map((tag) => (
          <Link
            to={`/tags/${kebabCase(tag)}/`}
            key={tag + `tag`}
            className="tag_item"
          >
            {tag}
          </Link>
        ))}
      </div>
    )
  );
};

export default Tags;
