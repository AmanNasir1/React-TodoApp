import "./App.css";
import SendIcon from "@mui/icons-material/Send";
import { Button, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

function App() {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <div className="todoValue">
        <Input
          size="large"
          className="todoInput"
          color="primary"
          placeholder="Enter Todo..."
        />
        {/* <TextField id="Outlined secondary" color="secondary" size="small" label="Outlined" variant="outlined" /> */}
        <Button
          variant="contained"
          className="todoBtn"
          color="success"
          endIcon={<SendIcon />}
        >
          Add Todo
        </Button>
        <Button
          variant="contained"
          className="todoBtn"
          color="error"
          endIcon={<DeleteIcon />}
        >
          Delete All
        </Button>
      </div>
      <div className="todoList">
        <ul className="todo">
          <li>
            Hello
            <div>
              <Fab color="primary" className="editBtn" size="small" aria-label="edit">
                <EditIcon />
              </Fab>
              <Fab color="error" className="editBtn" size="small" aria-label="edit">
                <DeleteIcon />
              </Fab>
            </div>
          </li>
          <li>
            Hello
            <div>
              <Fab color="primary" className="editBtn" size="small" aria-label="edit">
                <EditIcon />
              </Fab>
              <Fab color="error" className="editBtn" size="small" aria-label="edit">
                <DeleteIcon />
              </Fab>
            </div>
          </li>
          <li>
            Hello
            <div>
              <Fab color="primary" className="editBtn" size="small" aria-label="edit">
                <EditIcon />
              </Fab>
              <Fab color="error" className="editBtn" size="small" aria-label="edit">
                <DeleteIcon />
              </Fab>
            </div>
          </li>
          <li>
            Hello
            <div>
              <Fab color="primary" className="editBtn" size="small" aria-label="edit">
                <EditIcon />
              </Fab>
              <Fab color="error" className="editBtn" size="small" aria-label="edit">
                <DeleteIcon />
              </Fab>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
