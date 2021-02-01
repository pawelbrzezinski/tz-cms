import React from "react";
import AccordionPrices from "../../components/AccordionPrices";
import BubbleSection from "../../components/BubbleSection";

const prices = [
  {
    isOpened: true,
    categoryName: "Badanie znamion - wideodermatoskopia",
    items: [
      {
        price: "300",
        label:
          "Wideodermatoskopia całego ciała z mapowaniem wytypowanych przez lekarza znamion",
        sub:
          "*druga wizyta  -  zniżka 10% ∙ druga wizyta  -  zniżka 20% ∙ czwarta i kolejna wizyta - zniżka 30%",
      },
      {
        price: "200",
        label: "Wideodermatoskopia dziecka do 12 roku życia",
      },
      {
        price: "200",
        label:
          "Wczesne, kontrolne badanie wideodermatoskopowe wytypowanych przez lekarza znamion",
        sub: "*dotyczy wizyt, które odbyły się w przeciągu 1 roku",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Chirurgiczne usuwanie znamion",
    items: [
      {
        price: "300",
        label:
          "Wideodermatoskopia całego ciała z mapowaniem wytypowanych przez lekarza znamion",
        sub:
          "*druga wizyta  -  zniżka 10% ∙ druga wizyta  -  zniżka 20% ∙ czwarta i kolejna wizyta - zniżka 30%",
      },
      {
        price: "200",
        label: "Wideodermatoskopia dziecka do 12 roku życia",
      },
      {
        price: "200",
        label:
          "Wczesne, kontrolne badanie wideodermatoskopowe wytypowanych przez lekarza znamion",
        sub: "*dotyczy wizyt, które odbyły się w przeciągu 1 roku",
      },
    ],
  },
  {
    isOpened: false,
    categoryName: "Chirurgiczne usuwanie znamion",
    items: [
      {
        price: "300",
        label:
          "Wideodermatoskopia całego ciała z mapowaniem wytypowanych przez lekarza znamion",
        sub:
          "*druga wizyta  -  zniżka 10% ∙ druga wizyta  -  zniżka 20% ∙ czwarta i kolejna wizyta - zniżka 30%",
      },
      {
        price: "200",
        label: "Wideodermatoskopia dziecka do 12 roku życia",
      },
      {
        price: "200",
        label:
          "Wczesne, kontrolne badanie wideodermatoskopowe wytypowanych przez lekarza znamion",
        sub: "*dotyczy wizyt, które odbyły się w przeciągu 1 roku",
      },
    ],
  },
];

const PriceList = ({ className = "" }) => (
  <div className={className}>
    <BubbleSection h2="Cennik naszych usług" color="gray">
      <div className="container">
        <AccordionPrices priceList={prices} />
      </div>
    </BubbleSection>
  </div>
);

export default PriceList;
