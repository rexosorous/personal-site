import React from 'react'
import Link from 'next/Link'
import styles from './NavBar.css'

export default function NavBar(props) {
    const currentPage = props.currentPage;
    return (
        <div className='NavBar'>
            <Link className={currentPage === "Home" ? "active" : ""} href="/"><p>Home</p></Link>
            <Link className={currentPage === "NewPage" ? "active" : ""} href="/NewPage"><p>New Page</p></Link>
        </div>
    )
}