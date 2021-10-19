import React from "react";
import Auth from "./auth/Auth";
import Tasks from "./tasks/Tasks";

const App = () => {
  return (
    <>
      <Auth />
      <hr />
      <Tasks />
    </>
  );
};

export default App;
