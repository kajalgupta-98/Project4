import { useState } from "react";
import style from "./description.module.css";
import { CgMenuLeftAlt } from "react-icons/cg";
import { TfiAnnouncement } from "react-icons/tfi";
import { AiOutlineInfoCircle } from "react-icons/ai"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRecoilState } from "recoil";
import CardItem, { taskDetails } from "../../recoil/atoms/Atoms";


const Description = () => {
  const [taskDescription, setTaskDescription] = useRecoilState(taskDetails)
  const [showaddDescriptionBox, setShowaddDescriptionBox] = useState(false);
  const [value, setValue] = useState("");

  function handleShowAddDescriptionBox() {
    setShowaddDescriptionBox(!showaddDescriptionBox);
      const obj ={...taskDescription}
      obj.description= value.replace(/<\/?p>/g, '')
      setTaskDescription(obj)
  }
  console.log(taskDescription)

  console.log(value)
  return (
    <div className={style.descriptionConatiner}>
      <div className={style.header}>
        <CgMenuLeftAlt />
        <h3>Description</h3>
        {showaddDescriptionBox && <p><AiOutlineInfoCircle /></p>}
      </div>

      <div className={style.content}>
        {showaddDescriptionBox ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={style.addDescriptionBox}>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
             
              <h1>{value.replace(/<\/?p>/g, '')}</h1>
              
            </div>

            <div className={style.bottomSection}>
              <div className={style.btnContainer}>
                <button
                  className={style.saveBtn}
                  onClick={handleShowAddDescriptionBox}
                >
                  Save
                </button>
                <button
                  className={style.cancelBtn}
                  onClick={handleShowAddDescriptionBox}
                >
                  Cancel
                </button>
              </div>

              <span>
                <TfiAnnouncement color="blue" />
                <p>Share Feedback</p>
              </span>
            </div>
          </div>
        ) : (
          <div
            className={style.editorBox}
            onClick={handleShowAddDescriptionBox}
          >
            Add a more detailed description
            {taskDescription.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
