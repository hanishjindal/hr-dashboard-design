import React from "react";
import style from "../../style/jobSection/breadCrums.module.css";

const BreadCrums = () => {
  return (
    <div className={style.breadcrums}>
      <div className={style.bubble}>
        <span>&#10003;</span> 1. Job Description
      </div>

      <span>&gt;</span>

      <div className={style.bubble}>2. Assessment</div>
    </div>
  );
};

export default BreadCrums;
