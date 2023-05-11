import { Box, Button, Typography } from "@mui/material";
import React from "react";
// import DialogBox from "../Dialog/DialogBox";
import Style from "../Work/Work.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
const Work = () => {
  const [array, setArray] = React.useState([
    { id: 1, task: "To do" },
    { id: 2, task: "Doing" },
    { id: 3, task: "Done" },
  ]);
  const [task, setTask] = React.useState({ id: 0, task: "" });
  return (
    <Box component="div" className={Style.root}>
      {array.map((ele) => {
        return (
          <Box
            key={ele.id}
            component="div"
            sx={{
              minWidth: "20%",
            }}
          >
            <Box component="div" className={Style.box}>
              <Typography component="div" className={Style.title}>
                <Typography variant="body1">{ele.task}</Typography>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Typography>
              <Box component="div"></Box>
            </Box>
          </Box>
        );
      })}
      <Box
        sx={{
          boxSizing: "border-box",
          backgroundColor: task.task ? "white" : "",
          padding: "0.5rem 0rem 1rem 1rem ",
          minWidth: "20%",
        }}
      >
        <TextField
          hiddenLabel
          onChange={(e) => {
            setTask({
              id: array[array.length - 1].id + 1,
              task: e.target.value,
            });
          }}
          id="filled-basic"
          placeholder="+ Add another list"
          variant="filled"
          value={task.task}
          sx={{
            backgroundColor: "#f1f8e9",
            height: "3rem",
            width: "90%",
            borderBottom: 0,
          }}
        />
        {task.task && (
          <Button
            variant="contained"
            sx={{
              margin: "1rem",
              textTransform: "none",
            }}
            onClick={() => {
              setArray([...array, task]);
              setTask({
                id: 0,
                task: "",
              });
            }}
          >
            Add list
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Work;
