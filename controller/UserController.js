const express = require('express');
const Suser = require('../model/Suser');
const mongoose = require('mongoose')



exports.sregister = async (req,res) => {
    try{
        var inputData = req.body;
        console.log('inputData',inputData)
        let details= await Suser.create(inputData);
        // console.log(details)
        res.status(200).json({status_code:200,status:'success', message:'user registerd',data:details});
    }
    catch(err){
        res.status(500).json({status_code:500,status:'failure', message:err.stack});
}
}

// Student Login

  exports.slogin = async (req, res) => {
    try {
      const inputData = req.body;
      console.log('inputData', inputData);
  
      // Find the user with the matching email
      const user = await Suser.findOne({ email: inputData.email });
  
      if (!user) {
        res.status(500).json({
          status_code: 500,
          status: 'failure',
          message: 'User not found',
        });
      } else {
        // Check if the password matches
        if (user.password === inputData.password) {
          res.status(200).json({
            status_code: 200,
            status: 'success',
            message: 'Login successful',
            data: user,
          });

        // const navigate = useNavigate();
        // navigate('/home'); // Navigate to the home page
        } else {
          res.status(500).json({
            status_code: 500,
            status: 'failure',
            message: 'Wrong credentials',
          });
        }
      }
    } catch (err) {
      res.status(500).json({
        status_code: 500,
        status: 'login failed',
        message: err.stack,
      });
    }
  };



  