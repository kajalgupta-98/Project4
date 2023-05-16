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
import { Droppable } from "react-beautiful-dnd";
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
  const addList = () => {
    if (!name) {
      return;
    }

    const filterArr = cardArray.map((ele) => {
      if (ele.id == id) {
        const obj = { ...ele };
        const taskarr = [...obj.task];
        taskarr.push({
          id: String(taskarr.length + 1),
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

  return (
    <Droppable droppableId={id}>
      {(Provided) => (
        <div
          className={style.card}
          {...Provided.droppableProps}
          {...Provided.placeholder}
          ref={Provided.innerRef}
        >
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
          <div>
            {TaskArr.map((ele, index) => {
              return (
                <Task task={ele} index={index} mainId={mainId} key={index} />
              );
            })}
          </div>

          <div className={style.editableDiv}>
            <Editable name={name} setName={setName} addList={addList} />
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default Card;
