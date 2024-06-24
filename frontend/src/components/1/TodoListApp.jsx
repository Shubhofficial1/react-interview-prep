import React, { useState, useEffect, useRef } from "react";

const TodoListApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      setTodos([
        ...todos,
        {
          _id: Math.floor(Math.random() * 10000),
          title: title,
          isCompleted: false,
        },
      ]);
      setTitle("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleUpdate = (id) => {
    const newTitle = prompt("Enter New Title", "");
    setTodos(
      todos.map((todo) => {
        if (todo._id === id) {
          return {
            ...todo,
            title: newTitle,
          };
        }
        return todo;
      })
    );
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo._id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder="Enter Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-200 p-3 rounded-md min-w-[400px]"
        />
        <button
          className="p-3 rounded-md bg-blue-500 ml-5 text-white cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed"
          disabled={!title}
        >
          Add Todo
        </button>
      </form>
      <ul className="mt-5">
        {todos.map((todo) => (
          <li
            className="w-[500px] border p-3 flex items-center gap-3 justify-between "
            key={todo._id}
          >
            <h1 className={`${todo.isCompleted ? "line-through" : ""}`}>
              {todo.title}
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => handleComplete(todo._id)}
                className="bg-green-300 p-2 rounded-md text-white"
              >
                {todo.isCompleted ? "Mark As Incomplete" : "Mark As Completed"}
              </button>
              <button
                onClick={() => handleUpdate(todo._id)}
                className="bg-yellow-300 p-2 rounded-md text-white"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(todo._id)}
                className="bg-red-300 p-2 rounded-md text-white"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
