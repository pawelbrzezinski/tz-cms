import React, { useEffect, useState } from "react";
import "../styles/accordion_prices.scss";

import ChevronIcon from "../img/chevron-up.svg";

const AccordionItem = ({ price, label, sub, button = null }) => {
  const withButton = !!button;
  const SignInButton = button;
  const className = withButton
    ? "accordion_prices_item accordion_prices_item--with-button"
    : "accordion_prices_item";

  return (
    <div className={className}>
      <div className="accordion_prices_name">
        <div className="accordion_prices_item_label">{label}</div>
        {sub && <div className="accordion_prices_item_sub">{sub}</div>}
      </div>
      <div className="accordion_prices_item_button_wrapper">
        <div className="accordion_prices_item_price">{price} zł</div>
        {withButton && <SignInButton />}
      </div>
    </div>
  );
};

const AccordionCategory = ({
  isOpened = false,
  button = null,
  label = "",
  items = [],
  toggle = () => null,
}) => {
  const withButton = !!button;
  const SignInButton = button;
  const className = withButton
    ? isOpened
      ? "accordion_prices_category accordion_prices_category--with-button accordion_prices_category--opened"
      : "accordion_prices_category accordion_prices_category--with-button"
    : "accordion_prices_category";

  return (
    <div className="accordion_prices_category_wrapper">
      <div className={className} onClick={() => toggle()}>
        <h3 className="accordion_prices_category_label">{label}</h3>

        <div className="accordion_prices_category_button_wrapper">
          {withButton && <SignInButton />}
          <div className="accordion_prices_category_expand">
            <span className="accordion_label">
              {isOpened ? "Zwiń" : "Rozwiń"}
            </span>
            <img
              className={isOpened ? "" : "flip"}
              src={ChevronIcon}
              alt={isOpened ? "Zwiń" : "Rozwiń"}
              title={isOpened ? "Zwiń" : "Rozwiń"}
            />
          </div>
        </div>
      </div>
      <div
        className={
          isOpened
            ? "accordion_prices_category_items accordion_prices_category_items--opened"
            : "accordion_prices_category_items"
        }
      >
        {items.map((props, idx) => (
          <AccordionItem key={idx} {...props} />
        ))}
      </div>
    </div>
  );
};

const AccordionPrices = ({ priceList = [] }) => {
  const [data, setData] = useState(priceList);

  const toggle = (index = 0) => {
    setData(
      data.map((cat = {}, idx) =>
        idx === index ? { ...cat, isOpened: !cat.isOpened } : cat
      )
    );
  };

  return (
    <div className="accordion_prices">
      {data.map(({ isOpened, categoryName, items, button }, idx) => (
        <AccordionCategory
          key={idx}
          label={categoryName}
          items={items}
          isOpened={isOpened}
          button={button}
          toggle={() => toggle(idx)}
        />
      ))}
    </div>
  );
};

export default AccordionPrices;
