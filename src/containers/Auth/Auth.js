import React from 'react'
import { connect } from 'react-redux'
import * as auth from '../../actions/auth';
import AuthForgot from "./AuthForgot";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";

const Auth = (props) => (
  <React.Fragment>
    {{
      forgot: <AuthForgot {...props}/>,
      login: <AuthLogin {...props}/>,
      register: <AuthRegister {...props}/>,
    }[props.auth.page || 'login']}
  </React.Fragment>
)

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setPage: (data) => dispatch(auth.setPage(data)),
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
