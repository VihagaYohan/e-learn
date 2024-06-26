import React from "react";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { BsFillCalendar3EventFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";

// models
import { MenuItem } from "../../models";

const menuItems: MenuItem[] = [
  {
    label: "Home",
    icon: <AiFillHome />,
  },
  {
    label: "Courses",
    icon: <FaChalkboardTeacher />,
  },
  {
    label: "Students",
    icon: <FaUserGraduate />,
  },
  {
    label: "Events",
    icon: <BsFillCalendar3EventFill />,
  },
  {
    label: "Issues",
    icon: <FaQuestion />,
  },
];

const UITeacherMenu = () => {
  return (
    <List>
      {menuItems.map(({ label, icon }, index) => (
        <ListItem key={label} disablePadding>
          <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default UITeacherMenu;
