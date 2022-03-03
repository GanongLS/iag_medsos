import React, {useContext, memo} from 'react';
import LoadingModal from './LoadingModal';
import {useAppState, useAppAction} from '../../providers/AppProvider';
import ModalPeringatan from './ModalPeringatan';

const ScreenModal = memo(() => {
  const {offLoading, onDeleteError, onSetOnline, onSignOut, onDeleteMessage} =
    useAppAction();
  const {isLoading, error, isOnline, errMessage, message, mesMessage} =
    useAppState();

  const onOKOffline = () => {
    onSetOnline(true);
    onSignOut();
  };

  return (
    <>
      <ModalPeringatan //OfflineModal harus dibuat sendiri
        visible={!isOnline}
        OK={onOKOffline}
        pesan={
          'Anda sedang tidak tersambung ke internet, silakan sambungkan gawai Anda ke internet terlebih dahulu!'
        }
      />
      <LoadingModal visible={isLoading} Hide={offLoading} />
      <ModalPeringatan // ErrorModal harus dibuat sendiri
        visible={error}
        OK={onDeleteError}
        pesan={errMessage}
      />
      <ModalPeringatan //
        visible={message}
        OK={onDeleteMessage}
        pesan={mesMessage}
      />
    </>
  );
});

export default ScreenModal;
