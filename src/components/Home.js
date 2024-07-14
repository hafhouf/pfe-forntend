import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigateToSignup = () => {
    navigate('/sign-up'); // Navigate to the signup page
  };

  const handleNavigateToForms = () => {
    navigate('/add-form'); // Navigate to the signup page
  };
  const handleNavigateToProducts = () => {
    navigate('/add-product'); // Navigate to the signup page
  };
  const handleNavigateToGiftCard = () => {
    navigate('/gift-card-store'); // Navigate to the signup page
  };

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />

      {/* HOME page */}
      <div>
        {/* Services Start */}
        <div className="container-fluid service py-5">
          <div className="container py-5">
            <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
              <div className="sub-style">
                <h4 className="sub-title px-3 mb-0">What We Do</h4>
              </div>
              <h1 className="display-3 mb-4">Our Services to Understand Your Clients Better</h1>
              <p className="mb-0">We help companies gather valuable insights from clients through engaging forms, rewarding them with points that can be converted into gift cards or used to purchase products.</p>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded">
                  <div className="service-img rounded-top">
                    <img src="assets/img/gift-card.jpg" className="img-fluid rounded-top w-100" alt="Gift Cards" />
                  </div>
                  <div className="service-content rounded-bottom bg-light p-4">
                    <div className="service-content-inner">
                      <h5 className="mb-4">Gift Cards</h5>
                      <p className="mb-4">Reward your clients with gift cards for participating in surveys and providing valuable feedback.</p>
                      <button onClick={handleNavigateToGiftCard} className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded">
                  <div className="service-img rounded-top">
                    <img src="assets/img/gift-card.jpg" className="img-fluid rounded-top w-100" alt="Products" />
                  </div>
                  <div className="service-content rounded-bottom bg-light p-4">
                    <div className="service-content-inner">
                      <h5 className="mb-4">Products</h5>
                      <p className="mb-4">Clients can use their points to purchase products from a variety of categories.</p>
                      <button onClick={handleNavigateToProducts} className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded">
                  <div className="service-img rounded-top">
                    <img src="assets/img/gift-card.jpg" className="img-fluid rounded-top w-100" alt="Forms" />
                  </div>
                  <div className="service-content rounded-bottom bg-light p-4">
                    <div className="service-content-inner">
                      <h5 className="mb-4">Forms</h5>
                      <p className="mb-4">Create and post forms to collect client feedback and insights on various topics.</p>
                      <button onClick={handleNavigateToForms} className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item rounded">
                  <div className="service-img rounded-top">
                    <img src="assets/img/gift-card.jpg" className="img-fluid rounded-top w-100" alt="Customer Insights" />
                  </div>
                  <div className="service-content rounded-bottom bg-light p-4">
                    <div className="service-content-inner">
                      <h5 className="mb-4">Customer Insights</h5>
                      <p className="mb-4">Gain deep insights into customer preferences and behavior through our analytical tools.</p>
                      <button onClick={handleNavigateToSignup} className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</button>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                <button onClick={handleNavigateToSignup} className="btn btn-primary rounded-pill text-white py-3 px-5">Services More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Services End */}
        {/* About Start */}
        <div className="container-fluid about bg-light py-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-img pb-5 ps-5">
                  <img src="/consulting-grp.png" className="img-fluid rounded w-100" style={{ objectFit: 'cover' }} alt="Image" />
                  <div className="about-img-inner">
                    <img src="/consulting-grp.png" className="img-fluid rounded-circle w-100 h-100" alt="Image" />
                  </div>
                  {/* <div className="about-experience">15 years experience</div> */}
                </div>
              </div>
              <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                <div className="section-title text-start mb-5">
                  <h4 className="sub-title pe-3 mb-0">About Us</h4>
                  <h1 className="display-3 mb-4">We Help You Understand Your Clients Better.</h1>
                  <p className="mb-4">Our platform provides companies with the tools to gather valuable insights from their clients, helping improve products and services based on real feedback.</p>
                  <div className="mb-4">
                    <p className="text-secondary"><i className="fa fa-check text-primary me-2" /> Personalized feedback collection.</p>
                    <p className="text-secondary"><i className="fa fa-check text-primary me-2" /> Easy-to-use form creation tools.</p>
                    <p className="text-secondary"><i className="fa fa-check text-primary me-2" /> Reward system to incentivize participation.</p>
                  </div>
                  <button onClick={handleNavigateToSignup} className="btn btn-primary rounded-pill text-white py-3 px-5">Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
