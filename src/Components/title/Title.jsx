import React, { useState } from 'react'
import style from './Title.module.css'
import VideoLabelIcon from '@mui/icons-material/VideoLabel';

function Title() {
  const [title, setTitle] = useState('')

  return (
    <div className={style.title_div}>
      <VideoLabelIcon fontSize='small'/>
      <div className={style.title_text}>
      <textarea type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className={style.title_box}/>
    <span>in list Todo</span>
      </div>
    </div>

  )
}

export default Title
