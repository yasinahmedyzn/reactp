import React from "react";
import CatalogForm from "./CatalogForm";
const NewCatalog = (props) => {
  const saveCatalogInfo = (enteredCatalogInfo) => {
    const NewCatalogInfo = {
      ...enteredCatalogInfo,
    };

    props.onAddCatalogInfo(NewCatalogInfo);
  };
  return (
    <div>
      <CatalogForm onSaveCatalogInfo={saveCatalogInfo} />
    </div>
  );
};

export default NewCatalog;
