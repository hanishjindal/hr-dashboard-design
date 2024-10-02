import React from "react";
import Card from "../Card";
import { ASSESSMENT_PERFORMANCE_DATA } from "./config";
import style from "../../style/dashboard/assessmentPerformance.module.css";

const AssessmentPerformance = () => {
  return (
    <Card>
      <div className={style.card}>
        <div className={style.heading}>
          <h3>{ASSESSMENT_PERFORMANCE_DATA?.heading}</h3>
        </div>

        <div className={style.chart}>
          {ASSESSMENT_PERFORMANCE_DATA?.chart?.map((item, index) => {
            return (
              <div key={index} className={style.barChart}>
                <span>{item.value}</span>

                <div>
                  <div
                    style={{
                      backgroundColor: item?.color1,
                      height: `${item.height1 * 70}px`,
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: item?.color2,
                      height: `${item.height2 * 70}px`,
                    }}
                  ></div>
                </div>

                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default AssessmentPerformance;
