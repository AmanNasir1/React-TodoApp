import React from 'react'
import SendIcon from "@mui/icons-material/Send";
import { Button, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";



export const Todoinput = (props) => {
  return (
    <div>
         <div className="todoValue">
        <Input
          size="large"
          className="todoInput"
          color="primary"
          placeholder="Enter Todo..."
          value={props.value}
          onChange={props.handleInput}
        />

        <Button
          variant="contained"
          className="todoBtn"
          color="success"
          endIcon={<SendIcon />}
          onClick={props.addTodo}
        >
          Add Todo
        </Button>
        <Button
          variant="contained"
          className="todoBtn"
          color="error"
          endIcon={<DeleteIcon />}
          onClick={props.deleteAllTodo}
        >
          Delete All
        </Button>
      </div>
    </div>
  )
}
