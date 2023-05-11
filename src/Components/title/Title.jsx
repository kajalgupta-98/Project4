import React, { useState } from 'react'
import style from './Title.module.css'
import VideoLabelIcon from '@mui/icons-material/VideoLabel';

function Title() {
  const [toggleInput, setToggleInput] = useState(true)
  const [title, setTitle] = useState('')

  return (
    <div className={style.title_div}>
      <VideoLabelIcon fontSize='small'/>
      <div className={style.title_text}>
      <input type="text" value={title} onClick={()=>setToggleInput(true)} onChange={(e)=>setTitle(e.target.value)} className={style.title_box}/>
    <span>in list Todo</span>
      </div>
    </div>

  )
}

export default Title
