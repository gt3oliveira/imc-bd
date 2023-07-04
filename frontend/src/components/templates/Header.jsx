import React from "react";
import Titulo from "./Titulo";

export default function Header(props) {
    return (        
        <>
        <Titulo {...props} />
        <div className="header d-none d-sm-flex flex-column">
            <h1>
            <i className={`fa fa-${props.icon}`}></i> {props.title}     
            </h1>
            <p className="lead text-muted">{props.subtitle}</p>
        </div>        
        </>
    )
}