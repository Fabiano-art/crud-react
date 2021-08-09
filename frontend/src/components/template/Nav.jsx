import './Nav.css';
import React from 'react';

export default function nav(props){
    return (
        <aside className="menu-area">
            <nav className="menu">
                {/* Refatorar criando componentes para essas ancoras */}
                <a href="#/">
                    <i className="fa fa-home"></i>
                    Início
                </a>
                <a href="#/users">
                    <i className="fa fa-users"></i>
                    Users
                </a>
            </nav>
        </aside>
    )
}