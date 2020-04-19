import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import axios from 'axios';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
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

const Login = () => {
  const classes = useStyles();

  const [userData,setUserData] = useState([
    {
      regNo: '',
      email: '',
      password: '',
      showPassword: false
    }
  ]);

  //Destructuring
  const { regNo, email, password } = userData

  //Initialising alerts
  const alert = useAlert();

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

  const onSubmit = f => {
    f.preventDefault();

    const emptyLoginData = {
      regNo:'',
      email:'',
      password:'',
      showPassword: false
    };

    console.log(userData);

    axios.post(`https://login-page-backend.herokuapp.com/api/user/login`, {regNo, email, password})
      .then((response) => {
        setUserData(emptyLoginData);
        console.log(userData);
        alert.show('User successfully logged in');
      })
      .catch(error =>{
        alert.show('Incorrect data entered. Please check your inputs and try again.');
        console.log(error.response);
      });
  }

  return(
    <section className="body-box pb-4 md:mx-32">
      <h1 className="text-center text-3xl font-bold md:m-8">Welcome to the login portal</h1>
      <p className="text-center text-2xl font-medium md:m-8">Please enter your details to login</p>
      <form className="text-center mt-8 mb-8 m-48 flex flex-col" onSubmit={onSubmit}>
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
            label="VIT Email"
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
        <button type="submit" id="Submit" className="text-center mb-1 py-2 submit-box md:m-8">Login</button>
      </form>
      <p className="text-center">Don't have an account <a href="/signup" className="text-orange-400">Click here</a></p>
    </section>
  );
};

export default Login;