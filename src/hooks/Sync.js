import React from "react";

import { useState, useEffect } from "react";

// export default () => {
//   const [count, setCount] = useState(0);

//   function myEffect() {
//     const i = setInterval(() => {
//       console.log(count);
//       setCount((count) => count + 1);
//     }, 1000);
//     return () => clearInterval(i);
//   }

//   useEffect(myEffect, [count]);

//   return <div>同步状态{count}</div>;
// };

export default () => {
  const [countobj, setCount] = useState({ count: 0 });

  function myEffect() {
    const i = setInterval(() => {
      console.log(countobj.count);
      setCount((pre) => ({
        ...pre,
        count: pre.count + 1
      }));
    }, 1000);
    return () => clearInterval(i);
  }

  useEffect(myEffect, [countobj]);

  return <div>同步状态{countobj.count}</div>;
};
