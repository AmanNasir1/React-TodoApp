import React, { useEffect, useState } from "react";
import "./App.css";
import { Todoinput } from "./Components/Todoinput";
import { TodoList } from "./Components/todoList";
import db from "./Firebase/firebase";
import {
  doc,
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  updateDoc,
  where,
  getDocs,
} from "firebase/firestore";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  // const [editTodoValue, setEditTodoValue] = useState("");

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = async () => {
    // todo === ""
    //   ? alert("Enter Something")
    //   : setTodoList([
    //       ...todoList,
    //       {
    //         id:
    //           todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    //         taskName: todo,
    //       },
    //     ]);
    if (!todo) {
      alert("Enter Something");
    } else {
      const docRef = await addDoc(collection(db, "todos"), {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    }
    setTodo("");
  };

  const deleteAllTodo = () => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc1) => {
        deleteDoc(doc(db, "todos", doc1.id));
      });
    });
    setTodoList([]);
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const editTodo = async (id, value) => {
    // const newValue = prompt("enter New Value: ")
    // const q = query(collection(db, "todos"), where("id", "==", id));
    // const querySnapshot = await getDocs(q);
    // const washingtonRef = doc(db, "todo", id);
    // console.log(querySnapshot);
    // querySnapshot.forEach((doc1) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc1.data());
    // });
    // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //   id: id,
    //   taskName: newValue,
    // });
    // console.log("id=>", id, "value=>", value);
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodoList(todosArray);
      // console.log("called");
    });
  }, []);

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
