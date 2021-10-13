import React from "react";
import TasksForm from "./tasksForm/TasksForm";
import TasksList from "./tasksList/TasksList";

const Tasks = () => {
 
  return (
    <section>
      <TasksForm  />
      <TasksList
      />
    </section>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     tasks: state.tasks.list,
//   };
// };

export default Tasks;

// ========================
// const connect = (callback1, callback2) => {
//     const res1 = callback1(store.getState())
//     const res2 = callback2(store.dispatch)
//     return {}
// }
