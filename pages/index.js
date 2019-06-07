import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
/* eslint-disable */

const Index = () => (
  <Layout title="Home">
    <h2 className="title is-2">Welcome</h2>
    <div className="row">
	    <div className="card">
	        <div className="card-content">
	            <div className="card-title"></div>
	            <div className="row">
	                <div className="col s12 m12 l9">
	                   Discover your favorite parks.
	                </div>
	            </div>
	            <a href="#" className="btn btn-primary">Learn more</a>
	        </div>
        </div>
    </div>
  </Layout>
);



Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default withRedux(initStore)(Index);
