import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us container py-5">
      {/* Header Section */}
      <h1 className="text-center text-primary fw-bold">About Trivya</h1>
      <p className="text-center text-muted">
        Empowering learners through real-world, project-based education.
      </p>

      {/* Our Story */}
      <section className="our-story row align-items-center mt-5">
        <div className="col-md-6 text-center">
          <img src="https://i.postimg.cc/NjK4b5Qp/about-us.png" alt="Trivya Learning" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="text-warning">Why Trivya?</h2>
          <p>Trivya is a <strong>project-based learning platform</strong> that bridges the gap between theoretical knowledge and real-world application. Our focus is to help students gain hands-on experience by working on industry-relevant projects under expert mentorship.</p>
          <ul>
            <li>🚀 Work on real-world projects</li>
            <li>🎓 Learn from industry experts</li>
            <li>🏆 Earn certifications & job opportunities</li>
            <li>🤝 Collaborate with a global community</li>
          </ul>
        </div>
      </section>

      {/* Learning Process */}
      <section className="learning-process mt-5">
        <h2 className="text-center text-primary">How Trivya Works</h2>
        <div className="row text-center mt-4">
          {[
            "Apply & Get Selected",
            "Structured Learning Modules",
            "Industry Mentorship",
            "Collaborative Team Projects",
            "Project Submission & Feedback",
            "Earn Certifications & Job Offers"
          ].map((step, index) => (
            <div key={index} className="col-md-4">
              <div className="process-box p-3 shadow-sm rounded">{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values mt-5">
        <h2 className="text-center text-warning">Our Core Values</h2>
        <div className="row mt-4 text-center">
          {["Hands-On Learning", "Innovation & Creativity", "Excellence & Recognition"].map((value, index) => (
            <div key={index} className="col-md-4">
              <h4>📚 {value}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements mt-5">
        <h2 className="text-center text-primary">Our Impact</h2>
        <div className="row text-center mt-4">
          {[
            { label: "Students Trained", value: "5000+" },
            { label: "Industry Mentors", value: "100+" },
            { label: "Successful Projects", value: "50+" },
            { label: "Company Partnerships", value: "10+" }
          ].map((stat, index) => (
            <div key={index} className="col-md-3">
              <h3 className="text-warning">{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section mt-5">
        <h2 className="text-center text-primary">Meet Our Founder</h2>
        <div className="row mt-4 align-items-center">
          <div className="col-md-4 text-center">
            <img src="https://i.postimg.cc/htJ9j9b8/founder.jpg" alt="Founder Name" className="img-fluid rounded-circle founder-img" />
          </div>
          <div className="col-md-8">
            <h3 className="text-warning">[Founder’s Name]</h3>
            <p>[Founder’s Name] created Trivya to revolutionize learning through hands-on projects, bridging the gap between education and industry demands.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg">Join Trivya Today</button>
      </div>
    </div>
  );
};

export default AboutUs;
