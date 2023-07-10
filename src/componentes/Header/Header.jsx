import { Link } from 'react-router-dom'
import './Header.css'
import React from 'react'

export const Header =() => {
    return (
        <div className='containerHeader'>
            <header className='Header'>
            
                   <div className='img-container'> 
                   
                 <Link to="/index">  <a href=""><img src='/img/comidavddbranco.png' alt='Logo da Header' className='img' /></a></Link>
                   
                   </div>
            <div className='menu'>
            <nav>
                <ul>
                    <li>
                        <a href="">AGROECOLOGIA</a>
                    </li>
                    <li>
                        <Link to="/Onde" ><a href=''>ONDE ENCONTRAR</a> </Link>
                    </li>
                    <li>
                  <Link to="/Colabore"> <a href=''>COLABORE</a></Link>
                    </li>
            
                </ul>
            </nav>
            </div>
            </header>
        </div>
    )

}
