import * as SessionAPIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const CLEAR_ALL_ERRORS = "CLEAR_ALL_ERRORS";

const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const clearAllErrors = () => ({
  type: CLEAR_ALL_ERRORS,
});

export const login = (user) => (dispatch) =>
  SessionAPIUtil.login(user)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
    .fail((res) => dispatch(receiveSessionErrors(res.responseJSON)));

export const logout = () => (dispatch) =>
  SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((res) => dispatch(receiveSessionErrors(res.responseJSON)));

export const signup = (user) => (dispatch) =>
  SessionAPIUtil.signup(user)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
    .fail((res) => dispatch(receiveSessionErrors(res.responseJSON)));

export const fetchCurrentUser = (userId) => (dispatch) =>
  SessionAPIUtil.fetchCurrentUser(userId)
    .then((payload) => dispatch(receiveCurrentUser(payload)))
    .fail((res) => dispatch(receiveSessionErrors(res.responseJSON)));
