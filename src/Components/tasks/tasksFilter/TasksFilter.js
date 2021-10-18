import React from "react";

const TasksFilter = ({ filter, setFilterValue }) => {
  const onHandleChange = (e) => {
    const { value } = e.target;
    setFilterValue(value);
  };
  return <input type='text' onChange={onHandleChange} value={filter} />;
};

export default TasksFilter;
