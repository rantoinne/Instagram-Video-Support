import { COLOR_CODES, FONT_FAMILY, IMAGE_DIMENSIONS, PADDINGS, POST_HEIGHT, width } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageView: {
    width,
    height: POST_HEIGHT - 180,
    marginTop: PADDINGS.SMALL
  },
  mainContainer: {
    width,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: PADDINGS.MEDIUM,
  },
  userInfoHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  avatarRenderer: {
    maxWidth: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: IMAGE_DIMENSIONS.LARGE + 4,
    height: IMAGE_DIMENSIONS.LARGE + 4,
    borderRadius: IMAGE_DIMENSIONS.LARGE,
    resizeMode: 'contain',
    borderWidth: 1,
  },
  userInfoView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: PADDINGS.X_SMALL,
  },
  userName: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLOR_CODES.BLACK,
  },
  accountName: {
    fontSize: 10,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLOR_CODES.BLACK,
  },
  optionsMenu: { maxWidth: '20%' },
  actionsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: PADDINGS.MEDIUM,
    justifyContent: 'space-between',
  },
  leftActionsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  marginLeftStyle: { marginLeft: PADDINGS.LARGE },
  likesCount: {
    fontSize: 12,
    color: COLOR_CODES.BLACK,
    fontFamily: FONT_FAMILY.MEDIUM,
    width: '100%',
    textAlign: 'left',
  },
  userNameText: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    width: '100%',
    marginTop: PADDINGS.X_SMALL,
    textAlign: 'left',
    color: COLOR_CODES.BLACK,
  },
  caption: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLOR_CODES.BLACK,
    textAlign: 'left',
  },
});

export default styles;
