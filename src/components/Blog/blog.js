import React from 'react'
import './blog.css';
import blog01 from '../../assets/images/blog-01.jpg'
import blog02 from '../../assets/images/blog-02.jpg'
import blog03 from '../../assets/images/blog-03.jpg'
import { IconCalendar, IconUser } from '../icons/icons';


export default function Blog(){
    return(
        <>
            <section className="blog"> 
                <div className="blog-wrapper">
                    <div className="blog-header">
                        <h1>Latest News & Blogs</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.</p>
                    </div>

                    <div className="blog-section">
                        <div className="blog-list">
                            <div className="blog-card">
                                <img src={blog01} alt="" />

                                <div className="info">
                                    <div className="name">
                                        <IconUser/>
                                        <h4>Musharof Chy</h4>
                                    </div>
                                    <div className="date">
                                        <IconCalendar/>
                                        <h4>19 Mar, 2025</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-text">
                                <h1>Free advertising for your online business</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed felis id tortor.</p>
                            </div>
                        </div>

                        <div className="blog-list">
                            <div className="blog-card">
                                <img src={blog02} alt="" />

                                <div className="info">
                                    <div className="name">
                                        <IconUser/>
                                        <h4>Devid Jhoie</h4>
                                    </div>
                                    <div className="date">
                                        <IconCalendar/>
                                        <h4>25 Feb, 2025</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-text">
                                <h1>Free advertising for your online business</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed felis id tortor.</p>
                            </div>
                        </div>

                        <div className="blog-list">
                            <div className="blog-card">
                                <img src={blog03} alt="" />

                                <div className="info">
                                    <div className="name">
                                        <IconUser/>
                                        <h4>Andro Smith</h4>
                                    </div>
                                    <div className="date">
                                        <IconCalendar/>
                                        <h4>05 Jan, 2025</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-text">
                                <h1>Free advertising for your online business</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed felis id tortor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}