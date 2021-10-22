import React from "react";
import sprite from "../../../icons/sprite.svg";
import { FilterContainer } from "./TasksFilterStyled";

const TasksFilter = ({ filter, setFilterValue }) => {
  const onHandleChange = (e) => {
    const { value } = e.target;
    setFilterValue(value);
  };
  return (
    <FilterContainer>
      <label className='filterLabel'>
        <svg className='filterIcon'>
          <use href={sprite + "#icon-search"} />
        </svg>
        <input type='text' onChange={onHandleChange} value={filter} />
      </label>
    </FilterContainer>
  );
};

export default TasksFilter;
