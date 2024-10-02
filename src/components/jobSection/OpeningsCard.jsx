import React from "react";
import Card from "../Card";
import { HiDotsVertical } from "react-icons/hi";
import style from "../../style/dashboard/openingsCard.module.css";

const OpeningsCard = ({ title = null, showPlus = false, showAdd = false }) => {
  return (
    <div className={style.box}>
      {title && (
        <div className={style.title}>
          <h4>{title}</h4>

          {showPlus && <span>&#43;</span>}
        </div>
      )}

      <Card>
        <div className={style.card}>
          <div>
            <h4>Implementing a Filtering and Sorting API Route</h4>

            <span>{showAdd ? <span>Add</span> : <HiDotsVertical />}</span>
          </div>

          <p>
            This assessment involves building a new route for a blog post API
            that requires candidates to validate input parameters, fetch blog...{" "}
            <span>more</span>
          </p>

          <table>
            <tbody>
              <tr>
                <td>Role</td>
                <td>Back-end</td>
              </tr>
              <tr>
                <td>Level</td>
                <td>New Grad/Intern, Junior, Intermediate</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>Node.js, Ruby on Rails, Python (Flask) and 5 more</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>1 - 2 hours</td>
              </tr>
              <tr>
                <td>Attributes</td>
                <td>Includes Automation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default OpeningsCard;
