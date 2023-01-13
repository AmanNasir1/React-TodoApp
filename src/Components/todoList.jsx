import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";


export const TodoList = (props) => {
  return (
    <div>
         <li>
                {props.value.taskName}
                <div>
                  <Fab
                    color="primary"
                    className="editBtn"
                    size="small"
                    aria-label="edit"
                    onClick={() => props.editTodo(props.value.id, props.value.taskName)}
                  >
                    <EditIcon />
                  </Fab>
                  <Fab
                    color="error"
                    className="editBtn"
                    size="small"
                    aria-label="delete"
                    onClick={() => props.deleteTodo(props.value.id)}
                  >
                    <DeleteIcon />
                  </Fab>
                </div>
              </li>
    </div>
  )
}
