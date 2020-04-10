/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const signUp = () => {
  const [userData, setUserData] = useState([
    {
      firstName:'',
      lastName:'',
      username:'',
      regNo:'',
      email:'',
      password:'',
      block:'',
      address:'',
      showPassword: false
    }
  ]);

  // Declaring alert function
  /*const alert = useAlert();*/

  // to handle change of input field
  const onChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  /*const handleClickShowPassword = () => {
    setUserData({
      ...userData, showPassword: !value.showPassword
    });
  };*/

  const storeData = () => {
    try{
      axios.post('https://git.heroku.com/login-page-backend.git/api/user/signup', userData);
    }
    catch(error){
      console.log(error);
    }
  }

  // to handle submit form cases
  const onSubmit = e => {
    e.preventDefault();

    console.log(userData);

    const emptyUserData = {
      firstName:'',
      lastName:'',
      username:'',
      regNo:'',
      email:'',
      password:'',
      block:'',
      address:''
    };

    axios.post('http://localhost:5000/api/user/signup', userData)
      .then(() => {
        setUserData(emptyUserData);
      })
      .catch(error =>{
        /*alert.show('Incorrect data entered. Please check your inputs and try again.');*/
        console.log(error);
      });
  };

  return(
    <section className="body-box md:pb-4 md:mx-32 md:my-4">
      <h1 className="text-center text-3xl font-bold md:m-8">Welcome to the sign up process</h1>
      <p className="text-center text-2xl font-medium md:m-8">Please enter your details to create your new profile</p>
      <form className="text-center mt-2 mb-8 m-48 flex flex-col" onSubmit={onSubmit}>
        <TextField 
          id="standard-basic" 
          label="First Name"
          name="firstName"
          value={userData.firstName}
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Last Name"
          name="lastName"
          value={userData.lastName} 
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Username" 
          name="username"
          value={userData.username}
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Registration Number" 
          name="regNo"
          value={userData.regNo}
          onChange={e => onChange(e)} 
        />
        <TextField
          id="standard-basic" 
          label="Email" 
          helperText="Please enter VIT email address" 
          name="email"
          value={userData.email}
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Password" 
          name="password"
          value={userData.password}
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Block" 
          name="block"
          value={userData.block}
          onChange={e => onChange(e)} 
        />
        <TextField multiline 
          rowsMax="4" 
          id="standard-basic" 
          label="Address"
          name="address"
          value={userData.address}
          onChange={e => onChange(e)} 
        />
        <button type="submit" id="Submit" className="text-center m-8 mb-1 py-2 submit-box">Sign Up</button>
      </form>
      <p className="text-center">Already have an account <a href="/" className="text-orange-400">Click here</a></p>
      </section>
  );
};

export default signUp;