import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { registerAdmin } from "../../util/session_api_util";


const mapStateToProps = ({}) => {
    return {
        formType: 'signup',
    };
};

const mapDispatchToProps = dispatch => ({
  processForm: admin => dispatch(registerAdmin(admin))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
