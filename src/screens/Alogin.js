import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { FcBusinessman } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Alogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const validateForm = () => {
        let valid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required'
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
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('From Data:', formData);
        } else {
            console.log('Form validation failed');
        }
        //   axios.post('http://localhost:3000/alogin', formData)
        //     .then(res => {
        //         console.log(res.data);
        //     })
        //     .catch(err =>{
        //         console.log(err);
        //     })
        //     if(validateForm()){
        //         navigate('/');
        //     }
        //     else{
        //         console.log('cannot click');
        //     }
        axios.post('http://localhost:3000/slogin', formData)
            .then(res => {
                console.log(res.data);
                const { status, message } = res.data;
                if (status === 'success') {
                    navigate('/home');
                } else {
                    // Display the error message to the user
                    console.log('cannot click', message);
                }
            })
            .catch(err => {
                console.error(err);
                // Handle the error
            });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    };
    return (
        <div>
            <Navbar />
            <div className="aldiagonal-container">
                <div className="alsignup-text">
                    <p>Haven't Registered Yet? <a href="...">Register</a></p>
                </div>
                <div className="alogin-form-container">

                    <form onSubmit={handleSubmit} className="alregistration-form">
                        <div className='alcontainer'>
                            <h1 className='aladmin'><center>Administration Login</center></h1>
                            <div className="alform-group">
                                <label><FcBusinessman />Email:</label>
                                <input type="text" name="email" value={formData.email} placeholder='Enter email' onChange={handleChange} />
                                {errors.email && <span className="alerror">{errors.email}</span>}
                            </div>

                            <div className="alform-group">
                                <label><FcLock />Password:</label>
                                <input type="password" name="password" value={formData.password} placeholder='Enter password' onChange={handleChange} />
                                {errors.password && <span className="alerror">{errors.password}</span>}
                            </div>

                            <div className="alform-group">
                                <a href="...">Forgot Password?</a>
                            </div>
                            <center>
                                <input type="submit" value="Login" className="alogin-button" />
                            </center>
                        </div>
                    </form>

                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Alogin