import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id= 'home'className='hero'>
            <img src={profile_img} alt="Profile" />
            <h1> <span>I'm Bonface Odhiambo,</span> a FullStack Engineer.</h1>
            <p>
                With four years of experience, I have served clients remotely on diverse projects and I'm currently looking for more opportunities.
            </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className= 'anchor-link' offset= {50} href= '#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    );
};

export default Hero;
