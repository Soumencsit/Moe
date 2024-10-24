import React, { useState } from 'react';
import { ArrowRightCircle, Sun, Battery, LineChart } from 'lucide-react';
import './Home.css';
import img from '../../assets/Logo.png'
import TextEffect from './TextEffect';
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Home = () => {

    const [isActive, setIsActive]=useState(true)



  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo"><img src={img}/></div>
        <div className="nav-links">
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">Benefits</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
        { 
            isActive ? (
                <div className='nav-links-icon' onClick={()=>{setIsActive(false)}}>
                <FiAlignJustify size={30} />
                </div>
            ) : (

                <div className='nav-links-smallScreen'>
                <FiX  className='nav-links-icon-cross'  size={30} onClick={()=>{setIsActive(true)}}/>
                <div className="nav-links-smallScreen-link">
                <a href="#" className="nav-link">Products</a>
                <a href="#" className="nav-link">Benefits</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Contact</a>
                </div>
                </div>
            )
        }

       
      </nav>

      {/* Hero Section */}
      <div className="container">
        <div className="hero">
          <div className="hero-grid">
            {/* Left Column - Text Content */}
            <div className="hero-content animate-fade-in">
              <h1 className="hero-title">MoeCell - Das modulare Balkonkraftwerk</h1>
              <TextEffect/>
              <p className="hero-description">
                Transform your balcony into a sustainable power station. 
                Efficient, elegant, and eco-friendly energy solutions for urban living.
              </p>
              <div className="button-group">
                <button className="button-primary">
                  <span>Get Started</span>
                  <ArrowRightCircle size={20} />
                </button>
                <button className="button-secondary">Learn More</button>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="features-grid">
              <div className="feature-card">
                <Sun className="feature-icon primary" />
                <h3 className="feature-title">Solar Power</h3>
                <p className="feature-description">Harness clean solar energy from your balcony</p>
              </div>
              <div className="feature-card">
                <Battery className="feature-icon secondary" />
                <h3 className="feature-title">Energy Storage</h3>
                <p className="feature-description">Efficient storage solutions for 24/7 power</p>
              </div>
              <div className="feature-card">
                <LineChart className="feature-icon secondary" />
                <h3 className="feature-title">Smart Monitoring</h3>
                <p className="feature-description">Track your energy production in real-time</p>
              </div>
              <div className="feature-card">
                <ArrowRightCircle className="feature-icon primary" />
                <h3 className="feature-title">Easy Setup</h3>
                <p className="feature-description">Quick installation with minimal hassle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;