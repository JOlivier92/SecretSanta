import axios from "axios";
export const GET_ROOMS = "GET_ROOMS";
export const GET_ERRORS = "GET_ERRORS";
export const GET_CURRENT_ROOM = "GET_CURRENT_ROOM";

export const getRooms = payload => {
    return {
        type: GET_ROOMS,
        payload
    }
}

export const requestRooms = id => dispatch => {
    debugger;
    axios
        .get(`/api/admins/${id}`)
        .then(res => dispatch(getRooms(res)));
}


export const getCurrentRoom = payload => {
  return {
    type: GET_CURRENT_ROOM,
    payload
  };
};

export const requestCurrentRoom = id => dispatch => {
    axios
        .get(`/api/rooms/${id}`)
        .then(res => dispatch(getCurrentRoom(res)));
}