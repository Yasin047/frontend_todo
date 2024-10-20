import React from "react";

const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTodo} className="btn btn-lg btn-success">
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
