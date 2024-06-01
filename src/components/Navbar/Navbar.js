import React, { useEffect, useState } from 'react' // import state management
import { Outlet, Link } from "react-router-dom"; // import router for page routing
import imglogo from '../../assets/svg/img-logo.svg' // import black logo
import imglogowhite from '../../assets/svg/logo-white.svg' //import white logo
import './Navbar.css';   // import CSS code
import  { IconClose, IconDown, IconHamburgerMenu} from '../icons/icons'; //import icons from icons file
import AnchorLink from "react-anchor-link-smooth-scroll"; //import AnchorLink for in page navigation
import DarkMode from '../../utils/Dark Mode/darkmode'; //import Darkmode component

export default function Navbar(){
    const[fix , setFix] = useState(false)  //state to handle sticky navbar
    const [logo ,  setLogo] = useState(false) // state to handle dynamic logo
    const[display , setDisplay] = useState(false) // state to handle menu bar display list
    const[pageDrop, setPageDrop] = useState(false) // state to handle page dropdown list

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

    //code for desktop dropdown
    let dropdown =
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

    //code for menubar DropdownList
    let menuDropdown = 
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

    //code for menubar drop list
    let menuDrop = 
    <div className="menu-list">
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

    //function to Open and Close Modal
    function handleDisplay(){
        setDisplay((display)=> !display)
    }
    // for dropdown list drop
    function DropOtherList(){
        setPageDrop(drop => !drop)
    }

    // to check the theme and chnage the appline logo accordingly
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
        window.addEventListener("load" , CheckBodyColor)
        window.addEventListener("change" , CheckBodyColor)
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
                            <li><Link to="" onClick={DropOtherList} className="drop link">Pages <IconDown/></Link></li>
                        </ul>
                    </div>
                    
                    <div className='sign'>
                        <DarkMode/> {/*  import dark mode component */}

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
                    {display ? menuDrop : null} {/* conditionally render hamburger menu drop list */}
                    {pageDrop ? dropdown: null} {/* conditionally render page dropdown */}
                    
                </div>
            </nav>
            <Outlet/>
        </>
    )
}


