import React from 'react'
import heroimage from '../../assets/images/hero-light.png'
import './hero.css';
import { IconPlayCircle , IconApple} from '../icons/icons';

export default function HeroSection(){
    return(
        <section className="hero">
            <div className="hero-note-wrapper">
                <div className="hero-note">
                    <h3>Ready to Use Tailwind CSS Web Template.</h3>
                    <h1>Tailwind Template for <span>App & Software</span> Site.</h1>
                    <p>All in one Tailwind CSS site template for - App and Software sites Comes with all essential components.</p>
                    <div className="hero-links">
                        <div className="download">
                            <a href="/">Download Now <IconApple/></a>
                        </div>
                        <a href='/' className="hero-video">
                            <div className="video-icon">
                                <IconPlayCircle/>
                            </div>
                            <div className="side">
                                <h5>Watch Demo</h5>
                                <h4>See how it works</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                    <img src={heroimage} alt="heroimage" />
                    <div className="round"></div>
            </div>
        </section>
    )
}