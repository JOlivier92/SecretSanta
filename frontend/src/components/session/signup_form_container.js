import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignupForm from './signup_form';
import { signupAdmin, clearErrors } from '../../util/session_api_util';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: admin => dispatch(signupAdmin(admin)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
