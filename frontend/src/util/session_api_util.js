import axios from "axios";
import jwt_decode from "jwt-decode";

export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_CURRENT_ADMIN = "RECEIVE_CURRENT_ADMIN";

// We can use axios to set a default header
export const setAuthToken = token => {
    if (token) {
        // Apply to every request
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const registerAdmin = (adminData, history) => dispatch => {
    axios
        .post("/api/admins/register", adminData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header

            setAuthToken(token);
            // Decode token to get admin data
            const decoded = jwt_decode(token);
            // Set current admin
            dispatch(setCurrentAdmin(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const loginAdmin = adminData => dispatch => {
    axios
        .post("/api/admins/login", adminData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get admin data
            const decoded = jwt_decode(token);
            // Set current admin
            dispatch(setCurrentAdmin(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in admin
export const setCurrentAdmin = decoded => {
    return {
        type: RECEIVE_CURRENT_ADMIN,
        payload: decoded
    };
};

export const logoutAdmin = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current Admin to {} which will set isAuthenticated to false
    dispatch(setCurrentAdmin({}));
};
