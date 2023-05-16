import React, { useState } from "react";
import style from "./Task.module.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CardItem, { taskDetails } from "../../recoil/atoms/Atoms";
import { AiFillDelete } from "react-icons/ai";
function Task({ task, mainId }) {
  const [taskDetail, setTaskDetail] = useRecoilState(taskDetails);
  const [cardArray, setCardArray] = useRecoilState(CardItem);
  const { title, id } = task;

  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setTaskDetail({
      mainId: mainId,
      id: id,
    });
    navigate(`/details/${mainId + "_" + id}`);
  };

  const deleteTask = () => {
    const filterArr = cardArray.map((ele) => {
      if (ele.id == mainId) {
        const obj = { ...ele };
        const taskarr = [...obj.task];
        const newTaskArr = taskarr.filter((ele) => ele.id !== id);
        obj.task = [...newTaskArr];

        return obj;
      } else {
        return ele;
      }
    });

    setCardArray(filterArr);
  };

  return (
    <div
      className={style.task_box}
      onMouseOver={() => setVisibility(true)}
      onMouseOut={() => setVisibility(false)}
    >
      <span className={style.task}>{title}</span>

      <div className={visibility ? style.edit : style.hiddenEdit}>
        <ModeEditOutlinedIcon onClick={handleClick} />
        <button className={style.deleteBtn}>
          <AiFillDelete onClick={deleteTask} />
        </button>
      </div>
    </div>
  );
}

export default Task;
