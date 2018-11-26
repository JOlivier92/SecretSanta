import RoomForm from './room_form'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {createNewRoom} from '../../util/room_api_util'


const mapStateToProps = ({ session }) => {
  return {
    currentUser: session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendForm: (requirements) => dispatch(createNewRoom(requirements))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomForm))
