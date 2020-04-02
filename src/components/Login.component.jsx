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
    <section>
      <h1 className="text-center">Welcome to the login portal</h1>
      <p className="text-center">Please enter your details to login</p>
      <form>
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
        <button id="Submit">Login</button>
      </form>
      <p>Don't have an account <a href="/signup">Click here</a></p>
    </section>
  );
};

export default Login;