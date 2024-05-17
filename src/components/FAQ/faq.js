import React from 'react'
import './faq.css';



export default function Faq(){
    return(
        <>
            <section className="faq">
                <div className="faq-wrapper">
                    <svg className="top" width="95" height="190" viewBox="0 0 95 190" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="95" cy="95" r="77" stroke="url(#paint0_linear_49_603)" strokeWidth="36"></circle>
<defs>
<linearGradient id="paint0_linear_49_603" x1="0" y1="0" x2="224.623" y2="130.324" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF8FE8"></stop>
<stop offset="1" stopColor="#FFC960"></stop>
</linearGradient>
</defs>
                    </svg>
                    <svg className="bottom" width="95" height="190" viewBox="0 0 95 190" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cy="95" r="77" stroke="url(#paint0_linear_52_83)" strokeWidth="36"></circle>
<defs>
<linearGradient id="paint0_linear_52_83" x1="-117.84" y1="190" x2="117.828" y2="25.9199" gradientUnits="userSpaceOnUse">
<stop stopColor="#8EA5FE"></stop>
<stop offset="0.541667" stopColor="#BEB3FD"></stop>
<stop offset="1" stopColor="#90D1FF"></stop>
</linearGradient>
</defs>
                    </svg>  
                    <div className="faq-header">
                        <h1>Frequently Asked Questions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
                    </div>

                    <div className="faq-section">
                        <div className="faq-list">
                            <div className="question">
                                <input type="checkbox" id='q1' />
                                <label className="header" htmlFor='q1'>Lorem ipsum dolor sit amet, consectetur.
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg> 
                                </label>
                                <hr/>
                                <div className="overlay">
                                    <p>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences. Praesent vel nibh a tellus dictum gravida sed tempor nunc.</p>
                                    <hr/>
                                </div>
                            </div>
                        
                            <div className="question">
                                <input type="checkbox" id='q2' />
                                <label className="header" htmlFor='q2'>Lorem ipsum dolor sit amet, consectetur.
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg> 
                                </label>
                                <hr/>
                                <div className="overlay">
                                    <p>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences. Praesent vel nibh a tellus dictum gravida sed tempor nunc.</p>
                                    <hr/>
                                </div>
                            </div>
                            
                            
                            <div className="question">
                                <input type="checkbox" id='q3' />
                                <label className='header' htmlFor='q3'>Lorem ipsum dolor sit amet, consectetur.
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg> 
                                </label>
                                
                                <div className="overlay">
                                    <hr/>
                                    <p>We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences. Praesent vel nibh a tellus dictum gravida sed tempor nunc.</p>
                                
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
        </>
    )
}
