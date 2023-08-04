import { HeaderContainer } from "./style.js"
import { HiMenuAlt1 } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import Menu from '../Menu/index.jsx'

export function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenuIcon = () => setMenuActive(!menuActive);
    return (
     <>
        <HeaderContainer>
            <button onClick={toggleMenuIcon}>
             {
                menuActive ?  
                <IoMdClose className="menuIcon" /> :
                <HiMenuAlt1 className="menuIcon" />
             }
            </button>
                <div>
                    <h1 className='title'>TO DO LIST</h1>
                    <p className='paragraph'>some boring unless text example</p>
                </div>
        </HeaderContainer>

        <div onClick={toggleMenuIcon}>
            {menuActive && <Menu/>}
        </div>
     </>
    )
}

