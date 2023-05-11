import React from "react";
import style from "./Card.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Editable from "../editable/Editable";
import Task from "../task/Task";
function Card() {
  
  return (
    <div className={style.card}>
      <div className={style.cardHeading}>
      <span>Todo</span>
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
