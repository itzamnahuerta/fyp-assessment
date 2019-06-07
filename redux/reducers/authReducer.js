import { AUTHENTICATE, DEAUTHENTICATE, REFRESH } from '../types';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
  case AUTHENTICATE:
    return { user: action.payload };
  case DEAUTHENTICATE:
    return { user: null };
  case REFRESH: 
  	return state;
  default:
    return state;
  }
};
