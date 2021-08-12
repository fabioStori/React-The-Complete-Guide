function Todo(props) {
  function deleteHandler() {
    console.log("props.title", props.title);
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
    </div>
  );
}

export default Todo;
