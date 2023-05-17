import { atom } from "recoil";

const CardItem = atom({
  key: "card Array",
  default:JSON.parse(localStorage.getItem("data"))|| [],
});

export const taskDetails = atom({
  key: "task details",
  default: {},
});

export default CardItem;
