import React, { useReducer } from "react";

// function reducer(state, action) { // state 非对象
//   console.log(state, action);
//   switch (action.type) {
//     case "add":
//       return state + 1;
//     case "sub":
//       return state - 1;
//     default:
//       throw "发生错误";
//   }
// }

// export default function Counter() {
//   const [counter, dispatch] = useReducer(reducer, 0);
//   return (
//     <div>
//       <p>useReducer</p>
//       <p>your counter is : {counter}</p>
//       <button onClick={() => dispatch({ type: "add" })}>+</button>
//       <button onClick={() => dispatch({ type: "sub" })}>-</button>
//     </div>
//   );
// }

function reducer(state, action) {
  // state 对象
  console.log(state, action);
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1
      };
    case "sub":
      return {
        count: state.count - 1
      };
    default:
      throw "发生错误";
  }
}

export default function Counter() {
  const [counter, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>useReducer</p>
      <p>your counter is : {counter.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
    </div>
  );
}
