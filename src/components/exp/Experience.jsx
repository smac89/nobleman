import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import "./exp.css";

const Experience = () => {
  const [values, setValues] = useState({
    error: "",
    exps: [],
  });

  const { exps } = values;

  useEffect(() => {
    getExperience();
  }, []);

  const getExperience = () => {
    axios({
      method: "GET",
      url: `http://localhost:3002/api/v1/experience`,
    })
      .then((res) => {
        if (res.data.status === "success") {
          setValues({ ...values, exps: res.data.data });
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
        {exps.map((exp, i) => (
          <Item
            key={i}
            jobTitle={exp.jobTitle}
            companyName={exp.company}
            summary={exp.summary}
            startDate={exp.startDate}
            endDate={exp.finishDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
