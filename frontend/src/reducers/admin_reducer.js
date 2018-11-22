import { GET_ROOMS, GET_CURRENT_ROOM } from '../util/admin_api_util';


const roomReducer = (state = {}, action) => {
    let newState ;
    switch (action.type) {
        case GET_ROOMS:
            newState = Object.assign({}, action.payload);
            return newState;
        case GET_CURRENT_ROOM:
            newState = Object.assign({}, action.payload);
            return newState;
        default:
            return state;
    }
}

export default roomReducer;