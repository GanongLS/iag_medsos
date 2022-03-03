import React, {memo} from 'react';

//Component Modules
import ShortListInputView from './ShortListInputView';
import ShortListModal from './ShortListModal';

const ShortList = memo((props) => {
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
    <>
      <ShortListInputView
        inputTitle={inputTitle}
        displayValue={displayValue}
        onShow={onShow}
        isValidInput={isValidInput}
        iconName={iconName}
        optionalPH={optionalPH}
      />
      <ShortListModal
        modalData={modalData}
        onJump={onJump}
        onSetValue={onSetValue}
        onHide={onHide}
        hideValue={hideValue}
        visible={visible}
        modalData={modalData}
        inputTitle={inputTitle}
      />
    </>
  );
});
export default ShortList;
