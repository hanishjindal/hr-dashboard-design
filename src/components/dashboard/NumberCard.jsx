import React from "react";
import Card from "../Card";
import BarChart from "./BarChart";
import ProgressPoint from "./ProgressPoint";
import AreaChart from "./AreaChart";
import style from "../../style/dashboard/numberCard.module.css";

const NumberCard = ({ heading, description, count, chart = null }) => {
  return (
    <Card>
      <div className={style.card}>
        <div className={style.heading}>
          <h3>{heading}</h3>
        </div>

        <p>{description}</p>

        <div className={style.visualData}>
          <h2>{count}</h2>

          {chart && (
            <span className={style.graph}>
              {chart === "Bar" && <BarChart />}

              {chart === "Progressive Points" && (
                <ProgressPoint min={36} max={96} value={66} />
              )}
            </span>
          )}
        </div>

        {chart === "Area" && (
          <div className={style.largeGraph}>
            <AreaChart />
          </div>
        )}
      </div>
    </Card>
  );
};

export default NumberCard;
