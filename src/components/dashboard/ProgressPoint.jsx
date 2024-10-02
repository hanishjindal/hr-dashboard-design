import React from "react";
import style from "../../style/dashboard/progressPoint.module.css";

const ProgressPoint = ({ min, max, value }) => {
  return (
    <div className={style.progress_point_container}>
      <div className={style.range_values}>
        <span>{min}</span>
        <span>{value}</span>
        <span>{max}</span>
      </div>
      <div className={style.progress_line}>
        <div
          className={style.progress_point}
          style={{ left: `50%`, backgroundColor: "#007bff" }}
        />
        <div className={style.progress_point} style={{ left: `18%` }} />
        <div className={style.progress_point} style={{ left: `85%` }} />
      </div>
    </div>
  );
};

export default ProgressPoint;
