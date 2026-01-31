import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';


export default function Navbar() {
    return(
        <div className={styles.navContainer}>
            <nav className={styles.navBar}>
                <img className={styles.logo} src={logo} alt="Logo" />
                    <li className={styles.navItems}>
                        <NavLink to="../pages/Home/index.tsx"className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Painel</NavLink>
                        <NavLink to="../pages/Members/index.tsx"className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Alunos</NavLink>
                        <NavLink to="../pages/Agenda/index.tsx"className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Agenda</NavLink>
                        <NavLink to="../pages/idkkk/index.tsx"className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Pagamentos</NavLink>
                    </li>
            </nav>
        </div>
    )
}