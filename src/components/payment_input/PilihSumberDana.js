import React, {useContext, useRef, memo, forwardRef, useEffect} from 'react';
import {Text, View, InteractionManager, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {normalize} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Constants Modules
import globalStyles, {textStyles} from '../../Styles/globalStyles';
import colors from '../../Constants/colors';

//Components Modules
import {paymentInputContext} from '../../Provider/PaymentInputProvider';
import ModalSumberDana from './ModalSumberDana';
import InputSumberDana from './InputSumberDana';

const PilihSumberDana = memo(
  forwardRef(({onJump}, ref) => {
    const {
      paymentInputData: {sumberDana},
      onShowModalSumberDana,
      onSetPosition,
    } = useContext(paymentInputContext);

    // const position = useRef(0);
    const ref_inputS = useRef(0);
    const onJumpRefS = () => {
      ref_inputS.current.focus();
    };

    return (
      <View>
        <View>
          <Text
            style={{
              ...textStyles.formLabel,
              marginBottom: 5,
              color: colors.dark,
            }}>
            Sumber Dana
          </Text>
          <TouchableOpacity
            ref={ref}
            collapsable={false}
            onLayout={({nativeEvent}) => {
              if (ref) {
                ref.current.measure((x, y, width, height, pageX, pageY) => {
                  onSetPosition(width, height, pageX, pageY);
                });
              }
            }}
            onPress={() => {
              onShowModalSumberDana();
            }}>
            <View style={globalStyles.rowSBULContainer}>
              <Text style={textStyles.h4Left}>{sumberDana}</Text>
              <MaterialCommunityIcons
                name="chevron-down"
                size={normalize(27)}
              />
            </View>
          </TouchableOpacity>
        </View>
        <ModalSumberDana onJump={onJumpRefS} />
        <InputSumberDana ref={ref_inputS} onJump={onJump} />
      </View>
    );
  }),
);
PilihSumberDana.propTypes = {onJump: PropTypes.func};
export default PilihSumberDana;
