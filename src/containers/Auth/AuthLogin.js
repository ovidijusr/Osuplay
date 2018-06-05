import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Auth.css'
import osuPlayLogo from '../../images/icons/osuplay-logo.svg';
import * as firebase from "firebase";
import firebaseConfig from "../../utils/firebase.config"

const propTypes = {}

const defaultProps = {}


class AuthLogin extends Component {
  constructor(props) {
    super(props)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
        errorMessage: '',
        email: '',
        password: '',
    }
  }
  handleFormChange(event, field) {
    this.setState({
      [field]: event.target.value
    })
  }

  handleFormSubmit(event){
    event.preventDefault();
    if (!event.target.checkValidity()) {
      return;
    }

    this.setState({errorMessage: ""})
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        console.log('win',data)
      })
      .catch(error => {
        this.setState({errorMessage: error.message})
    });
  }

  render() {
    return (
      <div className="auth">
      <div className="auth-header">
        <div className="auth-header__item">Login</div>
        <div
          className="auth-header__item"
          onClick={() => this.props.actions.setPage("register")}
        >
          Register
        </div>
      </div>
    <form
      className="auth-form"
      onSubmit={this.handleFormSubmit}
    >
      <img
        className="auth-form__logo"
        src={osuPlayLogo}
        alt="logo"
      />
      <div className="auth-form__header">Login</div>
      {this.state.errorMessage &&
        <div className="auth-form__message">{this.state.errorMessage}</div>
      }
      <div className="auth-form__field">
        <div className="auth-form__field-header">Email</div>
        <input
          className="auth-form__field-body"
          placeholder="Enter your email"
          type="email"
          required
          onChange={(ev) => this.handleFormChange(ev,"email")}
          value={this.state.email}
        />
      </div>
      <div className="auth-form__field">
        <div className="auth-form__field-header">Password</div>
        <input
          className="auth-form__field-body"
          type="password"
          onChange={(ev) => this.handleFormChange(ev,"password")}
          placeholder="Enter your pasword"
          required
          value={this.state.password}
        />
        <div className="auth-form__field-alt-text">
          Did you forget your password?
        </div>
      </div>
      <button
        className="auth-form__button"
      >
        Login
      </button>
      </form>
    </div>
    )
  }
}

AuthLogin.propTypes = propTypes

AuthLogin.defaultProps = defaultProps

export default AuthLogin

