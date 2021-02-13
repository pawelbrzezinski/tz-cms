import React, { useEffect, useState } from "react";
import "../styles/accordion_prices.scss";

import ChevronIcon from "../img/chevron-up.svg";

const AccordionItem = ({ price, label, sub }) => (
  <div className="accordion_prices_item">
    <div className="accordion_prices_name">
      <div className="accordion_prices_item_label">{label}</div>
      {sub && <div className="accordion_prices_item_sub">{sub}</div>}
    </div>
    <div className="accordion_prices_item_price">{price} zł</div>
  </div>
);

const AccordionCategory = ({
  isOpened = false,
  label = "",
  items = [],
  toggle = () => null,
}) => (
  <div className="accordion_prices_category_wrapper">
    <div className="accordion_prices_category" onClick={() => toggle()}>
      <div className="accordion_prices_category_label">{label}</div>
      <div className="accordion_prices_category_expand">
        <span className="accordion_label">{isOpened ? "Zwiń" : "Rozwiń"}</span>
        <span>
          <img
            className={isOpened ? "" : "flip"}
            src={ChevronIcon}
            alt={isOpened ? "Zwiń" : "Rozwiń"}
            title={isOpened ? "Zwiń" : "Rozwiń"}
          />
        </span>
      </div>
    </div>
    <div
      className={
        isOpened
          ? "accordion_prices_category_items accordion_prices_category_items--opened"
          : "accordion_prices_category_items"
      }
    >
      {items.map(({ price, label, sub }, idx) => (
        <AccordionItem key={idx} label={label} price={price} sub={sub} />
      ))}
    </div>
  </div>
);

const AccordionPrices = ({ priceList = [] }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(priceList);
  }, [priceList]);

  const toggle = (index = 0) => {
    setData(
      data.map((cat = {}, idx) =>
        idx === index ? { ...cat, isOpened: !cat.isOpened } : cat
      )
    );
  };

  return (
    <div className="accordion_prices">
      {data.map(({ isOpened, categoryName, items }, idx) => (
        <AccordionCategory
          key={idx}
          label={categoryName}
          items={items}
          isOpened={isOpened}
          toggle={() => toggle(idx)}
        />
      ))}
    </div>
  );
};

export default AccordionPrices;
