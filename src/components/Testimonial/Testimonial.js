import React from 'react'
import './Testimonial.css';
import userimg1 from '../../assets/images/author-1.png'
import userimg2 from '../../assets/images/author-2.png'
import userimg3 from '../../assets/images/author-3.png'
import userimg4 from '../../assets/images/author-04.png'


export default function Testimonial(){
    return(
        <>
            <section className="testimonial">
                <div className="testimonial-wrapper">
                    <div className="testimonial-header">
                        <h1>What Client's Say</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
                    </div>
                    <div className="testimonial-section">
                        <div className="testimonial-card">
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
                            <hr/>
                            <div className="userinfo">
                                <div className="user">
                                    <img src={userimg1} alt="" />
                                    <div className="user-detail">
                                        <h3>Musharof Chowdhury</h3>
                                        <h4>Web Entrepreneur</h4>
                                    </div>
                                </div>
                                <div className="user-rating">
                                    <h3>5.0 ⭐⭐⭐⭐⭐</h3>
                                </div>
                                                            
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
                            <hr/>
                            <div className="userinfo">
                                <div className="user">
                                    <img src={userimg2} alt="" />
                                    <div className="user-detail">
                                        <h3>Naimur Rahman</h3>
                                        <h4>Product Designer</h4>
                                    </div>
                                </div>
                                <div className="user-rating">
                                    <h3>5.0 ⭐⭐⭐⭐⭐</h3>
                                </div>
                                                            
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
                            <hr/>
                            <div className="userinfo">
                                <div className="user">
                                    <img src={userimg3} alt="" />
                                    <div className="user-detail">
                                        <h3>Devid Miller</h3>
                                        <h4>App Developer</h4>
                                    </div>
                                </div>
                                <div className="user-rating">
                                    <h3>5.0 ⭐⭐⭐⭐⭐</h3>
                                </div>
                                                            
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
                            <hr/>
                            <div className="userinfo">
                                <div className="user">
                                    <img src={userimg4} alt="" />
                                    <div className="user-detail">
                                        <h3>Justin Farnandes</h3>
                                        <h4>Seo Expert</h4>
                                    </div>
                                </div>
                                <div className="user-rating">
                                    <h3>5.0 ⭐⭐⭐⭐⭐</h3>
                                </div>
                                                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}