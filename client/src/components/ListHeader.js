import React from "react";
import Modal from "./Modal";
import { useState } from "react";

const ListHeader = ({ listName }) => {
  const [showModal, setShowModal] = useState(false);

  const SignOut = () => {
    console.log("SignOut");
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="btn-container">
        <button className="create" onClick={() => setShowModal(true)}>
          <i className="fa fa-plus"></i> ADD NEW
        </button>
        <button className="signout" onClick={SignOut}>
          <i className="fa fa-sign-out"></i> SIGN OUT
        </button>
      </div>
      {showModal && <Modal mode={"create"} setShowModal={setShowModal} />}
    </div>
  );
};

export default ListHeader;
