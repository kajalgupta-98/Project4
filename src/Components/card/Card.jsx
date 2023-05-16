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
  const [showinput, setShowinput] = useState(true);
  const [changeName, setChangeName] = useState("");
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
    setShowinput(true);
  };

  return (
    <div className={style.card}>
      <div className={style.cardHeading}>
        {showinput ? (
          <span onClick={handlChangeName}>{title}</span>
        ) : (
          <input
            onBlur={handleBlur}
            onChange={(e) => setChangeName(e.target.value)}
            value={changeName}
            type="text"
          />
        )}

        <span>
          <MoreHorizIcon />
        </span>
      </div>
      <div>
        {TaskArr.map((ele, index) => {
          return <Task task={ele} index={index} mainId={mainId} />;
        })}
      </div>

      <div className={style.editableDiv}>
        <Editable name={name} setName={setName} addList={addList} />
      </div>
    </div>
  );
}

export default Card;
