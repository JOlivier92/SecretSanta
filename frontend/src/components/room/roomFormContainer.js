import RoomForm from './roomForm'
import {connect} from 'react-redux';
import {createNewRoom} from '../../util/room_api_util'



const mapDispatchToProps = (dispatch) => {
  return {
    sendForm: (requirements) => dispatch(createNewRoom(requirements))
  };
};

export default connect(null, mapDispatchToProps)(RoomForm)
