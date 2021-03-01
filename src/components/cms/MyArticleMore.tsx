import React from "react";
import { Link } from 'gatsby'
import MoreIcon from '../../img/more-icon.png';
import Button from '../Button'

import "../../styles/cms.scss";

const MyArticleMore = ({ link = "", cta = "", text = "" }) => {
  return (
    <Link to={link} title={text} className="more-link">
      <div className="more-wrapper">
        <div className="more-container">
          <img src={MoreIcon} alt={text} />
          <div className="more-content">
            <p className="label">Zobacz również:</p>
            <div>{text}</div>
          </div>
        </div>
        <div className="button-wrapper">
          <Button type="secondary">
            <span> {cta}</span>
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default MyArticleMore;
