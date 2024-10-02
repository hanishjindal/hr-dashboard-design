import React from "react";
import RecentAssessments from "./RecentAssessments";
import NumberCard from "./NumberCard";
import HiringFunnel from "./HiringFunnel";
import AssessmentPerformance from "./AssessmentPerformance";
import style from "../../style/dashboard/dashboad.module.css";

const dashboard = () => {
  return (
    <div className={style.container}>
      <div className={style.row1}>
        <HiringFunnel />

        <RecentAssessments />
      </div>

      <div className={style.row2}>
        <NumberCard
          heading={"Total Candidates"}
          description={
            "The total number of candidates that have been in the hiring pipeline"
          }
          count={"1666"}
          chart={"Bar"}
        />

        <NumberCard
          heading={"Average Score"}
          description={
            "The Average of all the students that have taken the assessment thus far"
          }
          count={"66"}
          chart={"Progressive Points"}
        />

        <NumberCard
          heading={"Engineering Hours Saved"}
          description={
            "The total number of candidates that have been in the hiring pipeline"
          }
          count={"600 Hours"}
          chart={"Bar"}
        />

        <NumberCard
          heading={"Average Time Taken Per Assessment"}
          description={
            "The total number of candidates that have been in the hiring pipeline"
          }
          count={"6 Hours"}
          chart={"Bar"}
        />
      </div>

      <div className={style.row3}>
        <NumberCard
          heading={"Estimated Engineering Cost Saved"}
          description={"September 20 27"}
          count={"$18K"}
          chart={"Area"}
        />

        <AssessmentPerformance />
      </div>
    </div>
  );
};

export default dashboard;
