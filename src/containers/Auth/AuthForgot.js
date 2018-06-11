import React, { Component } from 'react'
import osuPlayLogo from '../../images/icons/osuplay-logo.svg';
import PropTypes from 'prop-types'
import './Auth.css'
import * as firebase from "firebase";
import firebaseConfig from "../../utils/firebase.config"

const propTypes = {}

const defaultProps = {}

class AuthForgot extends Component {
  constructor(props) {
    super(props)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
      errorMessage: '',
      email: '',
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
    firebase.auth().sendPasswordResetEmail(this.state.email)
      .then(() => {
        this.setState({errorMessage: 'Email has been sent, check your email'})
      })
      .catch(err => {
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
        <div className="auth-form__header">Forgot password?</div>
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
        <button
          className="auth-form__button"
        >
          Reset
        </button>
        </form>
      </div>
    )
  }
}

AuthForgot.propTypes = propTypes

AuthForgot.defaultProps = defaultProps

export default AuthForgot;
