import React, {memo} from 'react';

//Component Modules
import ListNSearchInputView from './ListNSearchInputView';
import ListNSearchProvider from './ListNSearchProvider';
import ListNSearchModal from './ListNSearchModal';

const ListNSearch = memo((props) => {
  const {
    inputTitle,
    onJump,
    modalData,
    onSetValue,
    displayValue,
    visible,
    onShow,
    onHide,
    hideValue,
    isValidInput,
    iconName,
    optionalPH,
  } = props;
  // console.log(onJump);
  return (
    <ListNSearchProvider modalData={modalData}>
      <ListNSearchInputView
        inputTitle={inputTitle}
        displayValue={displayValue}
        onShow={onShow}
        isValidInput={isValidInput}
        iconName={iconName}
        optionalPH={optionalPH}
      />
      <ListNSearchModal
        onJump={onJump}
        onSetValue={onSetValue}
        onHide={onHide}
        hideValue={hideValue}
        visible={visible}
        modalData={modalData}
        inputTitle={inputTitle}
      />
    </ListNSearchProvider>
  );
});
export default ListNSearch;
