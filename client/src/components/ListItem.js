import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import ProgresBar from "./ProgressBar";
import TickIcon from "./TickIcon";

const ListItem = ({ task }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <li className="list-items">
      <div className="info-item">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgresBar />
      </div>

      <div className="btn-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          <i className="fa fa-pencil"></i> EDIT
        </button>
        <button className="delete">
          <i className="fa fa-trash"></i> DELETE
        </button>
      </div>
      {showModal && (
        <Modal mode={"edit"} setShowModal={setShowModal} task={task} />
      )}
    </li>
  );
};

export default ListItem;
