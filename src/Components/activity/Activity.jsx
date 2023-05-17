import React, { useState } from "react";
import { RxActivityLog } from "react-icons/rx";
import style from "./Activity.module.css";
import CardItem from "../../recoil/atoms/Atoms";
import { taskDetails } from "../../recoil/atoms/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";

function Activity() {
  const [editer, setEditer] = useState(true);
  const [value, setValue] = useState("");
  const [cardArr, setcardArr] = useRecoilState(CardItem);
  const cardID = useRecoilValue(taskDetails);
  const mainIndex = cardArr.findIndex((ele) => ele.id === cardID.mainId);
  const taskArr = [...cardArr[mainIndex].task];
  const index = taskArr.findIndex((ele) => ele.id === cardID.id);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
 

  const handleClick = () => {
    setEditer(false);
  };

  const handleAddComments = () => {
    if (!value) {
      return;
    }

    const comments = [...taskArr[index].Comment];
    const eleObj = {...taskArr[index]};
    comments.push(value);
    const newOBj={...eleObj,Comment:comments}
    
    const mapTaskArr = taskArr.map((ele)=>{
        if(ele.id === cardID.id){
         
          return newOBj
        }
        return ele;
    })

    const newMainArr = cardArr.map((ele)=>{
      if(ele.id === cardID.mainId){
        return {
          ...ele,task:mapTaskArr
        };
      }
      return ele;
    })
   setcardArr(newMainArr)
   setEditer(true)
   setValue("")
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
        {editer ? (
          <span className={style.editedArea} onClick={handleClick}>
            Write a comment...
          </span>
        ) : (
          <div className={style.tetContainDiv}>
            <textarea
              // style={{
              //   marginLeft: "2rem",
              //   paddingLeft: "1rem",
              //   paddingTop: "0.5rem",
              // }}
              cols="58"
              rows="4"
              value={value}
              onChange={handleChange}
              placeholder="Enter Comments here...."
            />

            <div className={style.saveBtnDiv}>
              <button onClick={handleAddComments}>Save</button>
              <input type="checkbox" />
              <p>Watch</p>
            </div>
          </div>
        )}
        
      </div>
      <div className={style.comments}>
      {
        taskArr[index].Comment.map((ele)=>{
          return <div className={style.comment}>
           <h3 className={style.userProfile}>PR</h3>
           {/* <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start"}}>         */}
              <span style={{display:'flex', flexDirection:'row', gap:"1rem"}}>  
                <p style={{fontSize:"18px"}}>{ele}</p> 
                <p style={{fontSize:"13px"}}>just now</p>
              </span>
           {/* </div> */}
          </div>
         
        })
      }
      </div>
     

    </div>
  );
}

export default Activity;
