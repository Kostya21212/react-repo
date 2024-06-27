import { useState } from "react";
import {
  Button,
  Container,
  Dialog,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask, removeTask } from "../../store/slices/todoSlice";

const TodoNew = () => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTask("");
    setIsEditing(false);
    setCurrentTaskId(null);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      if (isEditing) {
        dispatch(editTask({ id: currentTaskId, text: task }));
      } else {
        dispatch(addTask(task));
      }
      handleClose();
    }
  };

  const handleEditTask = (task) => {
    setTask(task.text);
    setIsEditing(true);
    setCurrentTaskId(task.id);
    setOpen(true);
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="container">
      <div className="flex justify-center">
        <Button
          className="bg-black rounded-2xl text-white p-2 "
          variant="outlined"
          onClick={handleClickOpen}
        >
          Відкрийте тудушку
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Container className="bg-warning d-flex flex-column gap-3 pt-2 pb-2">
          <h3 style={{ fontWeight: 'bold' }}>To-Do List</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTask();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div className="d-flex flex-column gap-3">
              <TextField
                label="New Task"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
                style={{ marginRight: "1rem" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddTask}
                type="submit"
                className="bg-black"
                style={{ height: '57px' }}
              >
                {isEditing ? "Edit" : "Add"}
              </Button>
            </div>
          </form>
        </Container>
      </Dialog>
      <List className="p-3">
        {tasks.map((task) => (
          <ListItem key={task.id} className="bg-warning border-spacing-6 p-3">
            <ListItemText primary={task.text} />
            <div className="d-flex gap-2">
              <button onClick={() => handleEditTask(task)}>
                <i className="bi bi-pencil-square"></i>
              </button>
              <button onClick={() => handleRemoveTask(task.id)}>
                <i className="bi bi-x-circle"></i>
              </button>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoNew;
