import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {useAppAction} from './AppProvider';
import userList from './userDummy';

const userStateContext = createContext({});
const userActionContext = createContext({});

//Head, UserProvider dibuat sebagai Provider data user, semua data yang digunakan user hampir setiap halaman ada disini.
const UserProvider = memo(props => {
  const {children} = props;
  const appAction = useAppAction();
  const {onError, offLoading} = appAction;
  const initialState = {
    token: null,
    username: null,
    loginData: null,
    confnCode: null,
    registerData: null,
    emailOK: false,
  };
  // standard penulisan reducer action.type menggunakan camelCase
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'update':
        return {
          ...prevState,
          ...action.state,
        };
      case 'login':
        return {
          ...prevState,
          token: action.token,
          username: action.username,
          loginData: action.data,
        };

      case 'setEmailCode':
        return {
          ...prevState,
          emailCode: action.code,
        };
      case 'getRegister':
        return {
          ...prevState,
          registerData: action.res,
        };
      case 'emailConfn':
        return action.text == prevState.emailCode
          ? {...prevState, emailOK: true}
          : {...prevState, emailOK: false};
      case 'forgotPassword':
        return {
          ...prevState,
          forgotCode: action.code,
        };
      case 'logout':
        return {
          ...prevState,
          token: null,
        };
      default:
        throw new Error(
          `Unexpected type of action. \n the actiontype was ${action.type}`,
        );
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = state => {
    dispatch({type: 'update', state});
  };

  const storeLoginData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@login', jsonValue);
    } catch (e) {
      onError(e);
    }
  };

  const getLoginData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@login');
      const res = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (res) setState({token: res.token});
    } catch (e) {
      onError(e);
    }
  };
  useEffect(() => {
    getLoginData();
  }, []);

  const userState = useMemo(() => state, [state]);
  const userAction = useMemo(
    () => ({
      onSignIn: async data => {
        const {loginID, password} = data;
        let _user = null;

        for (const key in userList) {
          let user = userList[key];
          if (
            (user.nama == loginID || user.email == loginID) &&
            user.password == password
          ) {
            _user = user;
          }
        }

        if (_user == null) {
          onError('User tidak diketahui.');
        } else {
          setState({token: _user.token});
          storeLoginData(_user);
        }
        offLoading();
      },

      onEmailConfirmation: async Data => {
        dispatch({type: 'emailConfn', text: Data.confnCode});
        return true;
      },
      onForgotPassword: async data => {
        const {email} = data;
        const code = email == state.registerData.email ? '123456' : null;
        try {
          return code != null
            ? (dispatch({type: 'forgotPassword', code}), offLoading(), true)
            : false;
        } catch (err) {
          catchError(err, 'Forgot Password');
        }
      },
      onSignOut: async () => {
        dispatch({type: 'logout'});
      },
    }),
    [state, dispatch, appAction],
  );

  const catchError = (err, name) => {
    if (err.hasOwnProperty('message')) {
      onError(`${err.message}`);
    } else {
      onError(`${err},${err.error}`);
    }
    console.log(`Error ${name}`, {err: err});
    offLoading();
    return false;
  };

  // useEffect(() => {
  //   userAction.onGetRegister();
  // }, []);

  return (
    <userStateContext.Provider value={userState}>
      <userActionContext.Provider value={userAction}>
        {children}
      </userActionContext.Provider>
    </userStateContext.Provider>
  );
});

const useUserState = () => {
  const context = useContext(userStateContext);
  if (context === undefined) {
    console.log('useUserState can only be used inside AppProvider');
    throw new Error('useUserState can only be used inside AppProvider');
  }
  return context;
};
const useUserAction = () => {
  const context = useContext(userActionContext);
  if (context === undefined) {
    console.log('useUserAction can only be used inside AppProvider');
    throw new Error('useUserAction can only be used inside AppProvider');
  }
  return context;
};

export default UserProvider;
export {userStateContext, userActionContext, useUserState, useUserAction};
