import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS"

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countReducer);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}

plus.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", handleMinus);
