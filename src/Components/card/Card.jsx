import React, { useState } from "react";
import style from "./Card.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Editable from "../editable/Editable";
import Task from "../task/Task";
import { useRecoilState } from "recoil";
import CardItem from "../../recoil/atoms/Atoms";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDrop } from "react-dnd";

function Card(props) {
  const { id, title, date, task } = props.card;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const index = props.index;
  const [name, setName] = useState("");
  const [cardArray, setCardArray] = useRecoilState(CardItem);
  const TaskArr = cardArray[index].task || [];
  const mainId = cardArray[index].id;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [{ isOver }, addTaskRef] = useDrop({
    accept: "task",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });


  const addList = () => {
    if (!name) {
      return;
    }

    const filterArr = cardArray.map((ele) => {
      if (ele.id == id) {
        const obj = { ...ele };
        const taskarr = [...obj.task];
        taskarr.push({
          id: taskarr.length + 1,
          title: name,
          date: "today",
          Comment: [],
          description: "",
          listName: ele.title,
        });

        obj.task = [...taskarr];
        return obj;
      } else {
        return ele;
      }
    });

    setCardArray(filterArr);
  };
  const moveTask = () => {
    console.log("item");
    alert("Dropped")
  };
  const removeTask = (index) => {
    // alert("dragged")
    TaskArr.filter((ele,ind)=> ind!==index)
    console.log(TaskArr)
    console.log(index)
  };
  return (
    <div className={style.card}>
      <div className={style.cardHeading}>
        <span>{title}</span>
        <span>
          <IconButton
            onClick={(event) => {
              handleClick(event);
            }}
          >
            <MoreHorizIcon />
          </IconButton>
        </span>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              const newList = cardArray.filter((ele) => {
                return ele.id !== id;
              });
              setCardArray(newList);
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </div>
      <div ref={addTaskRef}   onDrop={moveTask} 
>
        {TaskArr.map((ele, index) => {

          return <Task task={ele} index={index} mainId={mainId} cardArray={cardArray} setCardArray={setCardArray} removeTask={removeTask} moveTask={moveTask}/>;
        })}
      </div>

      <div className={style.editableDiv}>
        <Editable name={name} setName={setName} addList={addList} />
      </div>
    </div>
  );
}

export default Card;
