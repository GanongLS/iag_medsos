import React, {memo, forwardRef} from 'react';
import PropTypes from 'prop-types';

//Component Modules
import DropDownInputView from './DropDownInputView';
import DropDownProvider from './DropDownProvider';
import DropDownModal from './DropDownModal';

const DropDown = memo(
  forwardRef((props, ref) => {
    const {
      inputTitle,
      optionalPH,
      iconName,
      onJump,
      modalData,
      onDataUpdate,
      displayValue,
      visible,
      onShow,
      onHide,
      hideValue,
      isValidInput,
    } = props;

    return (
      <DropDownProvider modalData={modalData}>
        <DropDownInputView
          ref={ref}
          inputTitle={inputTitle}
          displayValue={displayValue}
          onShow={onShow}
          isValidInput={isValidInput}
          optionalPH={optionalPH}
          iconName={iconName}
        />
        <DropDownModal
          onJump={onJump}
          onDataUpdate={onDataUpdate}
          onHide={onHide}
          hideValue={hideValue}
          visible={visible}
        />
      </DropDownProvider>
    );
  }),
);
DropDown.propTypes = {props: PropTypes.object};
export default DropDown;
