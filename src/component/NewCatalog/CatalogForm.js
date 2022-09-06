import React, { useState } from "react";
import style from "./form.module.css";
const CatalogForm = (props) => {
  const [code, setID] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleCodeChange = (e) => {
    setID(e.target.value);
  };
  const handleTextChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleImgChange = (e) => {
    console.log(e.target.files);
    setImg(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    console.log("form is submitted");
    e.preventDefault();
    const NewCatalogInfo = {
      img,
      code,
      title,
      price,
    };
    props.onSaveCatalogInfo(NewCatalogInfo);
  };

  return (
    <div className="container">
      <form>
        <div>
          <lable>img:</lable>
          <input
            className="file-upload-input"
            type="file"
            onChange={handleImgChange}
          />
        </div>
        <div className={style.formGroup}>
          <lable>title:</lable>
          <input type={"text"} value={title} onChange={handleTextChange} />
        </div>{" "}
        <div className={style.formGroup}>
          <lable>code:</lable>
          <input type={"number"} value={code} onChange={handleCodeChange} />
        </div>
        <div className={style.formGroup}>
          <lable>price:</lable>
          <input type={"number"} value={price} onChange={handlePriceChange} />
        </div>
        <div className={style.formGroup}>
          <button className="btn btn-light btn-md" onClick={handleSubmit}>
            click here
          </button>
        </div>
      </form>
    </div>
  );
};
export default CatalogForm;
