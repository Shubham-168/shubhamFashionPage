import React from 'react'

import './header.css'

export default function Header() {
    return(
        <nav>
            <div className='logo'> TRIN TRIM </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Our Products</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
                <div className='search'>
                    <i class="bi bi-search"></i>
                    <i class="bi bi-cart"></i>
                </div>
            </div>
            <div className='menu-icon'>
                <i class="bi bi-list"></i>
            </div>
        </nav>
    )
} 
