import Navbar from "../../../components/Navbar";
import styles from './Create.module.css';

export default function Create() {

    return (
        <>
        <div className={styles.createMemberContainer}>
            <Navbar />

           <div className={styles.memberCreation}>
            <p className={styles.listTitle}>Registrar Aluno</p>
             <form action="POST" className={styles.creationForm}>
                <div className={styles.formSection}>
            <p className={styles.formTitle}>Informações Pessoais</p>
        <ul>
            <li>
            <div className={styles.formGroup}>
                    <label htmlFor="nameInput">Nome</label>
                    <input type="text" id="nameInput" required/>
                </div>

                <div style={{width: '30%'}} className={styles.formGroup}>
                    <label htmlFor="telInput" >Telefone</label>
                    <input type="number" id="telInput" required/>
                </div>

                <div style={{width: '20%'}} className={styles.formGroup}>
                    <label htmlFor="emailInput">E-mail</label>
                    <input type="email" id="emailInput" required/>
                </div>

                <div style={{width: '30%'}} className={styles.formGroup} >
                    <label htmlFor="birthInput">Data de nascimento</label>
                    <input type="date" id="birthInput" required/>
                </div>
            </li>
        </ul>

        <ul>
            <li>
                <div style={{width: '20%'}} className={styles.formGroup}>
                    <label htmlFor="cpfInput">CPF</label>
                    <input type="number" id="cpfInput" required/>
                </div>
            </li>
        </ul>
                </div>

                <div className={styles.formSection}>
                    <p className={styles.formTitle}>Endereço</p>
        <ul>
            <li>
                <div className={styles.formGroup}>
                    <label htmlFor="streetInput">Rua</label>
                    <input type="text" id="streetInput" required/>
                </div>

                <div style={{width: '6%'}} className={styles.formGroup}>
                    <label htmlFor="numberInput" >Número</label>
                    <input type="number" id="numberInput" required/>
                </div>

                <div style={{width: '30%'}} className={styles.formGroup}>
                    <label htmlFor="districtInput">Bairro</label>
                    <input type="text" id="districtInput" required/>
                </div>

                <div style={{width: '30%'}} className={styles.formGroup}>
                    <label htmlFor="cityInput">Cidade</label>
                    <input type="text" id="cityInput" required/>
                </div>
                <div style={{width: '30%'}} className={styles.formGroup}>
                    <label htmlFor="codeInput">CEP</label>
                    <input type="number" id="codeInput" required/>
                </div>
            </li>
        </ul>
                </div>

                <div className={styles.formSection}>
                    <p className={styles.formTitle}>Aulas</p>
        <ul>
            <li>
                <div style={{width: '12%'}} className={styles.formGroup}>
                    <label htmlFor="registerDate">Data de cadastro</label>
                    <input type="date" id="registerDate" required/>
                </div>

                <div style={{width: '12%'}} className={styles.formGroup}>
                    <label htmlFor="paymentDate" >Data escolhida</label>
                    <input type="number" id="paymentDate" required/>
                </div>

                <div style={{width: '10%'}} className={styles.formGroup}>
                    <label htmlFor="subscription">Pagamento</label>
                    <select name="subscription" id="subscription">
                        <option value="monthly">Mensal</option>
                        <option value="quarterly">Trimestral</option>
                        <option value="yearly">Anual</option>
                    </select>
                </div>
            </li>
        </ul>
                </div>

            <button className={styles.registerMemberButton}>Registrar novo aluno</button>
             </form>
           </div>
        </div>
        </>
    )
}