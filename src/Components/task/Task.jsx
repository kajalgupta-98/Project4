import React, { useState } from "react";
import style from "./Task.module.css";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useNavigate } from "react-router-dom";
function Task(props) {
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
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
        <span className={style.task}>{props.task}</span>

        <div className={visibility ? style.pencil : style.hiddenPencil}>
          <ModeEditOutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default Task;
