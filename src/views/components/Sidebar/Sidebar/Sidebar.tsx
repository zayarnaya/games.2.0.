import React, { useState } from "react";
import { NavItem } from "../NavItem/NavItem";
import styles from './Sidebar.module.scss';

export const Sidebar = ({links}) => {
  const [items, setItems] = useState(links);
    return (
      <aside className={styles.sidebar}>
        <ul className="nav-list">
              {items.map((item, index) => (
                <NavItem active={item.active} name={item.name} href={item.href} key={index} />
              ))}
        </ul>
      </aside>
    )
  }
