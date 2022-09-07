import React, { useState } from "react";
import NewCatalog from "../NewCatalog/NewCatalog";
import Catalog from "../Card/Catalog";
import { DummyShopList } from "../../DummyData";
const About = () => {
  const [ShopItem, setshoplist] = useState(DummyShopList);

  const AddCatalogHandler = (NewCatalogInfo) => {
    setshoplist((prevShopItem) => {
      return [NewCatalogInfo, ...prevShopItem];
    });
    console.log(NewCatalogInfo);
  };

  return (
    <div>
      <NewCatalog onAddCatalogInfo={AddCatalogHandler} />
      <Catalog Shop={ShopItem} />;
    </div>
  );
};

export default About;
