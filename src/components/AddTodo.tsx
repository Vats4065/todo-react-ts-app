import { FormEvent, useState } from "react";
import { useTodo } from "../store/todos";

function AddTodo() {
  const { handleAddTodo, todo, setTodo, upBtn, handleUpdate } = useTodo();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");

    console.log("dtrytuy7i", todo);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={todo}
            name="task"
            onChange={(e) => setTodo(e.target.value)}
          />
          {upBtn === false ? (
            <button type="submit" className="btn btn-primary ms-2">
              Add Task
            </button>
          ) : (
            <button
              className="btn btn-warning ms-2"
              onClick={() => handleUpdate}
            >
              Update
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default AddTodo;
