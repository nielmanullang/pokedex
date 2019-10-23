import { NavigationActions, StackActions } from 'react-navigation';
import { ERROR_STATUS, PENDING_STATUS, SUCCESS_STATUS } from './../../redux/actions/constAction';
import service from './../service';
//------------------------------------------------------------------------------------------------------------------------=>
/*<<MAP STATE TO PROPS>>*/
//------------------------------------------------------------------------------------------------------------------------=>

export const mapStateToProps = (state) => ({
  state: state
});

//------------------------------------------------------------------------------------------------------------------------=>
/*<< HANDLE COMMON DISPATCH>>*/
//------------------------------------------------------------------------------------------------------------------------=>
export const commonDispatch = (dispatch, data, status, action) => {
  dispatch({
    type: `${action}_${SUCCESS_STATUS}`,
    status: status,
    payload: data
  })
}
//------------------------------------------------------------------------------------------------------------------------=>
/*<< HANDLE CALLBACK >>*/
//------------------------------------------------------------------------------------------------------------------------=>

export const handleCallbackRes = (dispatch, callback, action) => {
  if (callback != null) {
    if (callback == 'pending') {
      // console.log(`PENDING ACTION ${action}`);
      dispatch(doFetchPending(`${action}_${PENDING_STATUS}`, PENDING_STATUS, callback));
    } else {
      // console.log(`SUKSESS ACTION ${action}`);
      dispatch(doFetchSuccess(`${action}_${SUCCESS_STATUS}`, SUCCESS_STATUS, callback));
    }

  } else {
    // console.log(`ERROR ACTION ${action}`);
    dispatch(doFetchError(`${action}_${ERROR_STATUS}`, ERROR_STATUS, null));
  }
}

//------------------------------------------------------------------------------------------------------------------------=>
/*<< HANDLE CALLBACK API >>*/
//------------------------------------------------------------------------------------------------------------------------=>

export const handleCallbackApiRes = (dispatch, callback, action) => {
  if (callback != null && callback.data.message == 'OK') {
    dispatch(doFetchSuccess(`${action}_${SUCCESS_STATUS}`, SUCCESS_STATUS, callback));
  } else {
    var tempdata = [];
    if (callback.data.message === 'ERROR') {
      var tempdata = callback.data.result;
    }
    dispatch(doFetchError(`${action}_${ERROR_STATUS}`, ERROR_STATUS, tempdata));
  }
}

//------------------------------------------------------------------------------------------------------------------------=>
/*<<getAsyncStorage>>*/
//------------------------------------------------------------------------------------------------------------------------=>
export const getAsyncStoreSave = (key, data, callback, dataPass) => {
  storage.save({
    key: key,
    data: data
  }).then(result => {
    callback && callback.call(this, "success", dataPass);
  }).catch(err => {
    callback && callback.call(this, null);
  });
}

export const getAsyncStoreLoad = (key, callback, dataPass) => {
  storage.load({
    key: key,
    autoSync: true,
    syncInBackground: true,
    syncParams: {
      extraFetchOptions: {
      },
      someFlag: true,
    },
  }).then(result => {
    callback && callback.call(this, result, dataPass);
  }).catch(err => {
    callback && callback.call(this, null);
  })
}

export const getAsyncStoreRemove = (key, callback) => {
  storage.remove({
    key: key
  }).then(result => {
    callback && callback.call(this, "success");
  }).catch(err => {
    callback && callback.call(this, null);
  });
}

//------------------------------------------------------------------------------------------------------------------------=>
/*<<apiCall>>*/
//------------------------------------------------------------------------------------------------------------------------=>
export const apiCall = ({
  post: async (endpoint, data, callback, header, dataPass) => {
    await service.post(endpoint, data, header).then((result) => {
      var tempResult = result ? result : null;
      callback && callback.call(this, result, dataPass);

    }).catch(error => {
      var tempResult = error.response ? error.response : null;
      callback && callback.call(this, tempResult);
    });
  },
  put: async (endpoint, data, callback, header, dataPass) => {
    await service.put(endpoint, data, header).then((result) => {
      var tempResult = result ? result : null;
      callback && callback.call(this, result, dataPass);

    }).catch(error => {
      var tempResult = error.response ? error.response : null;
      callback && callback.call(this, tempResult);
    });
  },
  get: async (endpoint, header, callback, dataPass) => {
    await service.get(endpoint, header).then((result) => {
      callback && callback.call(this, result, dataPass);
    }).catch(error => {
      var tempResult = error.response ? error.response : null;
      callback && callback.call(this, tempResult);
    });
  },
  delete: async (endpoint, data, callback, header, dataPass) => {
    await service.delete(endpoint, data, header).then((result) => {
      var tempResult = result ? result : null;
      callback && callback.call(this, result, dataPass);

    }).catch(error => {
      var tempResult = error.response ? error.response : null;
      callback && callback.call(this, tempResult);
    });
  },
});

/*------------------------------------------------------------------------------------------------------------------------=>*/
/*<<CLEAR-ERROR>>*/
/*>>----------------------------------------------------------------------------------------------------------------------=>*/
export const DO_CLEAR_ERROR = "DO_CLEAR_ERROR";
export const doClearError = () => ({
  type: DO_CLEAR_ERROR
});

/*>>---------------------------------------------------------------------------------------------------------------------=> */
/*<<FETCH_DATA>>*/
/*>>---------------------------------------------------------------------------------------------------------------------=> */

export const doFetchSuccess = (actPayload, status, payload) => ({
  type: actPayload,
  status,
  payload
})

export const doFetchPending = (actPayload, status, payload) => ({
  type: actPayload,
  status,
  payload
})

export const doFetchError = (actPayload, status, payload) => ({
  type: actPayload,
  status,
  payload
})

/*>>---------------------------------------------------------------------------------------------------------------------=> */
/*<<RESET NAVIGATION>>*/
/*>>---------------------------------------------------------------------------------------------------------------------=> */

export const resetNavigation = (targetRoute, navigation, dataPass) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: targetRoute,
        params: { dataPass }
      }),
    ],
  });
  navigation.dispatch(resetAction);
}
