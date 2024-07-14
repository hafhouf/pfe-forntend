import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid position-relative p-0">
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-light me-4"><i className="fas fa-phone-alt text-primary me-2" />+0</a>
                <a href="#" className="text-light me-0"><i className="fas fa-envelope text-primary me-2" />Example@gmail.com</a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-facebook-f" /></a>
                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-twitter" /></a>
                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-instagram" /></a>
                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0"><i className="fas fa-crosshairs me-3"></i>Focus-Group</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link to="/forms" className="nav-item nav-link">Forms</Link>
                <Link to="/gift-card-store" className="nav-item nav-link">Gift Card Store</Link>
                {user && user.role === 'RESEARCHER' && (
                  <Link to="/add-form" className="nav-item nav-link">Add Form</Link>
                )}
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                  <div className="dropdown-menu m-0">
                    <Link to="/profile" className="dropdown-item">
                      <FontAwesomeIcon icon={faUser} /> Profile
                    </Link>
                    <a href="#" onClick={handleLogout} className="dropdown-item">
                      <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </a>
                  </div>
                </div>
                {user && (
                  <div className="nav-item">
                    <span className="nav-link">Connected as: <strong>{user.role}</strong></span>
                  </div>
                )}
              </div>
            </div>
          </nav>
          {/* Carousel Start */}
          <div className="header-carousel owl-carousel">
            <div className="header-carousel-item">
              <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
              <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                  <h5 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>Physiotherapy Center</h5>
                  <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                  <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </p>
                  <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                </div>
              </div>
            </div>
            <div className="header-carousel-item">
              <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
              <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                  <h5 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>Physiotherapy Center</h5>
                  <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                  <p className="mb-5 fs-5 animated slideInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel End */}
        </div>
        {/* Navbar & Hero End */}
      </div>
    </div>
  );
};

export default NavBar;
