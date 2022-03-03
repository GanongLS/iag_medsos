import React, {
  createContext,
  memo,
  useMemo,
  useReducer,
  useContext,
  useCallback,
} from 'react';

const appStateContext = createContext({});
const appActionContext = createContext({});

//Head, AppProvider dibuat sebagai Provider data apps seperti loading dan refresh, netState, Error dan Success.
const AppProvider = memo(props => {
  const {children} = props;
  const initialState = {
    refresh: false,
    isLoading: false, //Loading cukup disini saja.
    isOnline: true,
    isNetReachable: true,
    error: false,
    errMessage: null,
    message: false,
    mesMessage: null,
    success: false,
    sucMessage: null,
  };
  // standard penulisan reducer action.type menggunakan camelCase
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'update':
        return {
          ...prevState,
          ...action.state,
        };

      case 'onError':
        return {
          ...prevState,
          error: true,
          errMessage: action.err,
          isLoading: false,
        };
      case 'delErrMessage':
        return {
          ...prevState,
          error: false,
          errMessage: null,
          isLoading: false,
        };
      case 'onMessage':
        return {
          ...prevState,
          message: true,
          mesMessage: action.mes,
          isLoading: false,
        };
      case 'delMesMessage':
        return {
          ...prevState,
          message: false,
          mesMessage: null,
          isLoading: false,
        };
      case 'onSuccess':
        return {
          ...prevState,
          success: true,
          sucMessage: action.mes,
          isLoading: false,
        };
      case 'delSuccess':
        return {
          ...prevState,
          success: false,
          sucMessage: null,
          isLoading: false,
        };
      case 'clearApp':
        return {
          ...initialState,
        };
      default:
        throw new Error(
          `Unexpected type of action. \n the actiontype was ${action.type}`,
        );
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = useCallback(
    state => {
      dispatch({type: 'update', state});
    },
    [dispatch],
  );

  const appState = useMemo(() => state, [state]);
  const appAction = useMemo(
    () => ({
      onGetState: fun => fun(state), //entah bener apa engga, cari aja lagi nanti.
      onRefreshing: async () => {
        setState({refresh: true});
        setTimeout(() => {
          setState({refresh: false});
        }, 5000);
      },
      offRefreshing: async () => {
        setState({refresh: false});
      },
      onLoading: async () => {
        setState({isLoading: true});
        setTimeout(() => {
          setState({isLoading: false});
        }, 30000);
      },
      offLoading: async () => {
        setState({isLoading: false});
      },

      onSetOnline: async netStatus => {
        setState({isOnline: netStatus});
      },
      onSetReachableNet: async netReachable => {
        setState({isNetReachable: netReachable});
      },

      onError: async err => {
        dispatch({type: 'onError', err});
      },
      onDeleteError: async () => {
        dispatch({type: 'delErrMessage'});
      },
      onMessage: async mes => {
        dispatch({type: 'onMessage', mes});
      },
      onDeleteMessage: async () => {
        dispatch({type: 'delMesMessage'});
      },

      goRefresh: async () => {
        setState({refresh: true});
        setState({isLoading: true});
        setState({refresh: false});
      },
      onSuccess: async mes => {
        dispatch({type: 'onMessage', mes});
      },
      onDeleteMessage: async () => {
        dispatch({type: 'delMesMessage'});
      },
      onClearApp: () => {
        dispatch({
          type: 'clearApp',
        });
      },
    }),
    [state, dispatch, setState],
  );

  return (
    <appStateContext.Provider value={appState}>
      <appActionContext.Provider value={appAction}>
        {children}
      </appActionContext.Provider>
    </appStateContext.Provider>
  );
});

const useAppState = () => {
  const context = useContext(appStateContext);
  if (context === undefined) {
    console.log('useAppState can only be used inside AppProvider');
    throw new Error('useAppState can only be used inside AppProvider');
  }
  return context;
};
const useAppAction = () => {
  const context = useContext(appActionContext);
  if (context === undefined) {
    console.log('useAppAction can only be used inside AppProvider');
    throw new Error('useAppAction can only be used inside AppProvider');
  }
  return context;
};

export default AppProvider;
export {useAppState, useAppAction, appStateContext, appActionContext};
