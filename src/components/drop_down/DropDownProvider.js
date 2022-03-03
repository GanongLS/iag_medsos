import React, {
  createContext,
  memo,
  useReducer,
  useMemo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

const dropDonwnContext = createContext({});

const DropDownProvider = memo(props => {
  const {modalData} = props;
  const initialDropDownData = {
    position: {pX: 0, pY: 0},
    dimension: {height: 0, width: 0},
    data: modalData,
  };
  //action type menggunakan standard camelCase dalam bentuk string
  const dropDownReducer = (prevData, action) => {
    switch (action.type) {
      case 'setPosition':
        return {
          ...prevData,
          position: {pX: action.pX, pY: action.pY},
          dimension: {height: action.height, width: action.width},
        };
      case 'setData':
        return {
          ...prevData,
          data: action.data,
        };
      case 'clearDropDown':
        return {
          ...initialDropDownData,
        };
      default:
        throw new Error('Unexpected type of action');
    }
  };

  const [dropDownData, dispatch] = useReducer(
    dropDownReducer,
    initialDropDownData,
  );
  const dropDownContextValue = useMemo(
    () => ({
      dropDownData: dropDownData,
      onSetPosition: (width, height, pX, pY) => {
        dispatch({type: 'setPosition', width, height, pX, pY});
      },
      onSetData: data => {
        dispatch({type: 'setData', data});
      },
      onClearDropDown: () => {
        dispatch({
          type: 'clearDropDown',
        });
      },
    }),
    [dropDownData, dispatch],
  );

  useEffect(() => {
    dropDownContextValue.onSetData(modalData);
  }, [modalData]);

  return (
    <dropDonwnContext.Provider value={dropDownContextValue}>
      {props.children}
    </dropDonwnContext.Provider>
  );
});
DropDownProvider.propTypes = {onDataUpdate: PropTypes.func};
DropDownProvider.defaultProps = {
  modalData: null,
};

export default DropDownProvider;
export {dropDonwnContext};
