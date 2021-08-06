import './main.css';
import Header from './Header';
import React from 'react';

export default function main(props){
    return (
        <React.Fragment>
        <Header />
        <div className="content">
            main
        </div>
    </React.Fragment>
    )
}