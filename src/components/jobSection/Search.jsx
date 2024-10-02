import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import style from "../../style/jobSection/search.module.css";

const Search = () => {
  return (
    <div className={style.search}>
      <input type="text" placeholder="Search for filters" />
      <span>
        <FaMagnifyingGlass size={12} color="#808080" />
      </span>
    </div>
  );
};

export default Search;
