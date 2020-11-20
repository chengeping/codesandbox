import React from "react";

const { useMemo, useState, useCallback } = require("react");

const s = new Set();

export default () => {
  const [count, setCount] = useState(0);

  const add = useCallback(() => {
    setCount((x) => x + 1);
  }, []);

  // const add = () => {
  //   setCount((x) => x + 1);
  // };

  s.add(add);
  console.log(s.size);

  return (
    <div>
      <span>useCallback</span>
      <p>{count}</p>
      <button onClick={add}>add</button>
    </div>
  );
};
