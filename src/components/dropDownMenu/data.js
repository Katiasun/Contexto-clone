import { PiQuestionLight, PiLightbulb, PiFlagThin, PiCalendarBlankLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { FaRegCircleQuestion } from "react-icons/fa6";

const data = [
  {
    id: "1",
    title: "How to play",
    icon: <PiQuestionLight />,
  },
  {
    id: "2",
    title: "Hint",
    icon: <PiLightbulb />,
  },
  {
    id: "3",
    title: "Give up",
    icon: <PiFlagThin />,
  },
  {
    id: "4",
    title: "Previous games",
    icon: <PiCalendarBlankLight />,
  },
  {
    id: "5",
    title: "Settings",
    icon: <CiSettings />,
  },
  {
    id: "6",
    title: "Credits",
    icon: <BsInfoCircle />,
  },
  {
    id: "7",
    title: "Feedback",
    icon: <TbMessageCircle />,
  },
  {
    id: "8",
    title: "FAQ",
    icon: <FaRegCircleQuestion />,
  },
];

export default data;
