import React from 'react'
import './How.css';
import  { IconBxDownload,IconBxUserCircle,IconHeartHandshake } from '../icons/icons';



export default function How(){
    return(
        <>
            <section className="how-wrapper" id='how'>
                <svg className="backg" width="632" height="1179" viewBox="0 0 632 1179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.25" filter="url(#filter0_f_38_24)">
                        <circle cx="42.5" cy="589.5" r="329.5" fill="url(#paint0_linear_38_24)"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_38_24" x="-547" y="0" width="1179" height="1179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur_38_24"></feGaussianBlur>
                        </filter>
                        <linearGradient id="paint0_linear_38_24" x1="-366.218" y1="919" x2="451.176" y2="349.901" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8EA5FE"></stop>
                            <stop offset="0.541667" stopColor="#BEB3FD"></stop>
                            <stop offset="1" stopColor="#90D1FF"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                
                <div className="how-header">
                    <h1>How it Works?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
                </div>
                <div className="how-section">
                    
                    <div className="features">
                        <div className="how-logo">
                            <IconBxDownload/>
                        </div>
                        <h2>Install the App</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                    <div className="features">
                        <div className="how-logo">
                            <IconBxUserCircle/>
                        </div>
                        <h2>Setup your profile</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                    <div className="features">
                        <div className="how-logo">
                            <IconHeartHandshake/>
                        </div>
                        <h2>Enjoy the features!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
