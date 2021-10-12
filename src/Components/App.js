import React from "react";
import { increment, decrement } from "../redux/counter/actions";
import { connect } from "react-redux";
import Tasks from "./tasks/Tasks";

const App = (props) => {
  return (
    <>
      <Tasks />
      {/* <p>Count: {props.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// const str = "lorem";
// const str = new String("Lorem");
// console.log(str.constructor.name);
// console.dir(str);
// console.log(str[0]);
// console.dir(str);
// console.log(str.toString());

// const user = {
//   0: new String("L"),
//   1: "o",
// };

// console.log(user[0]);
