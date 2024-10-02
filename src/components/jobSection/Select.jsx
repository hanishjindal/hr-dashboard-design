import React, { useState } from "react";
import { SELECT_OPTIONS_DATA } from "./config";
import style from "../../style/jobSection/select.module.css";

const Select = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionClick = (questionIndex, optionIndex) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionIndex]: optionIndex,
    }));
  };

  return (
    <div className={style.select}>
      {SELECT_OPTIONS_DATA?.map((question, questionIndex) => (
        <div className={style.question} key={questionIndex}>
          <p>{question.question}</p>

          <div className={style.options}>
            {question.options?.map((option, optionIndex) => {
              const isSelected = selectedOptions[questionIndex] === option;

              return (
                <span
                  key={optionIndex}
                  className={isSelected ? style.selectedOption : ""}
                  onClick={() => handleOptionClick(questionIndex, optionIndex)}
                  style={
                    selectedOptions[questionIndex] === optionIndex
                      ? {
                          backgroundColor: "rgba(77, 128, 244, 1)",
                          color: "white",
                        }
                      : {}
                  }
                >
                  {option}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Select;
