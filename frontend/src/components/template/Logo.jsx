import './Logo.css';
import React from 'react';

export default function logo(props){
    let path = 'http://www.startsmallmedia.com/wp-content/uploads/2020/07/amazon-logo-fb-ad-size-1200-x-628.png';
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={path} alt="logo" />
            </a>
        </aside>
    )
}