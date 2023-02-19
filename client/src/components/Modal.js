import React from "react";
import { useState } from "react";

const Modal = ({ mode, setShowModal, task }) => {
  const editMode = mode === "edit" ? true : false;
  const [data, setData] = useState({
    user_email: editMode ? task.user_email : "yettafssaoui2@gmail.com",
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : 50,
    date: editMode ? "" : new Date(),
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Let's {mode} your Task</h2>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <form>
          <input
            type="text"
            required
            maxLength={30}
            placeholder="Your Task goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="range">Drag to Select your current Progress :</label>
          <input
            required
            type="range"
            min="0"
            max="100"
            name="range"
            id="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input
            className={mode}
            type="submit"
            onClick={editMode ? "" : postData}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
