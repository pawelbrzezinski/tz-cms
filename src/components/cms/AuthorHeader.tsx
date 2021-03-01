import React from "react";

import Agnieszka from "../../img/agnieszka-czyzewska.png"
import "../../styles/cms.scss";

const AuthorHeader = ({ author = "", authorsTitle ="", date ="", readingTime = ""}) => {
  return (
    <div className="article_author_header">
      <div className="author">
        {author.indexOf("Agnieszka") !== -1 && (
          <img src={Agnieszka} alt={author} />
        )}
        <div>
          <p className="author_name">{author}</p>
          <p className="title">{authorsTitle}</p>
          <p className="reading_time">
            {date} · {readingTime} min
          </p>
        </div>
      </div>
      <div className="social"></div>
    </div>
  );
};

export default AuthorHeader;
