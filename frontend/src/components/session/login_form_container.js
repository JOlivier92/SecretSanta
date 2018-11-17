import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';
import { loginAdmin, clearErrors } from "../../util/session_api_util";


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/login">Login</Link>,
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: admin => dispatch(loginAdmin(admin)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
