import './main.css';
import Header from './Header';
import React from 'react';

export default function main(props){
    return (
        <React.Fragment>
        <Header {...props}/>
        <main className="content">
            main
        </main>
    </React.Fragment>
    )
}