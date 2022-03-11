import { useState } from "react";

export  function Header ({setActualDate}){
    const [date , setDate] = useState(new Date());

    function handleYear(type){
        if(type === "add") setDate(new Date(date.setFullYear(date.getFullYear() +1)))
        else if (type === "remove") setDate(new Date(date.setFullYear(date.getFullYear() -1)))
        setActualDate(date)
    }

    function handleMonth(type){
        if(type === "add") setDate(new Date(date.setMonth(date.getMonth() +1)))
        else if(type === "remove") setDate(new Date(date.setMonth(date.getMonth() -1)))
        setActualDate(date)
    }

    return <>
    <div className="row justify-content-md-center" >
        <a className="col-md-auto" style={{ cursor:"pointer" }} href={void (0)} onClick={() => handleMonth("remove")}>{ "<<" }</a>
        <p className="col-md-auto">{date.toLocaleString('default', { month: 'long' })}</p>
        <a className="col-md-auto" style={{ cursor:"pointer" }} href={void (0)} onClick={() => handleMonth("add")}>{ ">>" }</a>
    </div>
    <div className="row justify-content-md-center" >
        <a className="col-md-auto" style={{ cursor:"pointer" }} href={void (0)} onClick={() => handleYear("remove")}>{ "<<" }</a>
        <p className="col-md-auto">{date.getFullYear()}</p>
        <a className="col-md-auto" style={{ cursor:"pointer" }} href={void (0)} onClick={() => handleYear("add")}>{ ">>" }</a>
    </div>
    </>

}