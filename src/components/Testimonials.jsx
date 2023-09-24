import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Testimonial 1 */}
        <div className="col-sm-4">
          <div className="testimonial-card">
            <h4 className="testimonial-card-title">HackerNews India</h4>
            <div className="testimonial-card-body">
              <p className="testimonial-card-text">
                "This product changed my life!"
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="col-sm-4">
          <div className="testimonial-card">
            <h4 className="testimonial-card-title">Company_A</h4>
            <div className="testimonial-card-body">
              <p className="testimonial-card-text">
                "I can't believe how effective this is."
              </p>
            </div>
          </div>
        </div>

        {/* Add more testimonials as needed */}
      </div>
    </div>
  );
};

export default Testimonials;