import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

export function Dropdown(){
    const[show , setShow] = useState(true);
    const dropdown = document.querySelector(".dropdown");
    const drop = document.querySelector(".drop");
    // dropdown.style.display = "none";

    function CheckDisplay(){
        if(show){
            dropdown.style.display = "block";
        }
        else{
            setShow(false)
            dropdown.style.display = "none";
        }
    }
    drop.onClick = ()=>{
         CheckDisplay();
    }
}