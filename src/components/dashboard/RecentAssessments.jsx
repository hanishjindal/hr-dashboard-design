import React from "react";
import Card from "../Card";
import { LuClipboardList } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { RECENT_ASSESSMENT_DATA } from "./config";
import style from "../../style/dashboard/recentAssessments.module.css";

const RecentAssessments = () => {
  return (
    <Card>
      <div className={style.card}>
        <div className={style.heading}>
          <h3>{RECENT_ASSESSMENT_DATA?.heading}</h3>
          <span>View All</span>
        </div>

        <div className={style.data}>
          {RECENT_ASSESSMENT_DATA?.data?.map((item, index) => {
            return (
              <div className={style.content} key={index}>
                <div className={style.name}>
                  <h4>{item.name}</h4>

                  <span>
                    <LuClipboardList size={18} color="rgba(77, 128, 244, 1)" />
                    {item?.totalAttended === 0 &&
                      item?.totalShortlisted === 0 && (
                        <FiEdit size={18} color="rgba(77, 128, 244, 1)" />
                      )}
                    {!item?.totalAssigned && (
                      <RiDeleteBinLine size={20} color="red" />
                    )}
                  </span>
                </div>

                <div className={style.status}>
                  <div>
                    <span
                      className={
                        item?.status === "Published" && style.textGreen
                      }
                    >
                      {item.status}
                    </span>

                    <span>{item.date}</span>
                  </div>

                  <div>
                    <span>{item.totalAssigned ?? "No"} Students Assigned</span>

                    {item.totalAssigned && (
                      <span>
                        {item.totalAttended > 0
                          ? `${item.totalAttended} attended`
                          : `${item.totalShortlisted} Shortlisted`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default RecentAssessments;
