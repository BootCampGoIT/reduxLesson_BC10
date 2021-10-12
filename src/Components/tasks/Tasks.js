import React from "react";
import { connect } from "react-redux";
import {
  addTasks,
  removeTask,
  setTaskStatus,
} from "../../redux/tasks/tasksActions";
import TasksForm from "./tasksForm/TasksForm";
import TasksList from "./tasksList/TasksList";

const Tasks = ({ addTasks, tasks, setTaskStatus, removeTask }) => {
//   const addNewTask = (task) => {
//     addTasks({ ...task, id: Date.now().toString() });
//   };
  return (
    <section>
      <TasksForm addNewTask={addTasks} />
      <TasksList
        tasks={tasks}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.list,
  };
};

export default connect(mapStateToProps, {
  addTasks,
  setTaskStatus,
  removeTask,
})(Tasks);

// ========================
// const connect = (callback1, callback2) => {
//     const res1 = callback1(store.getState())
//     const res2 = callback2(store.dispatch)
//     return {}
// }
