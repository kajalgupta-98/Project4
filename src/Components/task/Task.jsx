import React, { useState } from 'react'
import style from './Task.module.css'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DialogBox from '../Dialog/DialogBox';

function Task(props) {
    const [visibility, setVisibility] = useState(false);
  const [open, setOpen] = React.useState(false);


    const handleClick = ()=>{
        setOpen(!open);
    }
    
  return (
    <div className={style.task_box} onClick={handleClick} onMouseOver={()=>setVisibility(true)} onMouseOut={()=>setVisibility(false)}>
      <span className={style.task} >{props.task||"hello"}</span>

      <div className={visibility?style.pencil:style.hiddenPencil} >
      <ModeEditOutlinedIcon/>
      </div>
      {
      open&&<DialogBox setOpen={setOpen} open={open} />
    }
    </div>
    
  )
}

export default Task
