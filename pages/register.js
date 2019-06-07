import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      email2: '',
      password: '',
    };
  }

  static getInitialProps (ctx) {
    initialize(ctx);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate({email: this.state.email, email2:this.state.email, username:this.state.username ,password: this.state.password}, 'register');
  }

  render() {
    return (
      <Layout title="Sign Up">
        <h3 className="title is-3">Sign Up</h3>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="container"
          style={{ width: '540px' }}
        >
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Username"
                required
                value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email Confirmation"
                required
                value={this.state.email2}
                onChange={(e) => this.setState({email2: e.target.value})}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-text-centered">
              <button type="submit" className="button is-success">
                Sign In
              </button>
            </p>
          </div>
        </form>
      </Layout>
    );
  }
}

export default withRedux(initStore, null, actions)(Signup);
