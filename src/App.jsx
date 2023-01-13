import React, { useState } from "react";
import "./App.css";
import { Todoinput } from "./Components/Todoinput";
import { TodoList } from "./Components/todoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  // const [editTodoValue, setEditTodoValue] = useState("");

  const handleInput = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    todo === ""
      ? alert("Enter Something")
      : setTodoList([
          ...todoList,
          {
            id:
              todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: todo,
          },
        ]);
    setTodo("");
  };

  const deleteAllTodo = () => {
    setTodoList([]);
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const editTodo = (id, value) => {
    console.log("id=>", id, "value=>", value);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <Todoinput
        handleInput={handleInput}
        value={todo}
        addTodo={addTodo}
        deleteAllTodo={deleteAllTodo}
      />
      <div className="todoList">
        <ul className="todo">
          {todoList?.map((value, key) => {
            return (
              <TodoList
                key={key}
                value={value}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
