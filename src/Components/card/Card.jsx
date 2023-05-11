import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { HiOutlineTemplate } from "react-icons/hi";
import Paper from "@mui/material/Paper";
import DialogBox from "../Dialog/DialogBox";
const Card = () => {
  const [focus, setFocus] = React.useState(null);
  const [value, setValue] = React.useState("");
  const [array, setArray] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {array &&
        array.map((list, ind) => {
          return (
            <Paper
              component="div"
              onClick={handleClickOpen}
              key={ind}
              elevation={3}
              sx={{
                width: "90%",
                boxSizing: "border-box",
                padding: "0.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              {list}
            </Paper>
          );
        })}
      <TextField
        onFocus={() => {
          setFocus(true);
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        hiddenLabel
        value={value}
        id={focus ? "outlined-multiline-flexible" : "outlined-multiline-static"}
        multiline
        placeholder="+ Add a card"
        maxRows={4}
        sx={{
          "& fieldset": { border: "none" },
          outline: "none",
        }}
        InputProps={{
          sx: {
            height: "fit-content",
          },
        }}
      />
      {focus && (
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              setFocus(null);
              setArray([...array, value]);
              setValue("");
            }}
            variant="contained"
            sx={{
              textTransform: "none",
              height: "2rem",
            }}
          >
            Add task
          </Button>
          <HiOutlineTemplate />
        </Box>
      )}
      <DialogBox open={open} handleClose={handleClose} />
    </>
  );
};

export default Card;
