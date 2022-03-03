import React, {
  createContext,
  memo,
  useReducer,
  useMemo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

const listNSearchContext = createContext({});

const ListNSearchProvider = memo((props) => {
  const {modalData} = props;
  const initialListNSearchData = {
    data: modalData,
    searchText: '',
  };
  //action type menggunakan standard camelCase dalam bentuk string
  const listNSearchReducer = (prevData, action) => {
    switch (action.type) {
      case 'setData':
        return {
          ...prevData,
          data: action.data,
        };
      case 'search':
        return {
          ...prevData,
          searchText: action.text,
          data: action.data,
        };
      case 'clearModalNsearch':
        return {
          ...initialListNSearchData,
        };
      default:
        throw new Error('Unexpected type of action');
    }
  };

  const [listNSearchData, dispatch] = useReducer(
    listNSearchReducer,
    initialListNSearchData,
  );
  const listNSearchContextValue = useMemo(
    () => ({
      listNSearchData: listNSearchData,
      onSetData: (data) => {
        dispatch({type: 'setData', data});
      },
      onSearch: (text) => {
        const newData = modalData.filter((item) => {
          return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        dispatch({type: 'search', data: newData, text});
      },
      onClearModalNSearch: () => {
        dispatch({
          type: 'clearModalNSearch',
        });
      },
    }),
    [listNSearchData, dispatch],
  );

  useEffect(() => {
    listNSearchContextValue.onSetData(modalData); //warn
  }, [modalData]);

  return (
    <listNSearchContext.Provider value={listNSearchContextValue}>
      {props.children}
    </listNSearchContext.Provider>
  );
});
ListNSearchProvider.propTypes = {onDataUpdate: PropTypes.func};
ListNSearchProvider.defaultProps = {
  modalData: null,
};

export default ListNSearchProvider;
export {listNSearchContext};
