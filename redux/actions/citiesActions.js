import Router from 'next/router';
import axios from 'axios';
import { REFRESH } from '../types';
import { API } from '../../config';



const refresh = () => {


return (dispatch) => {
    
    const config = { headers: {'Accept': 'application/json', "Content-Type": "application/json" } }

    axios.get(`${API}/api/cities/`, config)
    .then((response) => {
      console.log(response.data);
      //Router.push('/');
      dispatch({ payload: response.data});
    })
    .catch((err) => {
      console.log(err.response);
      throw new Error(err);
    });
}
};