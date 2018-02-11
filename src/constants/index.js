export const API_ROOT = 'http://localhost:3000/api/v1'
export const HEADERS = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
};

//actions
export const ASYNC_START = 'ASYNC_START'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_USER_DATA = 'SET_USER_DATA'
export const LOGOUT_USER = 'LOGOUT_USER'
export const ADD_USER = 'ADD_USER'
export const ADD_SONG = 'ADD_SONG'
export const SONG_LOADING_ERROR = 'SONG_LOADING_ERROR'
export const ADD_SONG_START = 'ADD_SONG_START'
export const DELETE_SONG = 'DELETE_SONG'
export const ADD_SONG_NOTES = 'ADD_SONG_NOTES'
export const ADD_BAND = 'ADD_BAND'
export const DELETE_BAND = 'DELETE_BAND'
export const ADD_SET_LIST = 'ADD_SET_LIST'
export const DELETE_SET_LIST = 'DELETE_SET_LIST'
export const ADD_SET_SONG = 'ADD_SET_SONG'
export const DELETE_SET_SONG = 'DELETE_SET_SONG'
export const INCREMENT_SET_ORDER = 'INCREMENT_SET_ORDER'
export const DECREMENT_SET_ORDER = 'DECREMENT_SET_ORDER'

//non-backend actions

export const ADD_SONG_CLICK = 'ADD_SONG_CLICK'
