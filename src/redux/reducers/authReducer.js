import { DO_FORGOT_PASSWORD, DO_LOGIN } from './../actions/constAction';

export default function reducer(state = {
  user: null,
  status: '',
  errors: null,
  message: null,
}, action) {
  switch (action.type) {

    /*<----------------------------------------------------------------------------------=>*/
    //<= DO_LOGIN =>>//
    /*<----------------------------------------------------------------------------------=>*/

    case `${DO_LOGIN}_PENDING`:
      return {
        ...state,
        status: 'pending', message: null, errors: null
      };

    case `${DO_LOGIN}_SUCCESS`:
      return {
        ...state,
        status: 'success', user: action.payload, message: null, errors: null
      };

    case `${DO_LOGIN}_ERROR`:
      return {
        ...state,
        status: 'error', message: null, user: null, errors: action.payload.data.error.error_details
      };

    /*<----------------------------------------------------------------------------------=>*/
    //<= DO_FORGOT_PASSWORD =>>//
    /*<----------------------------------------------------------------------------------=>*/

    case `${DO_FORGOT_PASSWORD}_PENDING`:
      return {
        ...state,
        status: 'pending', message: null, errors: null
      };

    case `${DO_FORGOT_PASSWORD}_SUCCESS`:
      return {
        ...state,
        status: 'success', message: action.payload.data.data.message, errors: null
      };

    case `${DO_FORGOT_PASSWORD}_ERROR`:
      return {
        ...state,
        status: 'error', message: null, errors: action.payload.data.error.error_details
      };

    default:
      return state;
  }
}
