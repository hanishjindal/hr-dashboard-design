import React from "react";
import { FILTER_DATA } from "./config";
import style from "../../style/jobSection/checkBox.module.css";

const Checkbox = () => {
  return (
    <div className={style.filter}>
      {FILTER_DATA?.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.category}</h4>

            {item?.options?.map((options, idx) => {
              return (
                <div key={idx}>
                  <input type="checkbox" name={options} id={options} />
                  <label htmlFor={options}>{options}</label>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Checkbox;
