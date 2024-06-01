import React, { useState } from 'react'
import imglogowhite from '../../assets/svg/logo-white.svg'
import imglogo from '../../assets/svg/img-logo.svg'
import './footer.css';
import { IconBehance, IconBxlLinkedin, IconFacebook, IconTwitter } from '../icons/icons';



export default function Footer(){
    const [logo ,  setLogo] = useState(false)

     //  ***********Code for Logo
     function CheckBodyColor(){
        const selectedTheme = localStorage.getItem("selectedTheme")
  
        if(selectedTheme === "dark"){
            setLogo(true)
        }
        else if(selectedTheme === "light"){
            setLogo(false)
        }
    }
    window.addEventListener("load" , CheckBodyColor)
    window.addEventListener("change" , CheckBodyColor)
    window.addEventListener("click" , CheckBodyColor)
    return(
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <img src={logo ? imglogowhite: imglogo} alt="" />
                    <p>This membership will help you plan and execute a variety of projects.</p>
                </div>
                <div className="footer-right">
                    <div className="ft-home">
                        <h2>Home</h2>
                        <p>Product</p>
                        <p>Pricing</p>
                        <p>Business</p>
                        <p>Enterprise</p>
                    </div>

                    <div className="ft-about">
                        <h2>About Us</h2>
                        <p>Company</p>
                        <p>Leadership</p>
                        <p>Careers</p>
                        <p>Diversity</p>
                    </div>

                    <div className="ft-resources">
                        <h2>Resources</h2>
                        <p>Andy Guide</p>
                        <p>Forum</p>
                        <p>Support</p>
                        <p>App Directory</p>
                    </div>

                    <div className="ft-tutorial">
                        <h2>Tutorial</h2>
                        <p>10 Leadership Styles</p>
                        <p>Executive Summary Tips</p>
                        <p>Prevent Team Burnout</p>
                        <p>What are OKRs</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Appline. All rights reserved</p>

                <div className="footer-links">
                    <IconFacebook/>
                    <IconTwitter/>
                    <IconBxlLinkedin/>
                    <IconBehance/>
                </div>
                <div className="policy">
                    <p>Privacy Policy</p>
                    <p>Terms and conditions</p>
                </div>
            </div>
        </footer>
    )
}