import React from "react";
import { Link } from "gatsby";
import "../../styles/cms.scss";

const Sources = ({ data = [] }) => {
  return (
    data &&
    data.length && (
      <div className="sources">
        <h4>Źródła:</h4>
        <ol>
          {data.map((item) => (
            <li key={`${item.label}_${item.link}`}>
              {item.link ? (
                <Link to={`${item.link}`} title={item.label}>
                  {item.label}
                </Link>
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
