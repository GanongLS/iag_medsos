import {labeledStatement} from '@babel/types';
import React, {
  createContext,
  memo,
  useMemo,
  useReducer,
  useContext,
  useCallback,
} from 'react';

const navOptionStateContext = createContext({});
const navOptionActionContext = createContext({});

//Head, NavOptionProvider dibuat sebagai Provider data navigation Option yang rumit, seperti menu bar di route utama.
const NavOptionProvider = memo(props => {
  const {children} = props;
  const initialState = {
    showMainHeader: true,
  };
  // standard penulisan reducer action.type menggunakan camelCase
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'update':
        return {
          ...prevState,
          ...action.state,
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

  const navOptionState = useMemo(() => state, [state]);
  const navOptionAction = useMemo(
    () => ({
      onGetState: fun => fun(state), //entah bener apa engga, cari aja lagi nanti.
      onShowMainHeader: async () => {
        setState({showMainHeader: true});
      },
      onHideMainHeader: () => {
        setState({showMainHeader: false});
      },
    }),
    [state, dispatch, setState],
  );

  return (
    <navOptionStateContext.Provider value={navOptionState}>
      <navOptionActionContext.Provider value={navOptionAction}>
        {children}
      </navOptionActionContext.Provider>
    </navOptionStateContext.Provider>
  );
});

const useNavOptionState = () => {
  const context = useContext(navOptionStateContext);
  if (context === undefined) {
    console.log('useNavOptionState can only be used inside NavOptionProvider');
    throw new Error(
      'useNavOptionState can only be used inside NavOptionProvider',
    );
  }
  return context;
};
const useNavOptionAction = () => {
  const context = useContext(navOptionActionContext);
  if (context === undefined) {
    console.log('useNavOptionAction can only be used inside NavOptionProvider');
    throw new Error(
      'useNavOptionAction can only be used inside NavOptionProvider',
    );
  }
  return context;
};

export default NavOptionProvider;
export {
  useNavOptionState,
  useNavOptionAction,
  navOptionStateContext,
  navOptionActionContext,
};
