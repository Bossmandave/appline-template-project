import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import imglogo from '../../assets/svg/img-logo.svg'
import imglogowhite from '../../assets/svg/logo-white.svg'
import './Navbar.css';
import  { IconClose, IconDown, IconHamburgerMenu} from '../icons/icons';
import AnchorLink from "react-anchor-link-smooth-scroll";
import DarkMode from '../../utils/Dark Mode/darkmode';

export default function Navbar(){
    const[show , setShow] = useState(true);
    const[fix , setFix] = useState(false)
    const [logo ,  setLogo] = useState(false)

    //xxxxxxxxxxxxxxxx Sticky Navbar code
    function setFixed(){
        if(window.scrollY >= 90){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    window.addEventListener("scroll" , setFixed)
    // zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

    //  ***********Code for Logo
   
    // **************************

    useEffect(()=>{

        function CheckBodyColor(){
            const selectedTheme = localStorage.getItem("selectedTheme")
      
            if(selectedTheme === "dark"){
                setLogo(true)
            }
            else if(selectedTheme === "light"){
                setLogo(false)
            }
        }
        window.addEventListener("change" , CheckBodyColor)
        window.addEventListener("load" , CheckBodyColor)
        window.addEventListener("click" , CheckBodyColor)
        //********** Dropdown code
        const dropdown = document.querySelector(".dropdown");
        const drop = document.querySelector(".drop");
        
        function CheckDisplay(e){
            e.preventDefault();
            if(show){
                dropdown.style.display = "block";
                setShow(false)
            }
            else{
                dropdown.style.display = "none";
                setShow(true)
            }
        }
        drop.addEventListener('click', CheckDisplay)
        // ****************************

        //******** Hamburger Dropdown
        const menuDropdown = document.querySelector(".menu-dropdown");
        const menuDrop = document.querySelector(".menu-drop");
    
        function DropPanel(e){
            e.preventDefault();
            if(show){
                menuDropdown.style.display = "block";
                setShow(false)
            }
            else{
                menuDropdown.style.display = "none";
                setShow(true)
            }
        }
        menuDrop.addEventListener('click', DropPanel)
        // ******************************

        // ************** Open Modal
        const menuList = document.querySelector(".menu-list"); 
        const menuButton = document.querySelector(".menu")
        const OpenModal =()=>{
            if(menuList.style.right === "-300px"){
                menuList.style.right ="0px"
                menuList.style.display ="block"
            }
           else{
            menuList.style.right = "-300px"
            menuList.style.display ="none"
           }   
        }
        menuButton.addEventListener('click', OpenModal)
        //xxxxxxxxxxxxx zzzzzzzzzzzzzzzzzzzz


        //xxxxxxxxxxxxxxxx Close Modal
        const closeButton = document.querySelector(".close")
        const CloseModal =()=>{
            if(menuList.style.right === "0px"){
                menuList.style.right ="-300px"
            }
           else{
            menuList.style.right = "-300px"
            menuList.style.display ="none"
           }     
        }
        closeButton.addEventListener('click', CloseModal)
        // xxxxxxxxxxxxxxxxxxxxxxxxxxxx
        
    },)
    return(
        <>  
            <nav className={fix ? "fixed": ""}>
                <div className ="nav-wrapper">
                    <div className="logo">
                        <Link to="/"><img src={logo ? imglogowhite : imglogo} className="nav-logo" alt="logo" /></Link>
                    </div>
                    <div className='nav-links'>
                        <ul>
                            <li><AnchorLink href='#features' className="link">Features</AnchorLink></li>
                            <li><AnchorLink href='#about'  className="link">About</AnchorLink></li>
                            <li><AnchorLink href ="#how" className="link">How it Works</AnchorLink></li>
                            <li><AnchorLink href="#contact" className="link">Support</AnchorLink></li>
                            <li><Link to="" className="drop link">Pages <IconDown/></Link></li>
                        </ul>
                        
                    </div>

                    

                    <div className='sign'>

                        {/* import dark mode */}
                        <DarkMode/>
                        {/* ************ */}

                        <div className='sign-in'>
                            <Link to="/signin" className="link">Sign In</Link>                      
                        </div>
                        <div className='sign-up'>
                            <Link to="/signup" className="link"><button className='btn btn1'>Sign Up</button></Link>                  
                        </div>
                        <button className="menu">
                            <IconHamburgerMenu/>
                        </button>
                    </div>

                    <div className="menu-list">
                        <ul>
                            <li><AnchorLink href='#features' className="link">Features</AnchorLink></li>
                            <li><AnchorLink href='#about'  className="link">About</AnchorLink></li>
                            <li><AnchorLink href ="#how" className="link">How it Works</AnchorLink></li>
                            <li><AnchorLink href="#contact" className="link">Support</AnchorLink></li>
                            <li><Link to="" className="menu-drop link">Pages <IconDown/></Link></li>
                        </ul>
                        <button className="close">
                            <IconClose/>
                        </button>
                        <div className="menu-dropdown">
                            <div className="items">
                                <Link to="" className="link">Blog Grids</Link>
                            </div>
                            <div className="items">
                                <Link to="" className="link">Blog Details</Link>
                            </div>
                            <div className="items">
                                <Link to="/error404" className="link">404 Error</Link>
                            </div>
                            <div className="items">
                                <Link to="/signin" className="link">Sign In</Link>
                            </div>
                            <div className="items">
                                <Link to="/signup" className="link">Sign Up</Link>
                            </div>

                        </div>
                    </div>

                    <div className="dropdown">
                        <div className="items">
                            <Link to="" className="link">Blog Grids</Link>
                        </div>
                        <div className="items">
                            <Link to="" className="link">Blog Details</Link>
                        </div>
                        <div className="items">
                            <Link to="/error404" className="link">404 Error</Link>
                        </div>
                        <div className="items">
                            <Link to="/signin" className="link">Sign In</Link>
                        </div>
                        <div className="items">
                            <Link to="/signup" className="link">Sign Up</Link>
                        </div>

                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}
