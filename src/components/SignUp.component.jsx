/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '105ch',
  },
}));

const signUp = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([
    {
      firstName:'',
      lastName:'',
      username:'',
      regNo:'',
      email:'',
      password:'',
      blockDet:'',
      address:'',
      showPassword: false
    }
  ]);

  const { firstName, lastName, username, regNo, email, password, blockDet, address} = userData;

  // Declaring alert function
  const alert = useAlert();

  // to handle change of input field
  const onChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

    const handleClickShowPassword = () => {
      setUserData({ ...userData, showPassword: !userData.showPassword });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


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
      blockDet:'',
      address:'',
      showPassword: false
    };

    console.log(userData);

    axios.post(`https://login-page-backend.herokuapp.com/api/user/signup`, { firstName, lastName, username, regNo, email, password, blockDet, address})
      .then((response) => {
        setUserData(emptyUserData);
        alert.show('new profile created');
      })
      .catch(error =>{
        alert.show('Incorrect data entered. Please check your inputs and try again.');
        console.log(error.response);
      });
  };

  return(
    <section className="body-box md:pb-4 md:mx-32 md:my-4">
      <h1 className="text-center text-3xl font-bold md:m-8">Welcome to the sign up process</h1>
      <p className="text-center text-2xl font-medium md:m-8">Please enter your details to create your new profile</p>
      <form className="text-center mt-2 mb-8 m-48 flex flex-col" onSubmit={onSubmit}>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField 
          id="standard-basic" 
          label="First Name"
          name="firstName"
          value={userData.firstName}
          onChange={e => onChange(e)} 
        />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField 
          id="standard-basic" 
          label="Last Name"
          name="lastName"
          value={userData.lastName} 
          onChange={e => onChange(e)} 
        />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField 
          id="standard-basic" 
          label="Username" 
          name="username"
          value={userData.username}
          onChange={e => onChange(e)} 
        />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField 
          id="standard-basic" 
          label="Registration Number" 
          name="regNo"
          value={userData.regNo}
          onChange={e => onChange(e)} 
        />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField
          id="standard-basic" 
          label="Email" 
          helperText="Please enter VIT email address" 
          name="email"
          value={userData.email}
          onChange={e => onChange(e)} 
        />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          label="Password"
          name="password"
          type={userData.showPassword ? 'text' : 'password'}
          value={userData.password}
          onChange={e => onChange(e)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {userData.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField 
          id="standard-basic" 
          label="Block" 
          name="blockDet"
          value={userData.blockDet} 
          onChange={e => onChange(e)} 
        />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField multiline 
          rowsMax="4" 
          id="standard-basic" 
          label="Address"
          name="address"
          value={userData.address}
          onChange={e => onChange(e)} 
        />
        </FormControl>
        <button type="submit" id="Submit" className="text-center mb-1 py-2 submit-box md:m-8">Sign Up</button>
      </form>
      <p className="text-center">Already have an account <a href="/" className="text-orange-400">Click here</a></p>
      </section>
  );
};

export default signUp;