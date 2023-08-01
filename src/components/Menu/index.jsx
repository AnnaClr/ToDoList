import { Container } from "./styled.js";
import { NavLink } from 'react-router-dom'
import { SlCalender } from 'react-icons/sl';
import { MdDarkMode } from 'react-icons/md';
import { BsTrash3Fill } from 'react-icons/bs';
import { IoSettings } from 'react-icons/io5'

export function Menu() {
    return (
        <Container>
          {/* <nav>
            <ul>
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? 'select' : "" }> <SlCalender/>
                  Calendário
                </NavLink>
              </li>

              <li>
                <NavLink to="/themes" className={({isActive}) => isActive ? 'select' : "" }> <MdDarkMode/>
                  Temas
                </NavLink>
              </li>

              <li>
                <NavLink to="/trash" className={({isActive}) => isActive ? 'select' : "" }> <BsTrash3Fill/>
                  Lixeira
                </NavLink>
              </li>

              <li>
                <NavLink to="/settings" className={({isActive}) => isActive ? 'select' : "" }> <IoSettings/>
                  Configurações
                </NavLink>
              </li>
            </ul>
          </nav> */}
        </Container>
    )
}