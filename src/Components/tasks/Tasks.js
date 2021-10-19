import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/store";
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
  tasksListSelector,
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
  const filteredTasks = useSelector(state=>tasksFilteredTasks(state));

  // ===================
  const counter = useSelector((state) => state.counter);

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
      {/* =============== */}
      <h2>{counter}</h2>
      <button type='button' onClick={() => dispatch(increment())}>
        Increment
      </button>

      {/* ================ */}
      <hr />
      {isLoading && <h2>...loading</h2>}
      {error && <h2>{error}</h2>}
      <TasksForm resetError={resetError} createTask={createTask} />
      <TasksFilter filter={filter} setFilterValue={setFilterValue} />
      <TasksList tasks={filteredTasks} setStatus={setStatus} remove={remove} />
    </section>
  );
};

export default Tasks;
