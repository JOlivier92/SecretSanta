import {ADD_NEW_ROOM} from '../util/room_api_util'


const roomReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case ADD_NEW_ROOM:
            let newState = Object.assign({}, action.payload)
            return newState
        default:
            return state;
    }
}

export default roomReducer;