import React from 'react'
import styles from './Footer.module.css'
import { GrInstagram } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { TbMail } from 'react-icons/tb'
import { HiOutlineInformationCircle } from 'react-icons/hi'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.details}>
                <h2 className={styles.footer_name}>Mario Cristales</h2>
                <div className={styles.details_grid}>
                    <div className={styles.detail}>
                        <a className={styles.link} href='https://www.instagram.com/mariocr_c/' target='_blank'>
                            <GrInstagram />
                            <p className={styles.footer_p}>Instagram</p>
                        </a>
                    </div>
                    <div className={styles.detail}>
                        <a className={styles.link} href='https://twitter.com/sr_slyy' target='_blank'>
                            <BsTwitter />
                            <p className={styles.footer_p}>Twitter</p>
                        </a>
                    </div>
                    <div className={styles.detail}>
                        <a className={styles.link} href='/about'>
                            <HiOutlineInformationCircle />
                            <p className={styles.footer_p}>About Me</p>
                        </a>
                    </div>
                    <div className={styles.detail}>
                        <a className={styles.link} href='/contact'>
                            <TbMail />
                            <p className={styles.footer_p}>Contact</p>
                        </a>
                    </div>
                </div>
                <p className={styles.footer_p}>© 2023 Mario Cristales. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer