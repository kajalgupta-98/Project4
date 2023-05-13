import React, { useState } from "react";
import style from "./Task.module.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { taskDetails } from "../../recoil/atoms/Atoms";

function Task({ task, mainId }) {
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
