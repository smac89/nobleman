import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import "./projects.css";

const Projects = () => {
  const [values, setValues] = useState({
    error: "",
    projects: [],
  });

  const { projects } = values;

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    axios({
      method: "GET",
      url: `http://localhost:3002/api/v1/projects`,
    })
      .then((res) => {
        if (res.data.status === "success") {
          setValues({ ...values, projects: res.data.data });
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
      <div className='row w-100 p-0 w-0 justify-content-center'>
        {projects.map((project, i) => (
          <Item
            key={i}
            projectName={project.name}
            projectURL={project.link}
            language={project.language}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
