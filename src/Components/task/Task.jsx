import React, { useState } from "react";
import style from "./Task.module.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { taskDetails } from "../../recoil/atoms/Atoms";
import { AiFillDelete } from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";
function Task({ task, mainId, cardArray, setCardArray }) {
  const [taskDetail, setTaskDetail] = useRecoilState(taskDetails);

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
    <Draggable draggableId={mainId} index={id}>
      {(Provided) => (
        <div
          ref={Provided.innerRef}
          {...Provided.draggableProps}
          {...Provided.dragHandleProps}
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
      )}
    </Draggable>
  );
}

export default Task;
