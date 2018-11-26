import LinkForm from './link_form'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {createNewParticipant} from '../../util/participants_api_util'


const mapDispatchToProps = (dispatch) => {
  return ({
    sendForm: (requirements) => dispatch(createNewParticipant(requirements))
  });
};

export default withRouter(connect(null, mapDispatchToProps)(LinkForm))