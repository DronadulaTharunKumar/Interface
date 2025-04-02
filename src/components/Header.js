import React from "react";
import "./Header.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <section className="header">
      <div className="container text-center">
        
        {/* Animated Heading */}
        <h1 className="main-heading animate-heading">
          PROJECT BASED <span className="highlights">LEARNING</span> PLATFORM
        </h1>

        {/* Middle Section */}
        <div className="row align-items-center justify-content-center mt-4">
          
          {/* Left Side - Developer Image */}
          <div className="col-md-4 text-center">
            <img 
              src="https://i.postimg.cc/8zsyJ37g/1.png" 
              alt="Developer working" 
              className="img-fluid rounded animate-bounce"
            />
          </div>

          {/* Middle - Welcome to Trivya with Glow Effect */}
          <div className="col-md-4 text-center">
            <div className="welcome-text animate-fade">
              WELCOME TO{" "}
              <span className="trivya-logo animate-glow">TRIVYA</span>
            </div>
            <h2 className="sub-heading animate-fade">
              A REVOLUTIONARY STEP TOWARD <br/> BETTER FUTURE
            </h2>
          </div>

        </div>

        {/* Buttons + Right-Side Image */}
        <div className="row mt-4 align-items-center justify-content-center">
          
          {/* Buttons */}
          <div className="col-md-4 text-center">
            <button className="btn explore-btn animate-hover">EXPLORE COURSES</button>
            <button className="btn enroll-btn animate-hover">ENROLL NOW</button>
          </div>

          {/* Right Side - Learning Image */}
          <div className="col-md-4 text-center">
            <img 
              src="https://i.postimg.cc/0QMPhHHG/2.png" 
              alt="Learning Illustration" 
              className="img-fluid rounded animate-slide"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
