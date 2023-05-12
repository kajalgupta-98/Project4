import React from "react";
import style from "./Card.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Editable from "../editable/Editable";
import Task from "../task/Task";


function Card(props) {
  const {id, title, date, task} = props.card
  console.log('title', title);
  return (
    <div className={style.card}>
      <div className={style.cardHeading}>
      <span>{title}</span>
        <span>
          <MoreHorizIcon />
        </span>
      </div>
      <div>
        <Task />
      
  

      </div>

     
      <div className={style.editableDiv}>
        <Editable />
      </div>
    </div>
  );
}

export default Card;
