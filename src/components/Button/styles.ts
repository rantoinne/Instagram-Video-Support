import { COLOR_CODES, FONT_FAMILY, PADDINGS, width } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyles: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - (width * 0.1),
    paddingHorizontal: PADDINGS.MEDIUM,
    backgroundColor: COLOR_CODES.PICTON_BLUE,
  },
  titleStyle: {
    fontSize: 14,
    textAlign: 'center',
    color: COLOR_CODES.WHITE,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
  }
});

export default styles;
