import React from "react";

import "../styles/check_list.scss";

const CheckList = ({ data = [] }) => {
  return (
    <div className="check_list">
      {data.map((item) => (
        <div key={item} className="check_list_item">
          {item}
        </div>
      ))}
    </div>
  );
};
export default CheckList;
