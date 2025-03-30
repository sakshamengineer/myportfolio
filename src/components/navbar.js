import React, { useState } from 'react'

export default function Navbar() {
    const [active , noactive] = useState("");
    function menubar(){
        if (active === ""){
            noactive("active");
        }
        else{
            noactive("");
        }
    }
    return (
        <div className='navbar'>
            <div className="container">
                <h2 className="title-text">Portfolio.</h2>
                <div className= 'mobile-toggle' onClick={menubar}>
                    <div className='hamburger'><i className='bx bx-menu' style={{ color: '#ffffff' }}  ></i></div>
                </div>
                <div className="innernav">
                    <ul className={`nav-links ${active}`}>
                        <li className="nav-item">
                            <a className="nav-link active" style={{ '--i': 1 }} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ '--i': 2 }} href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ '--i': 3 }} href="/skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ '--i': 5 }} href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
