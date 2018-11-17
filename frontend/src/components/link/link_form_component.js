import LinkForm from './link_form'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {createNewRoom} from '../../util/room_api_util'




const mapDispatchToProps = (dispatch) => {
  return ({
    sendForm: (requirements) => dispatch(createNewRoom(requirements))
  });
};

export default withRouter(connect(null, mapDispatchToProps)(LinkForm))