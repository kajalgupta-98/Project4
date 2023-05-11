import React, { useState } from "react";
import style from "./Editable.module.css";
import AddIcon from "@mui/icons-material/Add";
import AddCardIcon from "@mui/icons-material/AddCard";

function Editable() {
  const [showBtn, setShowBtn] = useState(false);
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
  <AddCardIcon />
  </div>:
  <div>
    <input type="text" />
    <div className={style.inputBtn}>
        <span>Add Cart</span>
        <span onClick={handleClose}>x</span>
    </div>
    
  </div>

  return (
    
    <div>{dislay}</div>
  )

 

  
  
  
    
  
}


{/* <div className={style.container}>
<p className={style.buttonDiv} onClick={handleClick}>
  <AddIcon />
  Add a Card
</p>
<AddCardIcon />
</div> */}

export default Editable;
