import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "clear":
      return [];
    case "set":
      return action.payload;
    default:
      return state;
  }
};

export function useLocalStorage({
  key,
  defaultValue,
  serialize = JSON.stringify,
  deserialize = JSON.parse,
}) {
  const init = () =>
    deserialize(window.localStorage.getItem(key)) || defaultValue;

  const [state, dispatch] = React.useReducer(reducer, defaultValue, init);

  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [state]);

  return [state, dispatch];
}
