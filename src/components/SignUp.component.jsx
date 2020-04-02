/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useAlert } from 'react-alert';
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
    /*setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });*/
    console.log(e.target.value)
  };

  /*const handleClickShowPassword = () => {
    setUserData({
      ...userData, showPassword: !value.showPassword
    });
  };*/

  // to handle submit form cases
  const onSubmit = e => {
    e.preventDefault();

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

    /*storeData(userData.firstName,userData.lastName,userData.username,userData.regNo,userData.email,userData.password,userData.block,userData.address)
    .then(() => {
      alert.show('Profile created');
      setUserData(emptyUserData);
    })
    .catch(error =>{
      alert.show('Incorrect data entered. Please check your inputs and try again.');
      console.log(error);
    });*/
  };

  return(
    <section>
      <h1>Welcome to the sign up process</h1>
      <p>Please enter your details to create your new profile</p>
      <form>
        <TextField 
          id="standard-basic" 
          label="First Name" 
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Last Name" 
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Username" 
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Registration Number" 
          onChange={e => onChange(e)} 
        />
        <TextField
          id="standard-basic" 
          label="Email" 
          helperText="Please enter VIT email address" 
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Password" 
          onChange={e => onChange(e)} 
        />
        <TextField 
          id="standard-basic" 
          label="Block" 
          onChange={e => onChange(e)} 
        />
        <TextField multiline 
          rowsMax="4" 
          id="standard-basic" 
          label="Address"
          onChange={e => onChange(e)} 
        />
        <button id="Submit">Sign Up</button>
      </form>
      <p>Already have an account <a href="/">Click here</a></p>
      </section>
  );
};

export default signUp;