import React from "react";
import { Link } from "react-router-dom";
import './styles.css'


function Header() {
    return (
        <header className="background-img center">

                <h1 className='back text'>
                    <a href='/'>
                        Excelsior Emporium
                    </a>
                </h1>

        </header>
    )
};


export default Header;
