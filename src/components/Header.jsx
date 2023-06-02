import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <h1>Project-Alpha.</h1>
        <main>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/#about">About</Link>
            <Link to="/#brands">Brands</Link>
            <Link to="/services">Service</Link>

        </main>
    </nav>
  )
}

export default Header