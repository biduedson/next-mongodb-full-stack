"use client" /*quando precisar de interatividade do cliente use "use client" 
para renderizar a pagina do lado clientte*/

import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    },
]

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link href='/' className={styles.logo}>EGADesign</Link>
            <div className={styles.links}>
                {
                    links.map(({ id, title, url }) => (
                        <Link key={id} href={url} className={styles.link}>{title}</Link>
                    ))
                }
                <button className={styles.logout}
                    onClick={() => {
                        console.log('logged out')
                    }}
                >Logout
                </button>
            </div>
        </div>
    )
}

export default NavBar
