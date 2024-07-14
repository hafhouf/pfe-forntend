import React, { useState } from 'react';
import { register } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Signup.css'; // Make sure to create this CSS file

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null); // Use null for date initial state
  const [birthLocation, setBirthLocation] = useState('');
  const [role, setRole] = useState('USER');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ username, password, firstName, lastName, phoneNumber, email, dateOfBirth, birthLocation, role });
      navigate('/login');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="/Focus-back.png" alt="Join us today!" />
      </div>
      <div className="signup-form-container">
        <div className="signup-form">
          <h4 className="text-center">Join us today!</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
            <label htmlFor="phoneNumber">Phone number</label>

              <PhoneInput
                country={'us'}
                value={phoneNumber}
                onChange={setPhoneNumber}
                placeholder="Phone Number"
                inputProps={{
                  name: 'phoneNumber',
                  required: true,
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Birth Date</label>
              <DatePicker
                selected={dateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
                placeholderText="Select your birth date"
                dateFormat="MM/dd/yyyy"
                className="form-control"
                showYearDropdown
                yearDropdownItemNumber={100}
                scrollableYearDropdown
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="birthLocation"
                placeholder="Birth Location"
                value={birthLocation}
                onChange={(e) => setBirthLocation(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="USER">User</option>
                <option value="RESEARCHER">Researcher</option>
              </select>
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
          <div className="login-link">
            <Link to="/login">Already have an account? Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
