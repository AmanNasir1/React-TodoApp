import React, { useState } from "react";
import "./App.css";
import SendIcon from "@mui/icons-material/Send";
import { Button, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodoValue, setEditTodoValue] = useState("");
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
      <div className="todoValue">
        <Input
          size="large"
          className="todoInput"
          color="primary"
          placeholder="Enter Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <Button
          variant="contained"
          className="todoBtn"
          color="success"
          endIcon={<SendIcon />}
          onClick={addTodo}
        >
          Add Todo
        </Button>
        <Button
          variant="contained"
          className="todoBtn"
          color="error"
          endIcon={<DeleteIcon />}
          onClick={deleteAllTodo}
        >
          Delete All
        </Button>
      </div>
      <div className="todoList">
        <ul className="todo">
          {todoList?.map((value, key) => {
            return (
              <li key={key}>
                {value.taskName}
                <div>
                  <Fab
                    color="primary"
                    className="editBtn"
                    size="small"
                    aria-label="edit"
                    onClick={() => editTodo(value.id, value.taskName)}
                  >
                    <EditIcon />
                  </Fab>
                  <Fab
                    color="error"
                    className="editBtn"
                    size="small"
                    aria-label="delete"
                    onClick={() => deleteTodo(value.id)}
                  >
                    <DeleteIcon />
                  </Fab>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
