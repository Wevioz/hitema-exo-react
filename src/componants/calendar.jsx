import { useState } from "react";
import { HeaderCalendar } from "./headerCalendar"
import style from './calendar.css'


export  function Calendar (){
    const [actualDate , setActualDate] = useState(new Date());
    const today = new Date()
    const weekDays = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
    const firstDay = new Date(actualDate.getFullYear(),actualDate.getMonth(),1)
    const paddingDays = weekDays.indexOf(firstDay.toLocaleString('default', { weekday: 'long' }))

    function daysInMonth(anyDateInMonth) {
        return new Date(anyDateInMonth.getFullYear(), anyDateInMonth.getMonth()+1, 0).getDate();
    }
    
    return <>
    <div className="container">
        <HeaderCalendar setActualDate={setActualDate}></HeaderCalendar>
        <div className="dayCalendar">
            <div className="row">
                {weekDays.map(day => (
                    <div className="col-md mb-2" >{day}</div>
                ))}
            </div>
            <div className="month">
                { [...Array(paddingDays).keys()].map(paddingDay => (
                    <div className="paddingDay" key={paddingDay}></div>
                ))}
                {Array.from({length: daysInMonth(actualDate)}, (_, i) => i + 1).map(day => (
                today.getMonth() === actualDate.getMonth() && today.getDate() === day ?<div className="today" key={day}>{day}</div> : <div className="day" key={day}>{day}</div>
                )) }
            </div>
        </div>
    </div>
    </>

}