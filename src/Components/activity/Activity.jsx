import React, { useState } from "react";
import { RxActivityLog } from "react-icons/rx";
import style from "./Activity.module.css";
import TextEditor from '../textEditor/textEditor'

function Activity() {
  const [editer, setEditer] = useState(true);

  const handleClick = () => {
    setEditer(false);
  };

  return (
    <div className={style.mainContainer}>
    
      <div className={style.container}>
        <div className={style.activityDiv}>
          <RxActivityLog />
          <h3>Activity</h3>
        </div>
        <button className={style.showBtn}>Show details</button>
      </div>
      <div className={style.editableDiv}>
        <h3 className={style.userProfile}>PR</h3>
        {
          editer?
      <span className={style.editedArea} onClick={handleClick}>Write a comment...</span>:
      <div className={style.tetContainDiv}>
      <TextEditor  />
      <div className={style.saveBtnDiv}>
      <button>save</button>
      <input type="checkbox" />
      <p>Watch</p>
      </div>
      </div>

        }
      </div>
    
  

      
    </div>
  );
}

export default Activity;
