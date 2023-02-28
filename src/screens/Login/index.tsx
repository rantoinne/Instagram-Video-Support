import React, { FC, useState } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import {
  Button,
  Divider,
  InputField,
  GradientWrapper,
} from '@components';
import {
  PADDINGS,
  INPUT_TYPE,
  COLOR_CODES,
  loginOrSignupUser,
  storeUserSession,
} from '@utils';
import { ImageLinks } from '@images';
import styles from './styles';

interface Props {
  navigation: any;
}

export const Login: FC<Props> = ({ navigation }) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginRequestInProcess, setLoginRequestInProcess] = useState<boolean>(false);

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  }

  const loginUserHandler = async () => {
    setLoginRequestInProcess(true);
    await loginOrSignupUser();
    await storeUserSession(true);
    setLoginRequestInProcess(false);
    navigateToScreen('Tabs');
  }

  return (
    <GradientWrapper
      isScrollEnabled
      start={{ x: -0.5, y: 0.5 }}
      containerStyle={styles.containerStyle}
    >
      <Image
        style={styles.appLogoStyle}
        source={ImageLinks.instagram}
      />

      <Divider height={PADDINGS.X_LARGE} />

      {/* Credentials Input Fields */}
      <InputField
        value={userName}
        placeholder="Username"
        type={INPUT_TYPE.UNDERLINE}
        onChangeText={setUserName}
        inputStyle={styles.inputTextStyle}
        placeholderTextColor={COLOR_CODES.WHITE}
        containerStyle={styles.inputContainerStyle}
      />

      <Divider height={PADDINGS.X_LARGE} />

      <InputField
        value={password}
        placeholder="Password"
        type={INPUT_TYPE.UNDERLINE}
        onChangeText={setPassword}
        inputStyle={styles.inputTextStyle}
        placeholderTextColor={COLOR_CODES.WHITE}
        containerStyle={styles.inputContainerStyle}
      />

      <Divider height={PADDINGS.X_LARGE * 1.4} />

      {/* Sign In Button */}
      <Button
        title="Login"
        onPress={loginUserHandler}
        disabled={loginRequestInProcess || userName.length === 0 || password.length === 0}
        isLoading={loginRequestInProcess}
      />
      <Divider height={PADDINGS.MEDIUM * 2} />

      {/* Forgot Password text */}
      <Text style={styles.forgotPasswordTextStyle}>
        Forgot your login details?
        <Text style={styles.virtualForgotPasswordTextStyle}>
          {' '}
          Get help signing in
        </Text>
      </Text>

      <Divider height={PADDINGS.MEDIUM * 4} />

      <View style={styles.optionSeparatorContainerStyle}>
        <View style={styles.horizontalLineStyle} />
        <Text style={styles.orTextStyle}>OR</Text>
        <View style={styles.horizontalLineStyle} />
      </View>

      <Divider height={PADDINGS.MEDIUM * 4} />

      <Button
        title="Sign up"
        onPress={() => navigateToScreen('SignUp')}
        containerStyle={styles.signupButtonStyle}
      />
    </GradientWrapper>
  );
};
