import { atom } from "recoil";

const CardItem = atom({
  key: "card Array",
  default: [],
});

export const taskDetails = atom({
    key:"task details",
    default: {
        description:"",
        title:"",
        comments:[]
    }
})

// export {taskDetails}
export default CardItem;
