import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); //is a react hook - initial state is false - always returns a array with 2 elements

  function deleteHandler() {
    setModalIsOpen(true);
    console.log("props.title", props.title);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2> {props.title} </h2>
      {/* text inside {} is read as javascript, not plain text*/}
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && 
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      }
      {/* if both are true, returns the second */}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      {/* in javascript you can pass a function as a value */}
    </div>
  );
}

export default Todo;
