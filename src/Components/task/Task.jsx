import React, { useState } from "react";
import style from "./Task.module.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { taskDetails } from "../../recoil/atoms/Atoms";
import {AiFillDelete} from 'react-icons/ai'
import { useDrag } from "react-dnd";

function Task({ task, mainId, cardArray, setCardArray, removeTask, moveTask}) {
  const [taskDetail, setTaskDetail] = useRecoilState(taskDetails);

  const { title, id, index } = task;

  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();

  const [{ isDragging }, dragRef] = useDrag({
    type: "BOX",
    item: () => ({ ...task, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleClick = () => {
    setTaskDetail({
      mainId: mainId,
      id: id,
    });
    navigate(`/details/${mainId + "_" + id}`);
  };


  const deleteTask = ()=>{

    const filterArr = cardArray.map((ele) => {
      if (ele.id == mainId) {
        const obj = { ...ele };
        const taskarr = [...obj.task];
        const newTaskArr = taskarr.filter((ele)=>ele.id !== id)
        obj.task = [...newTaskArr];

        return obj
      } else {
        return ele;
      }
    });

    setCardArray(filterArr);
  }

  return (
    <>
      <div
      ref={dragRef} onDrag={()=>removeTask(index)} onDrop={moveTask}
        className={style.task_box}
        onMouseOver={() => setVisibility(true)}
        onMouseOut={() => setVisibility(false)}
      >
        <span className={style.task}>{title}</span>

        <div className={visibility ? style.edit : style.hiddenEdit}>
          <ModeEditOutlinedIcon onClick={handleClick} />
        <button className={style.deleteBtn} ><AiFillDelete onClick={deleteTask}/></button>
        </div>
      </div>
    </>
  );
}

export default Task;
