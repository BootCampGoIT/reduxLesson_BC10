export const INCREMENTTYPE = "counter/Increment"

export const increment = () => {
  return {
    type: INCREMENTTYPE,
    payload: 1,
  };
};

export const decrement = () => {
  return {
    type: "counter/decrement",
    payload: 1,
  };
};
