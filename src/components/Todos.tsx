// import React from "react";
import { useTodo } from "../store/todos";

function Todos() {
  const { todos, toggleTodoAsCompleted, handleDelete, handleEdit } = useTodo();
  let filterData = todos;


  
  return (
    <div className="mt-4">
      <ul>
        {filterData.map((todo) => {
          return (
            <div
              className="d-flex justify-content-between align-items-center mb-3
            "
            >
              <li key={todo.id} className="d-flex align-items-center ">
                <input
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  name="task"
                  onChange={() => {
                    toggleTodoAsCompleted(todo.id);
                  }}
                />
                <label htmlFor={todo.id} className="ms-2">
                  {" "}
                  {todo.task}
                </label>
              </li>
              {todo.completed == true ? (
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info ms-2"
                    onClick={() => {handleEdit(todo.id);}}
                  >
                    Edit
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
