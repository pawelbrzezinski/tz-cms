import React from "react";

import Agnieszka from "../../img/agnieszka-czyzewska.png";
import Doctor from "../../img/doctor.png";
import "../../styles/cms.scss";

const AuthorHeader = ({
  author = "",
  authorsTitle = "",
  date = "",
  readingTime = 0,
}) => {
  const Image = author.indexOf("Agnieszka") !== -1 ? Agnieszka : Doctor;
  return readingTime !== 0 && author ? (
    <div className="article_author_header">
      <div className="author">
        <img src={Image} alt={author} />
        <div>
          {author ? <p className="author_name">{author}</p> : null}
          {author.indexOf("Agnieszka") !== -1 && (
            <p className="title">{authorsTitle}</p>
          )}
          {authorsTitle.indexOf("sponsorowany") !== -1 && (
            <p className="title">{authorsTitle}</p>
          )}
          {readingTime !== 0 ? (
            <p className="reading_time">
              {date} · {readingTime} min
            </p>
          ) : null}
        </div>
      </div>
      <div className="social"></div>
    </div>
  ) : null;
};

export default AuthorHeader;
