import React from 'react'

const Footer = () => {
  return (
    <>
<div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item d-flex flex-column">
          <h4 className="text-white mb-4"><i className="fas fa-star-of-life me-3" />Focus-Group</h4>
          <p>consulting
          </p>
          <div className="d-flex align-items-center">
            <i className="fas fa-share fa-2x text-white me-2" />
            <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
            <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
            <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
            <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item d-flex flex-column">
          <h4 className="mb-4 text-white">Quick Links</h4>
          <a href><i className="fas fa-angle-right me-2" /> About Us</a>
          <a href><i className="fas fa-angle-right me-2" /> Contact Us</a>
          <a href><i className="fas fa-angle-right me-2" /> Privacy Policy</a>
          <a href><i className="fas fa-angle-right me-2" /> Terms &amp; Conditions</a>
          <a href><i className="fas fa-angle-right me-2" /> Our Blog &amp; News</a>
          <a href><i className="fas fa-angle-right me-2" /> Our Team</a>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item d-flex flex-column">
          <h4 className="mb-4 text-white">Focus-Group Services</h4>
          <a href><i className="fas fa-angle-right me-2" /> All Services</a>
          <a href><i className="fas fa-angle-right me-2" /> Gift Cards</a>
          <a href><i className="fas fa-angle-right me-2" /> Products</a>
          <a href><i className="fas fa-angle-right me-2" /> Forms</a>
          <a href><i className="fas fa-angle-right me-2" /> Dev</a>
          <a href><i className="fas fa-angle-right me-2" /> Devops</a>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="footer-item d-flex flex-column">
          <h4 className="mb-4 text-white">Contact Info</h4>
          <a href><i className="fa fa-map-marker-alt me-2" /> 123 Street, Tunis, TUNISIA</a>
          <a href><i className="fas fa-envelope me-2" /> focus@example.com</a>
          <a href><i className="fas fa-phone me-2" /> +216 22222222</a>
          <a href className="mb-3"><i className="fas fa-print me-2" /> +77777777</a>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Footer
