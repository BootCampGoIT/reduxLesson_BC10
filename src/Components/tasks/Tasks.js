import React, { useEffect, useState } from "react";
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
import Modal from "../modal/Modal";
import TasksFilter from "./tasksFilter/TasksFilter";
import TasksForm from "./tasksForm/TasksForm";
import TasksList from "./tasksList/TasksList";

const Tasks = () => {
  const dispatch = useDispatch();
  const filter = useSelector(tasksFilterSelector);
  const isLoading = useSelector(tasksLoaderSelector);
  const error = useSelector(tasksErrorSelector);
  const filteredTasks = useSelector(tasksFilteredTasks);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    dispatch(getTasksOperation());
  }, [dispatch]);

  const setFilterValue = (value) => dispatch(setFilter(value));
  const setStatus = (task) => dispatch(setTaskStatusOperation(task));
  const remove = (id) => dispatch(removeTasksOperation(id));
  const resetError = () => error && dispatch(setError(""));
  const createTask = (task) => dispatch(addTaskOperation(task));
  const toggleForm = () => setIsFormOpen((prev) => !prev);

  return (
    <section>
      {isLoading && <h2>...loading</h2>}
      {error && <h2>{error}</h2>}
      <TasksFilter filter={filter} setFilterValue={setFilterValue} />
      {isFormOpen && (
        <Modal closeModal={toggleForm}>
          <TasksForm resetError={resetError} createTask={createTask} />
        </Modal>
      )}
      <TasksList
        tasks={filteredTasks}
        setStatus={setStatus}
        remove={remove}
        toggleForm={toggleForm}
      />
    </section>
  );
};

export default Tasks;
