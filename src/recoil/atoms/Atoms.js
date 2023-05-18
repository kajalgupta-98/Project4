import { atom } from "recoil";
import first from "../../utils/first.jpeg";
import clone from "../../utils/clone.jpg";
import MImage from "../../utils/MImage.jpg";
import gexupdate from "../../utils/gxupdate.jpg"; 
import Webb from "../../utils/Webb.jpg"; 
const CardItem = atom({
  key: "card Array",
  default:JSON.parse(localStorage.getItem("data"))|| [],
});

export const taskDetails = atom({
  key: "task details",
  default: {},
});

export const theme = atom({
  key: "theme",
  default: [first, clone, MImage, gexupdate,Webb],
});

export const darkMode= atom({
  key:"dark mode",
  default:false
})

export default CardItem;
