import React from "react";
import Card from "../Card";
import { HIRING_FUNNEL_DATA } from "./config";
import style from "../../style/dashboard/hiringFunnel.module.css";

const HiringFunnel = () => {
  return (
    <Card>
      <div className={style.card}>
        <div className={style.heading}>
          <h3>{HIRING_FUNNEL_DATA?.title}</h3>
        </div>

        <div className={style.chart}>
          {HIRING_FUNNEL_DATA?.chart?.map((item, index) => {
            return (
              <div key={index} className={style.barChart}>
                <span>{item.value}</span>

                <div
                  style={{
                    backgroundColor: item?.color,
                    height: `${item.height * 50}px`,
                  }}
                ></div>

                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        <p>{HIRING_FUNNEL_DATA?.description}</p>
      </div>
    </Card>
  );
};

export default HiringFunnel;
