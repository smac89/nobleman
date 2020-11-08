import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import "./techStack.css";

const TechStack = () => {
  const [values, setValues] = useState({
    error: "",
    stacks: [],
  });

  const { stacks } = values;

  useEffect(() => {
    getTechStack();
  }, []);

  const getTechStack = () => {
    axios({
      method: "GET",
      url: `http://localhost:3002/api/v1/techStack`,
    })
      .then((res) => {
        if (res.data.status === "success") {
          setValues({ ...values, stacks: res.data.data });
        }
      })
      .catch((err) => {
        setValues({ ...values, error: err });
      });
  };

  return (
    <div
      className='container-fluid align-items-center justify-content-center d-flex'
      style={{ marginTop: "5rem" }}
    >
      <div className='row w-100 p-0 w-0'>
        {stacks.map((stack, i) => (
          <Item
            key={i}
            name={stack.name}
            progress={stack.percentage}
            pWeek={stack.lastWeek}
            pMonth={stack.lastMonth}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
