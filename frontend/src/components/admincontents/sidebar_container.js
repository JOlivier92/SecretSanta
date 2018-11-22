import Sidebar from './sidebar'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createNewRoom } from '../../util/room_api_util'



const mapDispatchToProps = (dispatch) => {
    return {
        getRooms: (id) => dispatch(getRooms(id))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Sidebar))
