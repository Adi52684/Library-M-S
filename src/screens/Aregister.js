import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Aregister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        gender: '',
        designation: '',
        registrationnumber: '',
        mobilenumber: '',
        address: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        gender: '',
        designation: '',
        registrationnumber: '',
        mobilenumber: '',
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

        if (!formData.gender.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                gender: 'Gender is required',

            }))
            valid = false;

        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                gender: ''
            }))
        }

        if (!formData.designationr.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                designation: 'Designation is required',

            }))
            valid = false;

        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                designation: ''
            }))
        }

        if (!formData.registrationnumber.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                registrationnumber: 'Registartion number is required',

            }))
            valid = false;

        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                registrationnumber: ''
            }))
        }

        if (!formData.mobilenumber.trim()) {
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
        if (!formData.address.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                mobilenumber: 'Address is required',

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
        axios.post('http://localhost:3000/aregister', formData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        if (validateForm()) {
            navigate('/alogin');
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
    <br/> <br/> <br/>
    <form onSubmit={handleSubmit}>
      <div className="ardiagonal-container">
        <div className="arsignup-text">
          <p>Already Have an account ? <a href="...">Sign in</a></p>
        </div>
        <div className="aregister-form-container">
          <div className="aregistration-form">
            <div className='arcontainer'>
              <h1 className='aradmin'><center>Administration Registration</center></h1>
                            <div class="arform-group">
                                <label>Name:</label>
                                <input type="text" id="name" name="name" placeholder="Enter your full name" required onChange={handleChange} />
                                {errors.name && <span className="arerror">{errors.name}</span>}
                            </div>

                            <div class="arform-group">
                                <label>Email:</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={handleChange} />
                                {errors.email && <span className="arerror">{errors.email}</span>}
                            </div>

                            <div class="arform-group">
                                <label>Password:</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={handleChange} />
                                {errors.password && <span className="arerror">{errors.password}</span>}
                            </div>

                            <div class="arform-group">
                                <label >Confirm Password:</label>
                                <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm your password" required onChange={handleChange} />
                                {errors.confirmpassword && <span className="arerror">{errors.confirmpassword}</span>}
                            </div>

                            <div class="arform-group">
                                <label >Gender:</label>
                                <select id="gender" name="gender" required onChange={handleChange}>
                                    <option value="" disabled selected>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {errors.gender && <span className="arerror">{errors.gender}</span>}
                            </div>

                            <div class="arform-group">
                                <label>Designation:</label>
                                <input type="text" id="designation" name="designation" placeholder="Enter your designation" required onChange={handleChange} />
                                {errors.designation && <span className="arerror">{errors.designation}</span>}
                            </div>

                            <div class="arform-group">
                                <label >Registration Number:</label>
                                <input type="text" id="registrationnumber" name="registrationnumber" placeholder="Enter your registration number" required onChange={handleChange} />
                                {errors.registrationnumber && <span className="arerror">{errors.registrationnumber}</span>}
                            </div>

                            <div class="arform-group">
                                <label >Mobile Number:</label>
                                <input type="tel" id="mobilenumber" name="mobilenumber" placeholder="Enter your phone number" required onChange={handleChange} />
                                {errors.mobilenumber && <span className="arerror">{errors.mobilenumber}</span>}
                            </div>

                            <div class="arform-group">
                                <label >Address:</label>
                                <textarea id="address" className='Atextarea' name="address" placeholder="Enter your address" required onChange={handleChange}></textarea>
                                {errors.address && <span className="arerror">{errors.address}</span>}
                            </div>
                            <center>
                                <input type="submit" className="aregister-button" value="Register" />
                            </center>
                        </div>
                        
                        </div>
                    </div>
                </div>
                </form>
                <br/><br/><br/>
                <Footer />
            </div>
        




    )
}

export default Aregister