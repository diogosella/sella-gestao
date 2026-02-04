import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';


export default function Navbar() {
    return(
        <div className={styles.navContainer}>
            <nav className={styles.navBar}>
                <img className={styles.logo} src={logo} alt="Logo" />
                    <li className={styles.navItems}>
                        <NavLink to="/"className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Painel</NavLink>
                        <NavLink to="/members"className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Alunos</NavLink>
                        <NavLink to="/agenda"className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Agenda</NavLink>
                        <NavLink to="/payments"className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>Pagamentos</NavLink>
                    </li>
            </nav>
        </div>
    )
}