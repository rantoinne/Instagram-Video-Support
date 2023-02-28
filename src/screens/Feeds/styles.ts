import {
  width,
  PADDINGS,
  COLOR_CODES,
  IMAGE_DIMENSIONS,
  FONT_FAMILY,
} from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewStyles: { flex: 1, backgroundColor: COLOR_CODES.WHITE },
  appLogoStyle: {
    width: width - (width * 0.75),
    alignSelf: 'center',
    height: IMAGE_DIMENSIONS.SMALL * 2.2,
    tintColor: COLOR_CODES.BLACK,
    resizeMode: 'contain',
  },
  headerContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR_CODES.WHITE,
    paddingHorizontal: PADDINGS.MEDIUM
  },
  headerButtonsContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  messengerButton: { marginLeft: PADDINGS.LARGE },
  inputWrapper: {
    paddingHorizontal: PADDINGS.SMALL,
    backgroundColor: COLOR_CODES.ALTO,
    marginHorizontal: PADDINGS.SMALL,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: PADDINGS.MEDIUM,
    borderRadius: 4,
  },
  searchText: {
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: PADDINGS.MEDIUM,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: COLOR_CODES.ALTO,
    borderColor: COLOR_CODES.HIBISCUS,
  },
});

export default styles;
