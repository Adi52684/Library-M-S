import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Lregister = () => {
  const [formData, setFormData] = useState({
    name: '',
    teacherid: '',
    email: '',
    password: '',
    confirmpassword: '',
    gender: '',
    mobilenumber: '',
    photo: '',
    address: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    teacherid: '',
    email: '',
    password: '',
    confirmpassword: '',
    gender: '',
    mobilenumber: '',
    photo: '',
    address: ''
  })
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;

    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name is required',

      }))
      valid = false;

    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: ''
      }))
    }

    if (!formData.teacherid.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        teacherid: 'Teacher Id is required',

      }))
      valid = false;

    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        teacherid: ''
      }))
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'email is required'
      }));
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }))
    }

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!formData.password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required'
      }));
      valid = false;
    } else if (!passwordRegex.test(formData.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long and contain at least one letter and one number',
      }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }))
    }

    const confirmpasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!formData.confirmpassword.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmpassword: 'Confirm Password is required',
      }));

      valid = false;
    }
    else if (!confirmpasswordRegex.test(formData.confirmpassword)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmpassword: 'Confirm Password must be at least 8 characters long and contain at least one letter and one number',
      }));
      valid = false;
    }
    else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmpassword: '',
      }))
    }

    if (!formData.teacherid.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobilenumber: 'Mobile Number is required',

      }))
      valid = false;

    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobilenumber: ''
      }))
    }

    return valid;

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('From Data:', formData);
    } else {
      console.log('Form validation failed');
    }
    axios.post('http://localhost:3000/lregister', formData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    if (validateForm()) {
      navigate('/llogin');
    }
    else {
      console.log('cannot click');
    }

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preveData) => ({
      ...preveData,
      [name]: value
    }))
  };
  return (
    <div>
    <Navbar />
    <br/>
    <br/>
    <form onSubmit={handleSubmit} >
      <div className="lrdiagonal-container">
        <div className="lrsignup-text">
          <p>Already Have an account ? <a href="...">Sign in</a></p>
        </div>
        <div className="lregister-form-container">
          <div className="lregistration-form">
            <div className='lrcontainer'>


              <h1 className='lradmin'><center>Librarian Registration</center></h1>
              <div class="lrform-group">
                <label>Name:</label>
                <input type="text" id="name" name="name" placeholder='Enter your Full Name' required value={formData.name} onChange={handleChange} />
                {errors.name && <span className="lrerror">{errors.name}</span>}
              </div>
              <div className="lrform-group">
                <label>Teacher Id:</label>
                <input type="text" id="teacherid" name='teacherid' value={formData.teacherid} placeholder='Enter your Teacher Id' onChange={handleChange} required />
                {errors.teacherid && <span className="lrerror">{errors.teacherid}</span>}
              </div>
              <div className="lrform-group">
                <label>Email:</label>
                <input type="email" id="email" name='email' value={formData.email} placeholder='Enter your Email' onChange={handleChange} required />
                {errors.email && <span className="lrerror">{errors.email}</span>}
              </div>
              <div className="lrform-group">
                <label>Password:</label>
                <input type="password" id="password" name='password' value={formData.password} placeholder='Enter your Password' onChange={handleChange} required />
                {errors.password && <span className="lrerror">{errors.password}</span>}

              </div>
              <div className="lrform-group">
                <label>Confirm Password:</label>
                <input type="password" id="confirmpassword" name='confirmpassword' value={formData.confirmpassword} placeholder='Enter your Password' onChange={handleChange} required />
                {errors.confirmpassword && <span className="lrerror">{errors.confirmpassword}</span>}
              </div>
              <div className='lrform-group'>
                <label>Mobile Number:</label>
                <input type='text' name='mobilenumber' placeholder='Enter your Mobile Number' value={formData.contactnumber} onChange={handleChange} />
                {errors.contactnumber && <span className="lrerror">{errors.contactnumber}</span>}
              </div>
              <div class="lrform-group">
                        <label className='srl' for="gender">Gender:</label>
                        <select id="gender" name="gender" required onChange={handleChange}>
                            <option value="" disabled selected>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && <span className="lrerror">{errors.gender}</span>}
                    </div>
              <div className="lrform-group">
                <label >Upload Photo:</label>
                <input type="file" id="photo" name="photo" value={formData.photo} onChange={handleChange} required />
                {errors.photo && <span className="lrerror">{errors.photo}</span>}
              </div>
              <div className="lrform-group">
                <label >Address:</label>
                <textarea id="address" name="address" value={formData.address} placeholder='  Enter your current address...' onChange={handleChange} required />
                {errors.address && <span className="lrerror">{errors.address}</span>}
              </div>
              <center>
                <input type="submit" value="Register" className="lregister-button" />
              </center>
            </div>
          </div>
        </div>
      </div>
    </form>
    <br/>
    <br/>
    <Footer />
    </div>



  )
}

export default Lregister