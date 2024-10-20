import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Todo = ({ todo, markTodo, setUpdateTodo, deleteTodo }) => {
  return (
    <>
      {todo &&
        todo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                <div className="col taskBg">
                  <div className={item.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{item.title}</span>
                  </div>
                </div>
                <div className="iconsWrap">
                  <span
                    onClick={() => markTodo(item.id)}
                    title="Complete / Not Complete"
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {item.status ? (
                    ""
                  ) : (
                    <span
                      onClick={() =>
                        setUpdateTodo({
                          id: item.id,
                          title: item.title,
                          status: item.status ? true : false,
                        })
                      }
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}

                  <span onClick={() => deleteTodo(item.id)} title="Delete">
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default Todo;
