import {
  PADDINGS,
  COLOR_CODES,
  width,
} from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewStyles: { flex: 1, backgroundColor: COLOR_CODES.WHITE },
  inputWrapper: { paddingHorizontal: PADDINGS.SMALL },
  inputContainerStyle: {
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: COLOR_CODES.ALTO,
    borderColor: COLOR_CODES.HIBISCUS,
  },
  imageStyle: { width: width / 3, height: width / 3.5 },
});

export default styles;
