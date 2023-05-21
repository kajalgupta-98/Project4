import React, { useState } from "react";
import style from "./Card.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Editable from "../editable/Editable";
import Task from "../task/Task";
import { useRecoilState, useRecoilValue } from "recoil";
import CardItem, { darkMode } from "../../recoil/atoms/Atoms";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Card(props) {
  const darkModeOn = useRecoilValue(darkMode);
  const { id, title, date, task } = props.card;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const index = props.index;
  const [name, setName] = useState("");
  const [cardArray, setCardArray] = useRecoilState(CardItem);
  const [showinput, setShowinput] = useState(true);
  const [changeName, setChangeName] = useState("");
  const [errorText, setErrorText] = useState("");
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
      setErrorText("enter the title for this card");
      return;
    }

    const filterArr = cardArray.map((ele) => {
      if (ele.id == id) {
        const obj = { ...ele };
        const taskarr = [...obj.task];
        taskarr.push({
          id: uuidv4(),
          title: name,
          date: new Date(),
          Comment: [
            {
              activity: `added ${name} card to ${ele.title} `,
              time:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            },
          ],
          description: "",
          listName: ele.title,
        });

        obj.task = [...taskarr];
        return obj;
      } else {
        return ele;
      }
    });
    setErrorText("");
    setCardArray(filterArr);
    localStorage.setItem("data", JSON.stringify(filterArr));
    setName("");
  };

  const handlChangeName = () => {
    setShowinput(false);
    setChangeName(cardArray[index].title);
  };

  const handleBlur = () => {
    const filterArr = cardArray.map((ele, i) => {
      if (i === index) {
        const obj = { ...ele };

        obj.title = changeName;

        return obj;
      }
      return ele;
    });
    setCardArray(filterArr);
    localStorage.setItem("data", JSON.stringify(filterArr));
    setShowinput(true);
  };

  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Droppable droppableId={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`${style.card} ${darkModeOn ? style.dark : ""}`}
                    style={{
                      background: snapshot.isDraggingOver ? "lightblue" : "",
                    }}
                  >
                    <div className={style.cardHeading}>
                      {showinput ? (
                        <span onClick={handlChangeName}>{title}</span>
                      ) : (
                        <input
                          onBlur={handleBlur}
                          onChange={(e) => setChangeName(e.target.value)}
                          value={changeName}
                          type="text"
                          style={
                            darkModeOn
                              ? {
                                  backgroundColor: "transparent",
                                  color: "white",
                                }
                              : null
                          }
                        />
                      )}

                      <span className={style.iconSpan}>
                        <IconButton onClick={handleClick}>
                          <MoreHorizIcon
                            sx={darkModeOn ? { color: "white" } : null}
                          />
                        </IconButton>
                      </span>
                    </div>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <MenuItem
                        // sx={darkModeOn && {backgroundColor:"black", color:"white"}}
                        onClick={() => {
                          const newList = cardArray.filter((ele) => {
                            return ele.id !== mainId;
                          });
                          setCardArray(newList);
                          localStorage.setItem("data", JSON.stringify(newList));
                        }}
                      >
                        Delete
                      </MenuItem>
                    </Menu>
                    <div className={style.taskDiv}>
                      {TaskArr.map((ele, index) => {
                        return (
                          // <Task task={ele} index={index} mainId={mainId} key={ele.id} />
                          <Draggable
                            key={ele.id}
                            draggableId={ele.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: "none",
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  <Task
                                    task={ele}
                                    index={index}
                                    mainId={mainId}
                                    key={ele.id}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                    </div>

                    <div className={style.editableDiv}>
                      <Editable
                        name={name}
                        setName={setName}
                        addList={addList}
                        errorText={errorText}
                        setErrorText={setErrorText}
                      />
                    </div>
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      }}
    </Draggable>
  );
}

export default Card;
