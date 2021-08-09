import './main.css';
import Header from './Header';
import React from 'react';

export default function main(props){
    return (
        <React.Fragment>
            <Header {...props}/>
            <main className="content container-fluid">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
        </React.Fragment>
    )
}