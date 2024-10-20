import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import UpdateForm from "./UpdateForm";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  // For todo list
  const [todo, setTodo] = useState([]);

  //   For new todo
  const [newTodo, setNewTodo] = useState("");

  //   For update todo
  const [updateTodo, setUpdateTodo] = useState("");

  //Function for control the app
  const addTodo = () => {
    if (newTodo) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTodo, status: false };
      setTodo([...todo, newEntry]);
      setNewTodo("");
    }
  };
  const deleteTodo = (id) => {
    let removeEntry = todo.filter((item) => item.id !== id);
    setTodo(removeEntry);
  };
  const markTodo = (id) => {
    let markEntry = todo.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setTodo(markEntry);
  };
  const cancelUpdateTodo = () => {
    setUpdateTodo("");
  };
  const changeUpdateTodo = (e) => {
    let newUpdateTodo = {
      id: updateTodo.id,
      title: e.target.value,
      status: updateTodo.status ? true : false,
    };
    setUpdateTodo(newUpdateTodo);
  };
  const updatesTodo = () => {
    let filterTodos = [...todo].filter((item) => item.id !== updateTodo.id);
    let updatedObject = [...filterTodos, updateTodo];
    setTodo(updatedObject);
    setUpdateTodo("");
  };
  return (
    <>
      <div className="container App">
        <br />
        <br />
        <h1>Todo App</h1>
        <br />
        <br />

        {/* Update Toto */}
        {updateTodo && updateTodo ? (
          <>
            <UpdateForm
              updateTodo={updateTodo}
              changeUpdateTodo={changeUpdateTodo}
              updatesTodo={updatesTodo}
              cancelUpdateTodo={cancelUpdateTodo}
            />
            <br />
          </>
        ) : (
          <>
            {/* Add Todo */}
            <TodoForm
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              addTodo={addTodo}
            />
            <br />
          </>
        )}

        {/* Display the todo */}

        {todo && todo.length ? "" : "No todo created..."}
        <Todo
          todo={todo}
          markTodo={markTodo}
          setUpdateTodo={setUpdateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};

export default TodoList;
