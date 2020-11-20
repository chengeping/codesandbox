import React from "react";

const { useMemo, useState } = require("react");

const UseMemoExample = () => {
  const [count, setCount] = useState(0);

  const memorizedText = useMemo(() => {
    console.log("run useMemo Function");

    return `this is a memoried text ${Date.now()}`;
  }, [Math.floor(count / 10)]); // 10 /20 /30变化一次重新计算

  return (
    <div>
      <p>usememory</p>
      {memorizedText}
      <p>you picked {count} times</p>

      <button
        onClick={() => {
          setCount((x) => x + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default UseMemoExample;
