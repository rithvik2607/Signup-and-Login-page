import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import TextField from '@material-ui/core/TextField';

const Login = () => {
  const [userData,setUserData] = useState([
    {
      regNo:'',
      email:'',
      password:''
    }
  ]);

  const onChange = e => {
    /*setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });*/
    console.log(e.target.value)
  };

  const onSubmit = e => {
    e.preventDefault();

    const emptyLoginData = {
      regNo:'',
      email:'',
      password:''
    };

    /*storeData(userData.regNo,userData.email,userData.password)
    .then(() => {
      alert.show('Profile created');
      setUserData(emptyLoginData);
    })
    .catch(error =>{
      alert.show('Incorrect data entered. Please check your inputs and try again.');
      console.log(error);
    });*/
  };

  return(
    <section className="body-box pb-4 mx-32">
      <h1 className="text-center text-3xl font-bold m-8">Welcome to the login portal</h1>
      <p className="text-center text-2xl font-medium m-8">Please enter your details to login</p>
      <form className="text-center mt-8 mb-8 m-48 flex flex-col">
        <TextField
          id="standard-basic"
          label="Registration Number"
          onChange={e => onChange(e)}
        />
        <TextField
          id="standard-basic"
          label="VIT Email"
          helperText="Please enter VIT email address"
          onChange={e => onChange(e)}
        />
        <TextField
          id="standard-basic"
          label="Password"
          onChange={e => onChange(e)}
        />
        <button id="Submit" className="text-center m-8 mb-1 py-2 submit-box">Login</button>
      </form>
      <p className="text-center">Don't have an account <a href="/signup" className="text-orange-400">Click here</a></p>
    </section>
  );
};

export default Login;