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
import { useNavigation, Link } from "react-router-dom";

// models
import { MenuItem } from "../../models/index";

const menuItems: MenuItem[] = [
  {
    label: "Home",
    icon: <AiFillHome />,
  },
  {
    label: "Teachers",
    icon: <FaChalkboardTeacher />,
    route: "/teachers",
  },
  {
    label: "Students",
    icon: <FaUserGraduate />,
  },
  {
    label: "Course",
    icon: <FaBook />,
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

const UIAdminMenu = () => {
  const navigation = useNavigation();
  return (
    <List>
      {menuItems.map(({ label, icon, route = "/" }, index) => (
        <ListItem key={label} disablePadding component={Link} to={route}>
          <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default UIAdminMenu;
