import { atom } from "recoil";
import first from "../../utils/first.jpeg";
import clone from "../../utils/clone.jpg";
import nature from "../../utils/nature.jpg";
import dreamy from "../../utils/dreamy.jpg";
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
  default: [first, clone, nature, dreamy],
});
export default CardItem;
