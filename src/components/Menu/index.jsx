import React from "react";
import { NavLink } from "react-router-dom";
import { MenuContainer } from "./styled";

const Menu = () => {
  return (
    <MenuContainer>
        <div>
        <nav>
            <ul>
              <li>
                <NavLink to="/calender"> Calendário </NavLink>
              </li>
              <li>
                <NavLink to="/events"> Eventos </NavLink>
              </li>
              <li>
                <NavLink to="/trash"> Lixeira </NavLink>
              </li>
              <li>
                <NavLink to="/themes"> Temas </NavLink>
              </li>
            </ul>
          </nav>
        </div>
    </MenuContainer>
  );
};

export default Menu;



