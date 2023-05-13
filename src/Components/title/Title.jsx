import React, { useState } from "react";
import style from "./Title.module.css";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { useRecoilState } from "recoil";
import CardItem, { taskDetails } from "../../recoil/atoms/Atoms";

function Title() {
  const [title, setTitle] = useState("");
  const [cardId, setCardId] = useRecoilState(taskDetails);
  const [data, setData] = useRecoilState(CardItem);

  function addTaskTitle(e) {}
  const mainIndex = data.findIndex((ele) => ele.id === cardId.mainId);
  const taskIndex = data[mainIndex].task.findIndex(
    (ele) => ele.id === cardId.id
  );
  React.useEffect(() => {
    setTitle(data[mainIndex].task[taskIndex].title);
  }, []);
  return (
    <div className={style.title_div}>
      <VideoLabelIcon fontSize="small" />
      <div className={style.title_text}>
        <input
          type="text"
          value={title}
          onChange={addTaskTitle}
          className={style.title_box}
        />
        <span>in list </span>
      </div>
    </div>
  );
}

export default Title;
