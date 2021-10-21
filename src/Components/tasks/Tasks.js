import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setFilter } from "../../redux/tasks/tasksActions";
import {
  addTaskOperation,
  getTasksOperation,
  removeTasksOperation,
  setTaskStatusOperation,
} from "../../redux/tasks/tasksOperations";
import {
  tasksErrorSelector,
  tasksFilteredTasks,
  tasksFilterSelector,
  tasksLoaderSelector,
} from "../../redux/tasks/tasksSelectors";
import TasksFilter from "./tasksFilter/TasksFilter";
import TasksForm from "./tasksForm/TasksForm";
import TasksList from "./tasksList/TasksList";

const Tasks = () => {
  const dispatch = useDispatch();
  const filter = useSelector(tasksFilterSelector);
  const isLoading = useSelector(tasksLoaderSelector);
  const error = useSelector(tasksErrorSelector);
  const filteredTasks = useSelector(tasksFilteredTasks);

  useEffect(() => {
    dispatch(getTasksOperation());
  }, [dispatch]);

  const setFilterValue = (value) => dispatch(setFilter(value));
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
      <TasksList tasks={filteredTasks} setStatus={setStatus} remove={remove} />
    </section>
  );
};

export default Tasks;
