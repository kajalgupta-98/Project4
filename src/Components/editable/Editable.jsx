import React, { useState } from "react";
import style from "./Editable.module.css";
import AddIcon from "@mui/icons-material/Add";
import AddCardIcon from "@mui/icons-material/AddCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from '@mui/icons-material/Close';

function Editable({name,setName,addList}) {
  const [showBtn, setShowBtn] = useState(true);
  const handleClick = () => {
        setShowBtn(!showBtn)
  };

  const handleClose=()=>{
    setShowBtn(!showBtn)
  }

  const dislay = showBtn?<div className={style.container}>
  <p className={style.buttonDiv} onClick={handleClick}>
    <AddIcon />
    Add a Card
  </p>
  <span className={style.moreIcons}>
  <AddCardIcon />

  </span>
  </div>:
  <div className={style.btnDiv}>
    <input type="text" placeholder="Enter a title for this card...."
    onChange={(e)=>setName(e.target.value)}
    
    />
    <div className={style.inputBtn}>
      <div className={style.btnAdd}>
      <button onClick={addList}>Add Card</button>
        <span onClick={handleClose}>
        <CloseIcon className={style.closeBtn} />
        </span>
      </div>
    <MoreHorizIcon/>

    </div>

    
  </div>

  return (
    
    <div>{dislay}</div>
  )
}




export default Editable;
