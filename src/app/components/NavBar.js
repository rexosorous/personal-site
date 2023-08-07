'use client'

import React from 'react'
import Link from 'next/Link'
import { usePathname } from 'next/navigation'
import styles from './NavBar.css'

export default function NavBar() {
    const currentPage = usePathname()
    return (
        <div className='NavBar'>
            <Link className={currentPage === "/" ? "active" : ""} href="/"><p>Home</p></Link>
            <Link className={currentPage === "/AboutMe" ? "active" : ""} href="/AboutMe"><p>About Me</p></Link>
            <Link className={currentPage === "/Projects" ? "active" : ""} href="/Projects"><p>Projects</p></Link>
            <Link className={currentPage === "/Resume" ? "active" : ""} href="/Resume"><p>Resume</p></Link>
            <Link className={currentPage === "/Links" ? "active" : ""} href="/Links"><p>Links</p></Link>
        </div>
    )
}