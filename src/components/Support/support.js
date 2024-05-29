import React from 'react'
import './support.css';

export default function Support(){
    return(
        <section className="section" id='contact'>
            <div className="contact-wrapper">
                <div className="contact-header">
                    <h1>Let's Stay Connected</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
                </div>
                <div className="form-wrapper">
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder='Enter your name'/>
                            <input type="text" placeholder='Company (optional)'/>
                            <input type="email" placeholder='Enter your email'/>
                            <input type="telephone" placeholder='Enter your phone number'/>
                            <textarea cols="20" rows="6" placeholder='Tell us about yourself '></textarea>
                        </form>

                        <div className="contact-footer">
                            <p>By clicking contact us button, you agree our terms and policy,</p>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
