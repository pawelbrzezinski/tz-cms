import React from "react";
import { Link } from "gatsby";
import "../../styles/cms.scss";

const Sources = ({ data = [] }) => {
  return (
    data &&
    data.length && (
      <div className="article-sources">
        <h4>Źródła:</h4>
        <ol>
          {data.map((item) => (
            <li key={`${item.label}_${item.link}`}>
              {item.link ? (
                <a href={`${item.link}`} target="_blank" title={item.label}>
                  {item.label || item.link}
                </a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ol>
      </div>
    )
  );
};
export default Sources;
