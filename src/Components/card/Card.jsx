import React, { useState, useRef } from "react";
import style from "./Card.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Editable from "../editable/Editable";
import Task from "../task/Task";
import { useRecoilState } from "recoil";
import CardItem from "../../recoil/atoms/Atoms";

function Card(props) {
  const { id, title, date, task } = props.card;
  const index = props.index;
  const [name, setName] = useState("");
  const [cardArray, setCardArray] = useRecoilState(CardItem);
  const TaskArr = cardArray[index].task || [];
  const mainId = cardArray[index].id;


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

  return (
    <div className={style.card}>
      <div className={style.cardHeading}>
        <span>{title}</span>
        <span>
          <MoreHorizIcon />
        </span>
      </div>
      <div>
        {TaskArr.map((ele, index) => {
          return <Task task={ele} index={index} mainId={mainId} cardArray={cardArray} setCardArray={setCardArray}/>;
        })}
      </div>

      <div className={style.editableDiv}>
        <Editable name={name} setName={setName} addList={addList} />
      </div>
    </div>
  );
}

export default Card;
