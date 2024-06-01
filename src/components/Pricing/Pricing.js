import React, {useState } from 'react'
import './Pricing.css';



export default function Pricing(){
    const[price1, setPrice1] = useState(true)
    const[price2, setPrice2] = useState(true)
    const[price3, setPrice3] = useState(true)
    const [time , setTime] = useState(true)

    function handlePlan(){
        setTime((time) => !time )
        setPrice1((price) => !price )
        setPrice2((price) => !price )
        setPrice3((price) => !price )
    }
    
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
                        <input type="checkbox" id="check" onClick={handlePlan}/>
                        <span className="slider"></span>
                    </label>
                    <h4>Annually</h4>
                </div>
                <div className="pricing-section">
                    <div className="price-card">
                        <h2>Free</h2>
                        <p>Lorem Ipsum is simply dummythe.</p>
                        <p className="one"><span>{price1 ? "$0" : "$0"}</span> {time? "/month" : "/year"}</p>
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
                        <p className="two"><span>{price2 ? "$50" : "$149"}</span> {time? "/month" : "/year"}</p>
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
                        <p className="three"><span>{price3 ? "$90" : "$230"}</span> {time? "/month" : "/year"}</p>
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