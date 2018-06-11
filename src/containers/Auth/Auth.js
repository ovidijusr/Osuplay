import React from 'react'
import { connect } from 'react-redux'
import * as user from '../../actions/user';
import AuthForgot from "./AuthForgot";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";

const Auth = (props) => (
  <React.Fragment>
    {{
      forgot: <AuthForgot {...props}/>,
      login: <AuthLogin {...props}/>,
      register: <AuthRegister {...props}/>,
    }[props.user.page || 'login']}
  </React.Fragment>
)

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setPage: (data) => dispatch(user.setPage(data)),
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
