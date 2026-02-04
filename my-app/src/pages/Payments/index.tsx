import { useEffect, useState  } from 'react';
import Navbar from '../../components/Navbar';
import styles from './Payments.module.css';

export default function Payments() {

    type SubscriptionType = "monthly" | "quarterly" | "yearly";

    interface Members {
        id: number
        name: string
        tel: number
        email: string
        paymentDay: string
        subscription: SubscriptionType
    }

    const [members, setMembers] = useState<Members[]>([])

    useEffect(() => {
        fetch("http://localhost:5153/members")
        .then(res => res.json())
        .then(data => {
            setMembers(data)
        }) 
    }, [])
    
    const [confirmPaid, setConfirmPaid] = useState<Record<number, boolean>>(() => {
        const saved = localStorage.getItem("confirmPaid");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("confirmPaid", JSON.stringify(confirmPaid));
    }, [confirmPaid]);
    

    function checkStatus(paymentDay: string, memberId: number, subscription: SubscriptionType) {


        if(confirmPaid[memberId]) {
            return "Pago"
        }
        
            if (subscription === "monthly") {
        const today = new Date()
        const expirationDay = Number(paymentDay)

        const monthlyExpiration = new Date(
        today.getFullYear(),
        today.getMonth(),
        expirationDay
    )

    today.setHours(0, 0, 0, 0)
    monthlyExpiration.setHours(0, 0, 0, 0)
    
    if (today.getTime() > monthlyExpiration.getTime()) {
        return "Atrasado"
    }
            }
    
    return "Pendente"
    
}

    return (
        <>
    <div className="pageContent">
        <Navbar />

        <div className={styles.memberListContainer}>
            <div className={styles.memberListHeader}>
              <p className={styles.listTitle}>Pagamentos</p>
        </div>

        <div className={styles.memberList}>

            <table className={styles.memberTable}>

                <ul className={styles.listColumn}><p className={styles.columnTitle}>Nome</p>
                    {members.map(m => (
                    <li key={m.id} className={styles.listItem}>
                        {m.name}
                    </li>
                    ))}
                </ul>

                <ul className={styles.listColumn}><p className={styles.columnTitle}>Telefone</p>
                    {members.map(m => (
                    <li key={m.id} className={styles.listItem}>
                        {m.tel}
                    </li>
                    ))}
                </ul>

                <ul className={styles.listColumn}><p className={styles.columnTitle}>Email</p>
                    {members.map(m => (
                    <li key={m.id} className={styles.listItem}>
                        {m.email}
                    </li>
                    ))}
                </ul>

                <ul className={styles.listColumn}><p className={styles.columnTitle}>Status</p>
                    {members.map(m => (
                    <li key={m.id} className={styles.listItem}>
                        <span className={checkStatus(m.paymentDay, m.id, m.subscription) === "Atrasado"
                        ? styles.expiredStatus
                        : checkStatus(m.paymentDay, m.id,m.subscription) === "Pago"
                        ? styles.paidStatus
                        : styles.pendingStatus}>
                            {checkStatus(m.paymentDay, m.id, m.subscription)}
                            </span>
                    </li>
                    ))}
                </ul>

                <ul className={styles.listColumn}><p className={styles.columnTitle}>Comprovante</p>
                    {members.map(m => (
                    <li key={m.id} className={styles.listItem}>
                        <button onClick={() => setConfirmPaid(prev => ({ ...prev, [m.id]: true }))}>Y</button>
                        <button onClick={() => setConfirmPaid(prev => ({ ...prev, [m.id]: false }))}>N</button>
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