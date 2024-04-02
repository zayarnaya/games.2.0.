import React from "react";
import { NavItem } from "../NavItem/NavItem";

export const Sidebar = ({links}) => {
    return (
      <ul className="nav-list">
            {links.map((item, index) => (
              <NavItem active={item.active} name={item.name} href={item.href} key={index} />
            ))}
      </ul>
    )
  }
