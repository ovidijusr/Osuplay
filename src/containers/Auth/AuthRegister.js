import React, { Component } from 'react'
import osuPlayLogo from '../../images/icons/osuplay-logo.svg';
import PropTypes from 'prop-types'
import './Auth.css'
import * as firebase from "firebase";
import firebaseConfig from "../../utils/firebase.config"

const propTypes = {}

const defaultProps = {}

class AuthRegister extends Component {
  constructor(props) {
    super(props)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    this.state = {
      errorMessage: '',
        email: '',
        password: '',
        passwordTwo: '',
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
    firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(err => {        this.setState({errorMessage: err.message})
        this.setState({errorMessage: err.message})
    })
  }

  render() {
    return (
    <div className="auth">
      <div className="auth-header">
        <div
          className="auth-header__item"
          onClick={() => this.props.actions.setPage("login")}
        >
          Login
        </div>
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
      <div className="auth-form__header">Register</div>
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
      </div>
      <div className="auth-form__field">
        <div className="auth-form__field-header">Repeat Password</div>
        <input
          className="auth-form__field-body"
          type="password"
          onChange={(ev) => this.handleFormChange(ev,"passwordTwo")}
          placeholder="Repeat your pasword"
          required
          value={this.state.passwordTwo}
        />
      </div>
      <button
        className="auth-form__button"
      >
        Register
      </button>
      </form>
    </div>
    )
  }
}

AuthRegister.propTypes = propTypes

AuthRegister.defaultProps = defaultProps

export default AuthRegister
