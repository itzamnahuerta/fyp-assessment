import React from 'react';
import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';
import { initStore } from '../redux';
import Layout from '../components/Layout';

const Profile = ({user}) => (
  <Layout title="Profile">
    {(user && <h3 className="title is-3">You are logged in as <strong className="is-size-2 has-text-primary">{user.username}</strong>.</h3>) ||
      <h3 className="title is-3 has-text-danger	">You are not authenticated.</h3>}
  </Layout>
);

Profile.getInitialProps = async (ctx) => {
  initialize(ctx);
  const user = ctx.store.getState().authentication.user;
  if (user) {
    const {token, username} = user;
    if(token) {
      const response = await axios.get(`${API}/api/profiles/${username}`);
      console.log(response);
      const user = response.data;
      return {
        user
      };
    }
  }

};


export default withRedux(initStore)(Profile);
