import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import styles from './Members.module.css';

export default function Members() {

    interface Members {
        id: number
        name: string
        tel: number
        email: string
    }

    const [members, setMembers] = useState<Members[]>([])

    useEffect(() => {
        fetch("http://localhost:5153/members")
        .then(res => res.json())
        .then(data => setMembers(data))
    }, [])

        const [search, setSearch] = useState('');

        const spyInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            const value = e.currentTarget.value.toLowerCase();
            setSearch(value);
            console.log(value);
        }

        const filteredMembers = members.filter(m => (
            m.name.toLowerCase().includes(search) ||
            m.tel.toString().includes(search)  
        ))      

    return (
        <>
    <div className="pageContent">
        <Navbar />

        <div className={styles.memberListContainer}>
            <div className={styles.memberListHeader}>
              <p className={styles.listTitle}>Alunos<Link to={'/create'} className={styles.addMemberButton}>+</Link></p>
              <input onChange={spyInput} className={styles.searchBar} placeholder='Pesquisar' />
        </div>

        <div className={styles.memberList}>

            <table className={styles.memberTable}>

                <ul className={styles.listColumn}><p className={styles.columnTitle}>Nome</p>

                    {filteredMembers.map(m => (
                    <li key={m.id} className={styles.listItem}>
                        {m.name}
                    </li>
                    ))}

                </ul>

                <ul className={styles.listColumn}><p className={styles.columnTitle}>Telefone</p>

                    {filteredMembers.map(m => (
                    <li key={m.id} className={styles.listItem}>
                        {m.tel}
                    </li>
                    ))}

                </ul>

                <ul className={styles.listColumn}><p className={styles.columnTitle}>Email</p>

                    {filteredMembers.map(m => (
                    <li key={m.id} className={styles.listItem}>
                        {m.email}
                    </li>
                    ))}
                </ul>

                <ul className={styles.listColumn}><p className={styles.columnTitle}><span>-</span></p>
                    {filteredMembers.map(m => (
                    <li key={m.id} className={styles.listItemButton}>
                        <Link to={"/edit" + m.id} className={styles.seeMoreButton}>Ver mais</Link>
                    </li>
                    ))}
                </ul>

            </table>
        </div>
        </div>
    </div>
        </>
    )
}