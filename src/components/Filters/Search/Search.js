/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useInput from "hooks/useInput";
import { GiMagnifyingGlass } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Search.scss";

const Search = ({ onSearchChange }) => {
  const searchInput = useInput("");

  useEffect(() => {
    onSearchChange?.(searchInput.value);
  }, [searchInput.value]);

  return (
    <div className="search-container">
      <GiMagnifyingGlass />
      <input value={searchInput.value} onChange={searchInput.onChange} />
      <AiOutlineCloseCircle onClick={searchInput.clear} />
    </div>
  );
};

export default Search;
