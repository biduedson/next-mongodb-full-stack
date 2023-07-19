"use client" /*quando precisar de interatividade do cliente use "use client" 
para renderizar a pagina do lado clientte*/

import React from 'react'
import Link from 'next/link'

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
        <div>
            <Link href='/'>lamamia</Link>
            <div>
                {
                    links.map(({ id, title, url }) => (
                        <Link key={id} href={url}>{title}</Link>
                    ))
                }
                <button onClick={() => { console.log('logged out') }}>Logout</button>
            </div>
        </div>
    )
}

export default NavBar
