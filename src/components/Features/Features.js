import React from 'react'
import './Features.css';
import  { IconBrandAppstore, IconBxAbacus, IconGauge, IconRecycleFill, IconStack, IconWindowSection } from '../icons/icons';



export default function Features(){
    return(
        <>
            <section className="feat-wrapper" id='features'>
                <svg className="backg" width="622" height="1236" viewBox="0 0 622 1236" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2" filter="url(#filter0_f_26_85)">
                        <circle cx="4" cy="618" r="368" fill="url(#paint0_linear_26_85)"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_26_85" x="-614" y="0" width="1236" height="1236" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_26_85"></feGaussianBlur>
                        </filter>
                        <linearGradient id="paint0_linear_26_85" x1="-364" y1="250" x2="506.12" y2="754.835" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF8FE8"></stop>
                            <stop offset="1" stopColor="#FFC960"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                
                <div className="feat-header">
                    <h1>Amazing features for to make your work easier</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
                </div>
                <div className="feat-section">
                    
                    <div className="features">
                        <div className="feat-logo">
                            <IconBrandAppstore/>
                        </div>
                        <h2>Crafted for App Landing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                    <div className="features">
                        <div className="feat-logo">
                            <IconStack/>
                        </div>
                        <h2>High-quality Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                    <div className="features">
                        <div className="feat-logo">
                            <IconWindowSection/>
                        </div>
                        <h2>All Essential Sections</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                    <div className="features">
                        <div className="feat-logo">
                            <IconGauge/>
                        </div>
                        <h2>Speed Optimized</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                    <div className="features">
                        <div className="feat-logo">
                           <IconBxAbacus/> 
                        </div>
                        <h2>Fully Customizable</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                    <div className="features">
                        <div className="feat-logo">
                            <IconRecycleFill/>
                        </div>
                        <h2>Regular Updates</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                </div>
            </section>
        </>
    )
}