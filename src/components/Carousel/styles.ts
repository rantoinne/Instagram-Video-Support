import { COLOR_CODES, PADDINGS, IMAGE_HEIGHT, width, FONT_FAMILY } from '@utils';
import { StyleSheet } from 'react-native';

const ITEM_LENGTH = width

const styles = StyleSheet.create({
  containerStyles: {
    width: '100%',
  },
  indexWrapper: {
    position: 'absolute',
    top: 50,
    right: 4,
    backgroundColor: COLOR_CODES.BLACK,
    borderRadius: 2,
    padding: PADDINGS.X_SMALL,
    paddingVertical: 2,
  },
  currentIndexText: {
    fontSize: 8,
    color: COLOR_CODES.WHITE,
    fontFamily: FONT_FAMILY.MEDIUM,
  },
  imageWrapperContainer: { width: ITEM_LENGTH, marginTop: PADDINGS.SMALL },
  imageWrapper: {
    width: ITEM_LENGTH,
    alignItems: 'center',
  },
  imageStyle: {
    width,
    height: IMAGE_HEIGHT,
  },
  flatListStyle: { width },
});

export default styles;
