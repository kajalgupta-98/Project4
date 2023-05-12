import React from 'react'
import style from "./addList.module.css"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from "@mui/icons-material/Close";


const AddList = () => {
    const [showInputBox, setShowInputBox] = React.useState(false)
    const [listTitle, setListTitle] = React.useState("")

    function handleAddList(){
        if(listTitle.length!==0){
            alert("clicked")
        }
    }
  return (
   <>
   {showInputBox ? 
        <div className={style.addList}>
        <input type="text" 
               placeholder="Enter List Title..."
               value={listTitle}
               onChange={(e)=> setListTitle(e.target.value)}/>
        <span>
            <button onClick={handleAddList}>
                Add List
            </button>
            <CloseIcon onClick={()=> setShowInputBox(false)}/>
        </span>
        
    </div> :
    <div className={style.addListContainer} onClick={()=> setShowInputBox(true)}>
      <AddOutlinedIcon/>
      <p>Add Another List</p>
    </div>
    
}
     
   
   </>
   
    
  )
}

export default AddList
