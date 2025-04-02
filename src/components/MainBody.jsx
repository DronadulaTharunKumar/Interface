import React, { useState } from "react";
import "./MainBody.css";

const HeroSection = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const faqs = [
    { question: "What courses does Trivya offer?", answer: "Trivya offers project-based courses in Web Development, Data Science, Cybersecurity, and more." },
    { question: "How does the online learning platform work?", answer: "You apply, get sorted into teams, and work on real-world projects guided by mentors." },
    { question: "Are Trivya certificates recognized by employers?", answer: "Yes, our certificates are issued by recognized institutions and industry leaders." },
    { question: "What kind of support does Trivya provide to students?", answer: "Mentorship, career guidance, and networking opportunities with professionals." }
  ];

  return (
    <div className="hero-container">
        {/* Many Students Achieved Their Goals */}
<section className="achievements-section">
  {/* Blue Background Heading */}
  <div className="achievements-heading text-center py-4 animate-heading">
    <h2 className="text-white fw-bold">MANY STUDENTS ACHIEVED THEIR GOALS WITH US</h2>
  </div>

  {/* White Background Image Section */}
  <div className="achievements-image container py-5 d-flex justify-content-center">
    <img 
      src="https://i.postimg.cc/hjDSwNs5/3.png" 
      alt="Student Achievements" 
      className="img-fluid rounded shadow-lg animate-image"
    />
  </div>
</section>

  {/* Discover the Best Version of Yourself */}
  <section className="hero-section">
  <div className="hero-content">
    {/* Left Side: Hero Text */}
    <div className="hero-text">
      <h1>DISCOVER THE BEST VERSION OF YOURSELF</h1>
    </div>

    {/* Right Side: Hero Highlights */}
    <div className="hero-highlights">
      <div className="highlight">
        <img
          src="https://i.postimg.cc/Y0F7q2Tn/4.png"
          alt="Industry Ready Skills"
          className="hero-icon"
        />
        <p><strong>INDUSTRY-READY SKILLS</strong><br/>Get practical experience through real-world projects.</p>
      </div>
      <div className="highlight">
        <img
          src="https://i.postimg.cc/kGgSkZZg/5.png"
          alt="Expert Instructors"
          className="hero-icon"
        />
        <p><strong>EXPERT INSTRUCTORS</strong><br/>Gain insights from experienced professionals.</p>
      </div>
    </div>
  </div>
</section>



      {/* Become the Top 1% */}

    <section className="top-1-section">
      <h2>BECOME THE TOP 1%</h2>
      <div className="top-1-grid">
        <div className="top-1-item blue">
          <img src="https://i.postimg.cc/J0S20bjZ/6.png" alt="STRUCTURED, PROJECT BASED CURRICULUM" />
          <p>STRUCTURED, PROJECT BASED CURRICULUM</p>
        </div>
        <div className="top-1-item blue">
          <img src="https://i.postimg.cc/vBTpq8zq/7.png" alt="Mentorship" />
          <p>REGULAR 1:1 MENTORSHIP</p>
        </div>
        <div className="top-1-item yellow">
          <img src="https://i.postimg.cc/wjHDY0rJ/8.png" alt="Group Projects" />
          <p>GROUP DRIVEN PROJECT SOLVING</p>
        </div>
        <div className="top-1-item yellow">
          <img src="https://i.postimg.cc/MpqMcXqj/9.png" alt="Certifications" />
          <p>CERTIFICATIONS & REWARDS</p>
        </div>
      </div>
    </section>



      {/* Featured Courses */}
      <section className="courses-section">
  <h3 className="featured-badge">FEATURED COURSES</h3>
  <h2>EXPLORE OUR HANDPICKED COURSES CRAFTED TO ENHANCE YOUR GROWTH.</h2>
  <div className="courses-grid">
    <div className="course-card">
      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Digital_Marketing_Job_Description.jpg" alt="Data Science" />
      <h3>Data Science</h3>
      <p>Dive into data analysis, visualization, and machine learning.</p>
      <span>⭐ 4.8 | 🕒 6 Months | 👥 1,500+</span>
      <button>Enroll Now</button>
    </div>
    <div className="course-card">
      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Digital_Marketing_Job_Description.jpg" alt="Digital Marketing" />
      <h3>Digital Marketing</h3>
      <p>Master marketing strategies, SEO, and analytics tools.</p>
      <span>⭐ 4.9 | 🕒 6 Months | 👥 2,300+</span>
      <button>Enroll Now</button>
    </div>
    <div className="course-card">
      <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Digital_Marketing_Job_Description.jpg" alt="Cyber Security" />
      <h3>Cyber Security</h3>
      <p>Learn to protect systems, networks, and programs.</p>
      <span>⭐ 4.7 | 🕒 6 Months | 👥 1,800+</span>
      <button>Enroll Now</button>
    </div>
  </div>
</section>





      {/* Hear from Students & Professionals */}
      <section className="section">
        <h2>HEAR FROM STUDENTS & PROFESSIONALS</h2>
        <div className="testimonials-grid">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="testimonial-card">
              <h3>Transformative Learning Experience</h3>
              <p>
                The project-based learning approach on this platform is unmatched. I feel more equipped for real-world projects, and my problem-solving skills have improved.
              </p>
              <strong>KRISHNA</strong>
              <span>DEVELOPER</span>
              <div className="testimonial-footer">
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Certifications */}
      <section className="section">
  <h2>Our Certifications</h2>
  <div className="certifications-container">
    {/* AICTE Certification */}
    <div className="cert-card">
      <img src="https://i.postimg.cc/3JkqVj63/14.png" alt="AICTE Logo"/>
      <strong>AICTE</strong>
      <p>All India Council for Technical Education.</p>
      <span className="certified-badge">Certified ✅</span>
    </div>

    {/* MSME Certification */}
    <div className="cert-card">
      <img src="https://i.postimg.cc/wvct6sGv/15.png" alt="MSME Logo"/>
      <strong>MSME</strong>
      <p>Micro, Small & Medium Enterprises.</p>
      <span className="certified-badge">Certified ✅</span>
    </div>

    {/* ISO Certification */}
    <div className="cert-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/ISO_9001-2015.svg/800px-ISO_9001-2015.svg.png" alt="ISO Logo"/>
      <strong>ISO</strong>
      <p>International Standards Organization.</p>
      <span className="certified-badge">Certified ✅</span>
    </div>
  </div>
</section>




      {/* Frequently Asked Questions */}
      <section className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => setFaqOpen(faqOpen === index ? null : index)}>
                {faq.question}
                <span>{faqOpen === index ? "▲" : "▼"}</span>
              </div>
              {faqOpen === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch */}
      <section className="section contact-section">
        <h2>GET IN TOUCH WITH US</h2>
        <form className="contact-form">
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone number" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* You Can Do It Section */}
      <section className="section encouragement-section">
        <div className="encouragement-content">
          <img src="https://i.postimg.cc/wvm41wQ2/11.png" alt="Learning" />
          <img src="https://i.postimg.cc/xTtJznCx/10.png" alt="Motivation" />
          <img src="https://i.postimg.cc/SxLyMGDy/12.png" alt="Teamwork" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
