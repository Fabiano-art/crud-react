import './Header.css';
import React from 'react';

export default function header(props){
    return (
        <header className="header d-sm-flex align-items-center ">
            <h1>
                <i className={`fa fa-${props.icon}`}></i> {props.title}
            </h1>
            <p className="lead text-muted">{props.subtitle}</p>
        </header>
    )
}