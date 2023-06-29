import webImage from "./public/services/web.jpg";
import appImage from "./public/services/app.jpg";
import machineImage from "./public/services/machine.PNG";
import { BsFillHouseAddFill, BsBriefcase } from "react-icons/bs";
import { AiOutlineMedicineBox } from "react-icons/ai";

export const webService = {
  title: "Web development",
  desc: "this is a web dev service description here",
  image: webImage,
  items: ["websites", "web apps", "item 3", "item 4", "item 5"],
};
export const appService = {
  title: "App development",
  desc: "this is a app dev service description here",
  image: appImage,
  items: ["websites", "web apps", "item 3", "item 4", "item 5"],
};
export const machineService = {
  title: "Machine Learning",
  desc: "this is a Machine Learning service description here",
  image: machineImage,
  items: ["websites", "web apps", "item 3", "item 4", "item 5"],
};
export const benefits = [
  {
    id: 1,
    icon: AiOutlineMedicineBox,
    title: "Management",
    desc: "This is the description",
  },
  {
    id: 2,
    icon: BsFillHouseAddFill,
    title: "Timely Execution",
    desc: "This is the description",
  },
  {
    id: 3,
    icon: BsFillHouseAddFill,
    title: "Satisfaction",
    desc: "This is the description",
  },
  {
    id: 4,
    icon: BsBriefcase,
    title: "Coders",
    desc: "This is the description",
  },
];
