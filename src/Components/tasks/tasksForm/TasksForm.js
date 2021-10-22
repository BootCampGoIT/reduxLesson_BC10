import React, { useState } from "react";

const TasksForm = ({ resetError, createTask }) => {
  const [taskName, setTaskName] = useState("");
  const [details, setDetails] = useState("");
  const [done, setDone] = useState(false);

  const onHandleChange = ({ target }) => {
    resetError();
    const { value, name } = target;
    name === "taskName" && setTaskName(value);
    name === "done" && setDone((prev) => !prev);
    name === "details" && setDetails(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    createTask({ taskName, done, details });
    setTaskName("");
    setDetails("");
    setDone(false);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        TaskName:
        <input
          type='text'
          name='taskName'
          value={taskName}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Details:
        <textarea
          type='text'
          name='details'
          value={details}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Done:
        <input
          type='checkbox'
          name='done'
          checked={done}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Add task</button>
    </form>
  );
};

export default TasksForm;
