import React from "react";
import BreadCrums from "./BreadCrums";
import Select from "./Select";
import OpeningsCard from "./OpeningsCard";
import Search from "./Search";
import Checkbox from "./Checkbox";
import style from "../../style/jobSection/jobSection.module.css";

const JobSection = () => {
  return (
    <div className={style.container}>
      <div className={style.row1}>
        <BreadCrums />

        <Select />

        <OpeningsCard title={"Section 1"} showPlus={true} />

        <OpeningsCard title={"Section 2"} showPlus={true} />
      </div>

      <div className={style.row2}>
        <OpeningsCard title={"Question Catalogue"} showAdd={true} />

        <OpeningsCard showAdd={true} />

        <OpeningsCard showAdd={true} />
      </div>

      <div className={style.row3}>
        <Search />

        <Checkbox />
      </div>
    </div>
  );
};

export default JobSection;
