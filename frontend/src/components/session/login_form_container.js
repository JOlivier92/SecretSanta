import { connect } from 'react-redux';
import LoginForm from './login_form';
import { loginAdmin } from "../../util/session_api_util";


const mapStateToProps = ({ }) => {
    return {
        formType: 'login',
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: admin => dispatch(loginAdmin(admin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
