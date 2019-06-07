import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, DEAUTHENTICATE, REFRESH } from '../types';
import { API } from '../../config';
import { setCookie, removeCookie } from '../../utils/cookie';

const authenticate = ({ email, email2, username, password }, type) => {
  if (type !== 'login' && type !== 'register') {
    throw new Error('Wrong API call!');
  }
  return (dispatch) => {
    const reg = /\S+@\S+/;
    // we check if the email string 
    // contains an "@" string.
    const isEmail = reg.test(email);
    console.log(isEmail, "isEmail?");
    let params;
    if (isEmail) { 
      params = { username: username, email: email, email2: email, password: password }
    } else {
      params = { username: email, password: password, email: "" }
    }
    const config = { headers: {'Accept': 'application/json', "Content-Type": "application/json" } }
    axios.post(`${API}/api/auth/${type}/`, params, config)
      .then((response) => {
        console.log(response.data);
        setCookie('token', response.data.token);
        Router.push('/');
        dispatch({type: AUTHENTICATE, payload: response.data});
      })
      .catch((err) => {
        console.log(err.response);
        throw new Error(err);
      });
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({type: REFRESH, payload: token});
  }; 
};

// removing the token
const deauthenticate = () => {
  return (dispatch) => {
    removeCookie('token');
    Router.push('/');
    dispatch({type: DEAUTHENTICATE});
  };
};








export default {
  authenticate,
  reauthenticate,
  deauthenticate,
};
