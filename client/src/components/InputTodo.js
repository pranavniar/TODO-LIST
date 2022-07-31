import React, { Fragment, useState } from "react";
import Tilt from 'react-parallax-tilt';
import "./InputTodo.css";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
    <Tilt>
      <div className="Tilt-inner pa3">
        <h1 style = {{fontSize: "50px"}} className="text-center mt-5 p-3">Pern Todo List</h1>
      </div>
    </Tilt>
      <form className="d-flex mt-5 p-3" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn f6 link dim ph3 pv2 mb2 dib white bg-navy">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;