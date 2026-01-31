import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import styles from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

function Home() {
    
    type Task = {
        id: number;
        text: string;
        done: boolean;
    }


    const [showInput, setShowInput] = useState(false);

    const taskCreation = () => {
        setShowInput(prev => !prev);
    }

    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const [typedTask, setTypedTask] = useState("");

    function addTask() {
        if (typedTask.trim() === "") return;

        const task: Task = {
            id: Date.now(),
            text: typedTask,
            done: false
        };

        setTasks([...tasks, task]);
        setTypedTask("");
        setShowInput(false);
    }

    function toggleTask(id: number) {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, done: !task.done} : task
        ));
    }

    function deleteTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }


    return (
        <>
        <div className={styles.homeContainer}>
        <Navbar />
        
            <div className={styles.homeContent}>

            <div className={styles.listSection}>
                <p className={styles.listTitle}>Mensalidades pendentes</p>
                    <div className={styles.listContainer}>
                        <p className={styles.monthTitle}>JAN</p>
                        <div className={styles.pendingSubscriptionsList}>
                        <ul>
                            <li>Nome completo</li>
                        </ul>
                        <ul>
                            <li>Data</li>
                        </ul>
                        <ul>
                            <li>Status</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.listSection}>
                <p className={styles.listTitle}>Lista de tarefas<button onClick={taskCreation}>+</button></p>
                    <div className={styles.listContainer}>
                        {tasks.map((task) => (
                            <ul key={task.id} className={styles.toDoTask}>
                            <input type="checkbox" onChange={() => toggleTask(task.id)} checked={task.done}/>
                            
                            <li className={styles.visibleTask}>{task.text}</li>
                            
                            <FontAwesomeIcon icon={faCircleMinus} className={task.done ? styles.deleteBin : styles.disableddeleteBin} onClick={() => deleteTask(task.id)}></FontAwesomeIcon>
                        </ul>
                        ))}
                         {showInput && (
                            <>
                            <input type="text" value={typedTask} placeholder="Insira uma nova tarefa" className={styles.taskInput} onChange={(e) => setTypedTask(e.target.value)}/>
                            <button className={styles.insertTask} onClick={addTask}>Ok</button>
                            </>
                         )}
                    </div>
                </div>
        </div>

            </div>
        </>
    )
    
}

export default Home;