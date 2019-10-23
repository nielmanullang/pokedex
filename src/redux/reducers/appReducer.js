import { FETCH_FIRST_OPEN, REMOVE_FIRST_OPEN, SET_FIRST_OPEN } from './../actions/constAction';

export default function reducer(state = {
  firstOpen: null,
  status: ''
}, action) {
  switch (action.type) {

    /*<----------------------------------------------------------------------------------=>*/
    //<= FETCH_FIRST_OPEN =>>//
    /*<----------------------------------------------------------------------------------=>*/

    case `${FETCH_FIRST_OPEN}_PENDING`:
      return {
        ...state,
        status: 'pending', message: null, errors: null
      };

    case `${FETCH_FIRST_OPEN}_SUCCESS`:
      return {
        ...state,
        status: "success", firstOpen: action.payload, message: null, errors: null
      };

    case `${FETCH_FIRST_OPEN}_ERROR`:
      return {
        ...state,
        status: 'error', firstOpen: false, user: null, message: null, errors: action.payload
      };

    /*<----------------------------------------------------------------------------------=>*/
    //<= SET_FIRST_OPEN =>>//
    /*<----------------------------------------------------------------------------------=>*/

    case `${SET_FIRST_OPEN}_PENDING`:
      return {
        ...state,
        status: 'pending', message: null, errors: null
      };

    case `${SET_FIRST_OPEN}_SUCCESS`:
      return {
        ...state,
        status: action.payload, firstOpen: true, message: null, errors: null
      };

    case `${SET_FIRST_OPEN}_ERROR`:
      return {
        ...state,
        status: 'error', firstOpen: false, message: null, errors: action.payload
      };

    /*<----------------------------------------------------------------------------------=>*/
    //<= REMOVE_FIRST_OPEN =>>//
    /*<----------------------------------------------------------------------------------=>*/

    case `${REMOVE_FIRST_OPEN}_PENDING`:
      return {
        ...state,
        status: 'pending', message: null, errors: null
      };

    case `${REMOVE_FIRST_OPEN}_SUCCESS`:
      return {
        ...state,
        status: action.payload, firstOpen: false, message: null, errors: null
      };

    case `${REMOVE_FIRST_OPEN}_ERROR`:
      return {
        ...state,
        status: 'error', firstOpen: true, message: null, errors: action.payload
      };

    default:
      return state;
  }
}
