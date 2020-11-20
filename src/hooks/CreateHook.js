import React from "react";

import { useState, useEffect } from "react";

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function getPerson() {
  await sleep(5000);
  return ["aa", "bb", "cc"];
}

function usePerson() {
  const [list, setList] = useState(null);
  async function request() {
    const list = await getPerson();
    setList(list);
  }
  useEffect(request, []);
  return list;
}

export default () => {
  const list = usePerson();
  if (list === null) {
    return <div>loading。。。</div>;
  }
  return (
    <div>
      {list.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </div>
  );
};
