import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>&copy;EGADesign. All rights reserved.</div>
            <div>
                <Image src="/1.png" width={15} height={15} alt='EGADesign Facebook' />
                <Image src="/2.png" width={15} height={15} alt='EGADesign Instagran' />
                <Image src="/3.png" width={15} height={15} alt='EGADesign Twuitter' />
                <Image src="/4.png" width={15} height={15} alt='EGADesign Youtube' />
            </div>
        </div>
    )
}

export default Footer
