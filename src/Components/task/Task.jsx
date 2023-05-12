import React, { useState } from "react";
import style from "./Task.module.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import CardItem, { taskDetails } from "../../recoil/atoms/Atoms";


function Task({task}) {
  const [taskDetail, setTaskDetail] =useRecoilState(taskDetails)
  // const cardArray = useRecoilValue(CardItem)

  // const TaskArr = cardArray[index].task||[];


  const {title}=task;
  console.log(title)
 

  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setTaskDetail(task)
    navigate("/details");

  };

  return (
    <>
      <div
        className={style.task_box}
        onClick={handleClick}
        onMouseOver={() => setVisibility(true)}
        onMouseOut={() => setVisibility(false)}
      >
        <span className={style.task}>{title}</span>

        <div className={visibility ? style.pencil : style.hiddenPencil}>
          <ModeEditOutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default Task;
