import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import styles from './Create.module.css';

export default function Create() {

    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const form = e.target as  HTMLFormElement
        const formData = new FormData(form)

        const response = await fetch("http://localhost:5153/create", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            navigate('/members');
        } else {
            alert("Houve um erro ao registrar usuário");
        }
    }
    

    return (
        <>
        <div className={styles.createMemberContainer}>
            <Navbar />

           <div className={styles.memberCreation}>
            <p className={styles.listTitle}>Registrar Aluno</p>

             <form action="/create" method="POST" onSubmit={handleSubmit} className={styles.creationForm}>
                <div className={styles.formSection}>
            <p className={styles.formTitle}>Informações Pessoais</p>
        <ul>
            <li>
            <div className={styles.formGroup}>
                    <label htmlFor="nameInput">Nome</label>
                    <input type="text" id="nameInput" name="name" required/>
                </div>

                <div style={{width: '30%'}} className={styles.formGroup}>
                    <label htmlFor="telInput" >Telefone</label>
                    <input type="number" id="telInput" name="tel" required/>
                </div>

                <div style={{width: '20%'}} className={styles.formGroup}>
                    <label htmlFor="emailInput">E-mail</label>
                    <input type="email" id="emailInput" name="email" required/>
                </div>

                <div style={{width: '30%'}} className={styles.formGroup} >
                    <label htmlFor="birthInput">Data de nascimento</label>
                    <input type="date" id="birthInput" name="birth" required/>
                </div>
            </li>
        </ul>

        <ul>
            <li>
                <div style={{width: '20%'}} className={styles.formGroup}>
                    <label htmlFor="cpfInput">CPF</label>
                    <input type="number" name="cpf" id="cpfInput" required/>
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
                    <input type="text" name="street" id="streetInput" required/>
                </div>

                <div style={{width: '6%'}} className={styles.formGroup}>
                    <label htmlFor="numberInput" >Número</label>
                    <input type="number" name="housenum" id="numberInput" required/>
                </div>

                <div style={{width: '30%'}} className={styles.formGroup}>
                    <label htmlFor="districtInput">Bairro</label>
                    <input type="text" name="district" id="districtInput" required/>
                </div>

                <div style={{width: '30%'}} className={styles.formGroup}>
                    <label htmlFor="cityInput">Cidade</label>
                    <input type="text" name="city" id="cityInput" required/>
                </div>
                <div style={{width: '30%'}} className={styles.formGroup}>
                    <label htmlFor="codeInput">CEP</label>
                    <input type="number" name="cep" id="codeInput" required/>
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
                    <input type="date" id="registerDate" name="registerDate" required/>
                </div>

                <div style={{width: '12%'}} className={styles.formGroup}>
                    <label htmlFor="paymentDate" >Data escolhida</label>
                    <input type="number" id="paymentDate" name="paymentDate" required/>
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

            <button type="submit" className={styles.registerMemberButton}>Registrar novo aluno</button>
             </form>
           </div>
        </div>
        </>
    )
}