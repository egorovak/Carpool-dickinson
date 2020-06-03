import { LOGIN, LOGIN_SUCCESS, FOUND_BAD_WORD, REGISTER } from "../constants/auth-types";
import firebase from '../../firebase/firebaseConfig';

export const toggleLogin = (payload) => {

    return { type: LOGIN, payload }
};

/**
 * Ask reducer file. Success and Fail should be defined as type also.
 */
export const register = (payload) => {
    //TODO implement SIGN UP functionality

};

export const signIn = (payload) => {
    //TODO implement signIn
    return async (dispatch) => {
        const db = firebase.firestore();
        // New code for log in fail form
        const response =  await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(err => {
            // Print error to Login.jsx
            document.querySelector(".error").innerHTML = err.message;
            // From previous version of this code
            console.log('dispatch error', err);
        });
        // document.querySelector(".error").innerHTML = '';
        dispatch({type: LOGIN_SUCCESS, payload: response});
    }
};

export const registerSuccess = (response) =>{
    //TODO call if the above register was successful
}
export const registerFail = (response) =>{
    //TODO call if the above register was failed
}
export const signInSuccess = (response) =>{
    //TODO call if the above sign in was successful
}
export const signInFail = (response) =>{
    //TODO call if the above sign in failed
}
