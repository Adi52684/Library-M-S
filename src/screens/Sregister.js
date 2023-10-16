import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Sregister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    course: '',
    gender: '',
    registrationnumber: '',
    batch: '',
    mobilenumber: '',
    address: '',


  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    course: '',
    gender :'',
    registrationnumber: '',
    batch: '',
    contactnumber: '',
    address: '',

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
    }
    else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: '',
      }))
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      valid = false;
    }
    else if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
      valid = false;
    }
    else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }))
    }

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!formData.password.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));

      valid = false;
    }
    else if (!passwordRegex.test(formData.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long and contain at least one letter and one number',
      }));
      valid = false;
    }
    else {
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

    if (!formData.course.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        course: 'Course is required',

      }))
      valid = false;
    }
    else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        course: '',
      }))
    }

    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('From Data:', formData);
    }
    else {
      console.log('Form validation failed');
    }
    axios.post('http://localhost:3000/sregister', formData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })

    if (validateForm()) {
      navigate('/slogin');
    }
    else {
      console.log('cannot click');
    }
  }

  const handleChange = (e) => {
    const { name, value, } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  };
  return (
    <div>
    <Navbar />
    <br/> <br/><br /><br/><br/>
    <form onSubmit={handleSubmit}>
      <div className="srdiagonal-container">
        <div className="srsignup-text">
          <p>Already Have an account ? <a href="...">Sign in</a></p>
        </div>
        <div className="sregister-form-container">
          <div className="sregistration-form">
            <div className='srcontainer'>
              <h1 className='sradmin'><center>Student Registration</center></h1>
              <div class="srform-group">
                <label>Name:</label>
                <input type="text" id="name" placeholder='Enter your Full Name' name="name" required value={formData.name} onChange={handleChange} />
                {errors.name && <span className="srerror">{errors.name}</span>}
              </div>
              <div class="srform-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='Enter your Email' required value={formData.email} onChange={handleChange} />
                {errors.email && <span className="srerror">{errors.email}</span>}
              </div>
              <div class="srform-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder='Enter your Password' required value={formData.password} onChange={handleChange} />
                {errors.password && <span className="srerror">{errors.password}</span>}
              </div>
              <div class="srform-group">
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirmpassword" name="confirmpassword" placeholder='Enter your Password' required value={formData.confirmpassword} onChange={handleChange} />
                {errors.confirmpassword && <span className="srerror">{errors.confirmpassword}</span>}
              </div>
              <div className='srform-group'>
                <label>Course:</label>
                <input type='text' name='course' placeholder='Enter your Course' value={formData.course} onChange={handleChange} ></input>
                {errors.course && <span className="srerror">{errors.course}</span>}
              </div>
              <div className='srform-group'>
                <label>Regitration Number:</label>
                <input type='text' name='registrationnumber' placeholder='Enter your Registration Number' value={formData.registrationnumber} onChange={handleChange} ></input>
                {errors.registrationnumber && <span className="srerror">{errors.registrationnumber}</span>}
              </div>
              <div className='srform-group'>
                <label>Batch:</label>
                <input type='text' name='batch' value={formData.batch} placeholder='Enter your batch' onChange={handleChange} ></input>
                {errors.batch && <span className="srerror">{errors.batch}</span>}
              </div>
              <div class="srform-group">
                <label className='srl' for="gender">Gender:</label>
                <select id="gender" name="gender" required onChange={handleChange}>
                  <option value="" disabled selected>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && <span className="srerror">{errors.gender}</span>}
              </div>
              <div className='srform-group'>
                <label>Mobile Number:</label>
                <input type='text' name='mobilenumber' placeholder='Enter your Mobile Number' value={formData.contactnumber} onChange={handleChange} ></input>
                {errors.contactnumber && <span className="srerror">{errors.contactnumber}</span>}
              </div>
              <div class="srform-group">
                <label for="address">Address:</label>
                <textarea id="address" name="address" placeholder='Enter your Address' required value={formData.address} onChange={handleChange}></textarea>
                {errors.address && <span className="srerror">{errors.address}</span>}
              </div>
              <center>
                <input type="submit" value="Register" className="sregister-button" />
              </center>


            </div>
          </div>
        </div>
      </div>
    </form>
    <br/><br/><br/><br/><br/>
    <Footer />
    </div>
  )
}

export default Sregister