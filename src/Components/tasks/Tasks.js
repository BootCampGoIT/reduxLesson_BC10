import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setFilter } from "../../redux/tasks/tasksActions";
import {
  addTaskOperation,
  getTasksOperation,
  removeTasksOperation,
  setTaskStatusOperation,
} from "../../redux/tasks/tasksOperations";
import TasksFilter from "./tasksFilter/TasksFilter";
import TasksForm from "./tasksForm/TasksForm";
import TasksList from "./tasksList/TasksList";

const Tasks = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);
  const tasks = useSelector((state) => state.tasks.list);
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(getTasksOperation());
  }, [dispatch]);

  const setFilterValue = (value) => dispatch(setFilter(value));
  const getFilteredTasks = () =>
    tasks.filter((task) =>
      task.taskName.toLowerCase().includes(filter.toLowerCase())
    );
  const setStatus = (task) => dispatch(setTaskStatusOperation(task));
  const remove = (id) => dispatch(removeTasksOperation(id));
  const resetError = () => error && dispatch(setError(""));
  const createTask = (task) => dispatch(addTaskOperation(task));

  return (
    <section>
      {isLoading && <h2>...loading</h2>}
      {error && <h2>{error}</h2>}
      <TasksForm resetError={resetError} createTask={createTask} />
      <TasksFilter filter={filter} setFilterValue={setFilterValue} />
      <TasksList
        tasks={getFilteredTasks()}
        setStatus={setStatus}
        remove={remove}
      />
    </section>
  );
};

export default Tasks;
