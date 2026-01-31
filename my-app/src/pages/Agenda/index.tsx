import React from 'react';
import Navbar from '../../components/Navbar';
import moment from 'moment';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import styles from './Agenda.module.css';

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

export default function Agenda() {
    return (
    <>
        <div className={styles.agendaContainer}>
            <Navbar />

        <div className={styles.agenda}> 
        <p className={styles.listTitle}>Agenda</p>
            <DragAndDropCalendar
                defaultDate={moment().toDate()}
                defaultView='month'
                events={[{}]}
                localizer = {localizer}
                resizable
                className={styles.calendar}
            />
        </div>
        </div>
    </>
    )
}