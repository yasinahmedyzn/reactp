import React from "react";
import Shoplist from "./Shoplist";

const Catalog = (props) => {
  return (
    <div class="container px-4">
      <div className=" row ">
        {props.Shop.map((Shop) => (
          <Shoplist
            img={Shop.img}
            title={Shop.title}
            code={Shop.code}
            price={Shop.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Catalog;
