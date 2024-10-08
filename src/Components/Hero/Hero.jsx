import React from 'react'
import './Hero.css'
import photo from './../../assets/my_photo.jpg';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

const Hero = () => {
  // useGSAP(()=>{
  //   gsap.to("#position",{

  //   })
  // })
  return (
    <div className='hero'>
      <div className="left-hero">
        <p id='position'>Frontend Developer</p>
        <h1>Hello I'm Sarthak Mittal.</h1>
        <div className='text'>Where Design Meets Development to Create Exceptional Web Solutions Tailored to Your Needs.</div>
        <div className="space"></div>
        <div className="social-links">
        <div className="social-link">
          <a target='_blank' href="https://www.linkedin.com/in/sarthak-mittal-/">Linkedin</a>
        </div>
        <div className="social-link">
          <a target='_blank' href="https://github.com/iam-sarthak">Github</a>
        </div>
        <div className="social-link">
          <a target='_blank' href="https://twitter.com/sarmittal">X</a>
        </div>
        <div className="social-link">
          <a target='_blank' href="https://dev.to/sarmittal">Dev.to</a>
        </div>
      </div>
      </div>
      <div className="right-hero">
        <img src= {photo} alt="" />
      </div>
    </div>
  )
}

export default Hero