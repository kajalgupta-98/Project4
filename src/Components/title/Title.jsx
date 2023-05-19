import React, { useState } from "react";
import style from "./Title.module.css";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { useRecoilState, useRecoilValue } from "recoil";
import CardItem, { darkMode, taskDetails } from "../../recoil/atoms/Atoms";

function Title() {
  const [title, setTitle] = useState("");
  const [cardId, setCardId] = useRecoilState(taskDetails);
  const [data, setData] = useRecoilState(CardItem);
  const darkModeOn= useRecoilValue(darkMode)

  function chagneTaskTitle(e) {
    setTitle(e.target.value)
  }
  const addTask = ()=>{
    const mainIndex = data.findIndex((ele) => ele.id === cardId.mainId);
    const newTaskArr = data[mainIndex].task.map((ele)=>{
      if(ele.id === cardId.id){
        const newEle = {...ele}
        newEle.title = title
        return newEle
      }
      return ele
  });
  const newData = {...data[mainIndex], task:newTaskArr}
  const updatedData = data.map((ele)=>{
    if(ele.id===cardId.mainId){
      return newData
    }
    return ele
  })
  setData(updatedData)
  localStorage.setItem('data',JSON.stringify(updatedData));

  }
  
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
          onChange={(e)=> chagneTaskTitle(e)}
          onBlur={addTask}
          className={`${style.title_box}  ${darkModeOn? style.dark : null}`}
        />
        <span>in list <u>{data[mainIndex].title}</u></span>
      </div>
    </div>
  );
}

export default Title;
