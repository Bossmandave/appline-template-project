import { IconMoonStarsFill, IconSun } from '../../components/icons/icons'
import "./darkmode.css"





export default function DarkMode({Dmode, setDmode}){
    const setDarkMode = ()=>{
            document.querySelector("body").setAttribute('data-theme' , "dark");
            localStorage.setItem("selectedTheme" , "dark")
    }

    const setLightMode = ()=>{
        document.querySelector("body").setAttribute('data-theme' , "light");
        localStorage.setItem("selectedTheme" , "light")
    }
    
    const selectedTheme = localStorage.getItem("selectedTheme")
  
    if(selectedTheme === "dark"){
        setDarkMode()
    }
    const toggleTheme = (e) =>{
        if(e.target.checked){
            setDarkMode();
            setDmode(true)                      
        }
        else{
            setLightMode()
            setDmode(false)
        }

        
        
    }
    const showStyle ={
        display: "block",
    }
    const hideStyle ={
        display: "none"
    }


    return(
        <>
            <div className='mode'>
                
                <input
                type="checkbox"
                id='dark_mode'
                onChange={toggleTheme} 
                defaultChecked={selectedTheme === "dark"}/>
                <label htmlFor='dark_mode'>
                    <div style={Dmode ? hideStyle:showStyle}><IconSun/></div>
                    <div style={Dmode ? showStyle:hideStyle}><IconMoonStarsFill/></div>
                </label>
            </div>
        </>
    )
}

