import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import imglogo from '../../assets/svg/img-logo.svg'
import imglogowhite from '../../assets/svg/logo-white.svg'
import './Navbar.css';
import  { IconClose, IconDown, IconHamburgerMenu} from '../icons/icons';
import AnchorLink from "react-anchor-link-smooth-scroll";
import DarkMode from '../../utils/Dark Mode/darkmode';

export default function Navbar(){
    const[show , setShow] = useState(false)
    const[fix , setFix] = useState(false)
    const [logo ,  setLogo] = useState(false)


    const[drop , setDrop] = useState(false)
    const[pageDrop, setPageDrop] = useState(false)

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


    let dropdown = <div className="dropdown">
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


    let menuDropdown = <div className="menu-dropdown">
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
    let menuDrop = <div className="menu-list">
        <ul>
            <li><AnchorLink href='#features' className="link">Features</AnchorLink></li>
            <li><AnchorLink href='#about'  className="link">About</AnchorLink></li>
            <li><AnchorLink href ="#how" className="link">How it Works</AnchorLink></li>
            <li><AnchorLink href="#contact" className="link">Support</AnchorLink></li>
            <li><button onClick={DropOtherList} className="menu-drop">Pages <IconDown/></button></li>
        </ul>
        <button className="close" onClick={handleDisplay}>
            <IconClose/>
        </button>
        {pageDrop ? menuDropdown : null}
        </div>

    //    function to Open and Close Modal
        function handleDisplay(){
            setDrop((display)=> !display)
        }
        // for menu section page drop
        function DropOtherList(){
            setPageDrop(drop => !drop)
        }

        // for full screen page drop
        function pageDisplay(){
            setShow(show => !show)
        }

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
                            <li><Link to="" onClick={pageDisplay} className="drop link">Pages <IconDown/></Link></li>
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
                        <button className="menu" onClick={handleDisplay}>
                            <IconHamburgerMenu/>
                        </button>
                    </div>
                    {drop ? menuDrop : null}
                    {show ? dropdown: null}
                    
                </div>
            </nav>
            <Outlet/>
        </>
    )
}
