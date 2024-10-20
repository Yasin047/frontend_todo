import React from "react";

const UpdateForm = ({
  updateTodo,
  changeUpdateTodo,
  updatesTodo,
  cancelUpdateTodo,
}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateTodo && updateTodo.title}
            onChange={(e) => changeUpdateTodo(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updatesTodo}
            className="btn btn-lg btn-success mr-20"
          >
            Update
          </button>
          <button onClick={cancelUpdateTodo} className="btn btn-lg btn-warning">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
