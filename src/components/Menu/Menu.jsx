import './menu.scss';

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul className='ul-menu'>
                <li>
                <a onClick={()=>setMenuOpen(false)} href="#intro">Home</a>
                </li>
                <li>
                <a onClick={()=>setMenuOpen(false)} href="#projects">Projects</a>
                </li>
                <li>
                <a onClick={()=>setMenuOpen(false)} href="#about">About</a>
                </li>
                <li>
                <a onClick={()=>setMenuOpen(false)} href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
