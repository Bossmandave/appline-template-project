import React, { useEffect } from 'react'
import './Pricing.css';



export default function Pricing(){

    useEffect(()=>{
        let switchs = document.querySelector(".switch")
        switchs.addEventListener("click", ()=>{
        let price1 = document.querySelector(".one");
        let price2 = document.querySelector(" .two");
        let price3 = document.querySelector(" .three");
        let slider = document.querySelector(".slider");
        let slidercolor = window.getComputedStyle(slider , '::before')
        
        if(slidercolor.left === "4px"){
            slider.style.setProperty("--left", "23px")
            price1.innerHTML="<span>$0</span>/per year"
            price2.innerHTML="<span>$408</span>/per year"
            price3.innerHTML="<span>$568</span>/per year"
        }
        else{
            slider.style.setProperty("--left", "4px")
            price1.innerHTML="<span>$0</span>/per month"
            price2.innerHTML="<span>$35</span>/per month"
            price3.innerHTML="<span>$59</span>/per month"
        }
    })

    })
    
    return(
        <>
            <section className="pricing-wrapper">
                <div className="pricing-header">
                    <h1>Choose Your Plan</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>

                </div>
                <div className="toggle">
                    <h4>Monthly</h4>
                    
                    <label htmlFor="check" className="switch">
                        <input type="checkbox" id="check"/>
                        <span className="slider"></span>
                    </label>
                    <h4>Annually</h4>
                </div>
                <div className="pricing-section">
                    <div className="price-card">
                        <h2>Free</h2>
                        <p>Lorem Ipsum is simply dummythe.</p>
                        <p className="one"><span>$0</span> /month</p>
                        <hr/>
                        <h3>✔️ 60-day chat history</h3>
                        <h3>✔️ 15 GB cloud storage</h3>
                        <h3>✔️ 24/7 Support</h3>
                        <h3>✔️ Custom Branding Strategy</h3>                   
                        <button className="black">Choose Plan</button>
                    </div>

                    <div className="price-card">
                        <h4>Most Popular</h4>
                        <h2>Unlimited</h2>
                        <p>Lorem Ipsum is simply dummythe.</p>
                        <p className="two"><span>$35</span> /month</p>
                        <hr/>
                        <h3>✔️ 60-day chat history</h3>
                        <h3>✔️ 15 GB cloud storage</h3>
                        <h3>✔️ 24/7 Support</h3>
                        <h3>✔️ Custom Branding Strategy</h3>                   
                        <button className="blue">Choose Plan</button>
                    </div>

                    <div className="price-card">
                        <h2>Business</h2>
                        <p>Lorem Ipsum is simply dummythe.</p>
                        <p className="three"><span>$59</span> /month</p>
                        <hr/>
                        <h3>✔️ 60-day chat history</h3>
                        <h3>✔️ 15 GB cloud storage</h3>
                        <h3>✔️ 24/7 Support</h3>
                        <h3>✔️ Custom Branding Strategy</h3>                   
                        <button className="black">Choose Plan</button>
                    </div>
                </div>
            </section>

        </>
    )
}