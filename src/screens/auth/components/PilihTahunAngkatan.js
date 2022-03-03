import React, {useContext, memo} from 'react';
import {View} from 'react-native';

//Components Modules
import {authInputContext} from '../../../Provider/AuthInputProvider';
import ListNSearch from '../../../Components/ListNSearch/ListNSearch';
import listTahunAngkatan from '../Data/listTahunAngkatan';

const PilihTahunAngkatan = memo((props) => {
  const {onJump} = props;
  const {
    authInputState: {modalThAngVisible, thAng, isValidThAng},
    onShowModalThAng,
    onHideModalThAng,
    onSetThAng,
  } = useContext(authInputContext);

  const arrayTahun = listTahunAngkatan.map((year, index) => {
    return {
      id: index.toString(),
      name: year.tahun.toString(),
      value: year.tahun.toString(),
    };
  });
  // console.log(arrayTahun);
  return (
    <>
      {arrayTahun ? (
        <ListNSearch
          inputTitle="Tahun Angkatan"
          optionalPH={'\n(untuk konfirmasi)'}
          iconName="graduation-cap"
          onJump={onJump}
          modalData={arrayTahun}
          onSetValue={onSetThAng}
          visible={modalThAngVisible}
          onShow={onShowModalThAng}
          onHide={onHideModalThAng}
          hideValue={thAng}
          displayValue={thAng}
          isValidInput={isValidThAng}
        />
      ) : (
        <View />
      )}
    </>
  );
});

export default PilihTahunAngkatan;
