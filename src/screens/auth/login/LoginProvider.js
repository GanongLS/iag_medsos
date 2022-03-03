import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import {useAppAction} from '../../../providers/AppProvider';
import {useUserAction} from '../../../providers/UserProvider';

const loginContext = createContext({});

// @ mengapa menggunakan useReducer? karena aman, enak dan rapih.

const LoginProvider = memo(props => {
  const {onLoading, onError} = useAppAction();
  const {onSignIn, onGetRegister} = useUserAction();

  const initialState = {
    data: null,
    id: '',
    isValidID: true,
    password: '',
    isValidPassword: true,
    isSecurePassword: true,
  };

  //action type menggunakan standard camelCase dalam bentuk string
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'update':
        return {
          ...prevState,
          ...action.state,
        };
      case 'inputLoginData':
        return {
          ...prevState,
          data: action.data,
        };
      case 'clearLogin':
        return {
          ...initialState,
        };
      default:
        throw new Error('Unexpected type of action');
    }
  };

  const [state, dispatch] = useReducer(loginReducer, initialState);
  const signInValidation =
    state.id != '' &&
    state.isValidID &&
    state.password != '' &&
    state.isValidPassword;
  const signInFeedData = {
    loginID: state.id,
    password: state.password,
  };

  const setState = useCallback(
    state => {
      dispatch({type: 'update', state});
    },
    [dispatch],
  );

  const updateState = useCallback(
    fn => {
      const newState = fn(state);
      dispatch({type: 'update', state: newState});
    },
    [dispatch],
  );

  const loginContextValue = useMemo(
    () => ({
      state: state,
      onGetState: fun => fun(state),
      onIDChange: (text, min_Text) => {
        if (text.length >= min_Text) {
          setState({id: text, isValidID: true});
        } else {
          setState({id: text, isValidID: false});
        }
      },
      onIDValidation: (text, min_Text) => {
        if (text.length >= min_Text) {
          setState({isValidID: true});
        } else {
          setState({isValidID: false});
        }
      },
      onPasswordChange: (text, min_Text) => {
        if (text.length >= min_Text) {
          setState({password: text, isValidPassword: true});
        } else {
          setState({password: text, isValidPassword: false});
        }
      },
      onPasswordValidation: (text, min_Text) => {
        if (text.length >= min_Text) {
          setState({isValidPassword: true});
        } else {
          setState({isValidPassword: false});
        }
      },
      onToggleSecurePassword: () => {
        updateState(s => ({isSecurePassword: !s.isSecurePassword}));
      },

      // onInputLoginData: data => {
      //   dispatch({
      //     type: 'inputLoginData',
      //     data,
      //   });
      // },
      onRequestSignIn: async () => {
        if (signInValidation) {
          await onLoading();
          // onSignIn(signInFeedData);
          onSignIn({
            loginID: state.id,
            password: state.password,
          });
        } else {
          onError('Data login tidak lengkap.');
        }
      },
      onClearLogin: async () => {
        // await onClearAuthInput();
        dispatch({
          type: 'clearLogin',
        });
      },
    }),
    [state, dispatch, setState],
  );
  return (
    <loginContext.Provider value={loginContextValue}>
      {props.children}
    </loginContext.Provider>
  );
});

const useLogin = () => {
  const context = useContext(loginContext);
  if (context === undefined) {
    console.log('useLogin can only be used inside LoginPrivider');
    throw new Error('useLogin can only be used inside LoginProvider');
  }
  return context;
};

export default LoginProvider;
export {loginContext, useLogin};
