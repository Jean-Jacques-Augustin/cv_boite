import React from "react";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const links = [
     { name: "Lien 1", path: "/", icon: "" },
     { name: "Lien 2", path: "/page1", icon: "" },
     { name: "Lien 3", path: "/page2", icon: "" },
     { name: "Lien 4", path: "/page3", icon: "" },
     { name: "Lien 5", path: "/page4", icon: "" },
];

export const NavliksMd = () => {
     return links.map((link_item, key) => (
          <NavLink className={"navbar_link"} to={link_item.path} key={key}>
               {link_item.name}
          </NavLink>
     ));
};
