import React from 'react'
import './Screens.css';
import screenimg1 from '../../assets/images/screen-3-light.png'
import screenimg3 from '../../assets/images/screen-2-light.png'
import screenimg2 from '../../assets/images/screen-1-light.png'
import screenframe from '../../assets/images/mobile-frame.png'

export default function Screens(){
    return(
        <>  
            <section className="screen-wrapper">
                <svg className="top" width="95" height="190" viewBox="0 0 95 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cy="95" r="77" stroke="url(#paint0_linear_47_26)" strokeWidth="36"></circle>
                    <defs>
                        <linearGradient id="paint0_linear_47_26" x1="-117.84" y1="190" x2="117.828" y2="25.9199" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8EA5FE"></stop>
                            <stop offset="0.541667" stopColor="#BEB3FD"></stop>
                            <stop offset="1" stopColor="#90D1FF"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <div className="screen-header">
                    <h1>App Screenshots</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
                </div>
                <div className="screen-section">
                    <div className="screens one">
                        <img src={screenimg1} alt="" />
                    </div>
                    <div className="screens two">
                        <img src={screenimg2} alt="" />
                        <img className="frame" src={screenframe} alt="" />
                    </div>
                    <div className="screens three">
                        <img src={screenimg3} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}