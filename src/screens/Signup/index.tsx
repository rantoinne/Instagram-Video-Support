import React, { FC, useState } from 'react';
import {
  Image,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {
  Button,
  Divider,
  InputField,
  MainContainer,
} from '@components';
import {
  PADDINGS,
  INPUT_TYPE,
  COLOR_CODES,
  EMAIL_REGEX,
} from '@utils';
import { ImageLinks } from '@images';
import styles from './styles';

interface Props {
  navigation: any;
}

export const SignUp: FC<Props> = ({
  navigation,
}) => {
  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(null);
  const [fullName, setFullName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  }

  const onPressSignup = async () => navigateToLoginScreen();
  
  const validateAndSetEmail = (val: string) => {
    const isEmailValid = EMAIL_REGEX.test(val);
    setEmailValid(isEmailValid);
    setEmail(val);
  }

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <MainContainer>
        <Image
          style={styles.appLogoStyle}
          source={ImageLinks.instagram}
        />

        <Divider height={PADDINGS.SMALL} />
        <Text style={styles.descriptionTextStyle}>
          Sign up to see photos and videos from your friends
        </Text>

        <Divider height={PADDINGS.X_LARGE} />

        {/* Credentials Input Fields */}
        <InputField
          value={email}
          placeholder="Email address"
          type={INPUT_TYPE.OUTLINE}
          onChangeText={validateAndSetEmail}
          inputStyle={styles.inputTextStyle}
          placeholderTextColor={COLOR_CODES.DOVE_GRAY}
          containerStyle={styles.inputContainerStyle}
        />
        {
          !emailValid && emailValid !== null && (
            <>
              <Divider height={PADDINGS.X_SMALL} />
              <Text style={styles.validationErrorText}>
                Invalid email!
              </Text>
              <Divider height={PADDINGS.X_SMALL} />
            </>
          )
        }

        <Divider height={PADDINGS.SMALL} />

        <InputField
          value={fullName}
          placeholder="Full Name"
          type={INPUT_TYPE.OUTLINE}
          onChangeText={setFullName}
          inputStyle={styles.inputTextStyle}
          containerStyle={styles.inputContainerStyle}
          placeholderTextColor={COLOR_CODES.DOVE_GRAY}
        />

        <Divider height={PADDINGS.SMALL} />

        <InputField
          value={userName}
          placeholder="Username"
          type={INPUT_TYPE.OUTLINE}
          onChangeText={setUserName}
          inputStyle={styles.inputTextStyle}
          containerStyle={styles.inputContainerStyle}
          placeholderTextColor={COLOR_CODES.DOVE_GRAY}
        />

        <Divider height={PADDINGS.SMALL} />

        <InputField
          secureTextEntry
          value={password}
          placeholder="Password"
          type={INPUT_TYPE.OUTLINE}
          onChangeText={setPassword}
          inputStyle={styles.inputTextStyle}
          containerStyle={styles.inputContainerStyle}
          placeholderTextColor={COLOR_CODES.DOVE_GRAY}
        />

        <Divider height={PADDINGS.X_LARGE * 1.4} />

        {/* Sign In Button */}
        <Button
          onPress={onPressSignup}
          title="Sign up"
        />

        <Divider height={PADDINGS.MEDIUM * 2} />

        <View style={styles.optionSeparatorContainerStyle}>
          <View style={styles.horizontalLineStyle} />
          <Text style={styles.orTextStyle}>OR</Text>
          <View style={styles.horizontalLineStyle} />
        </View>

        <Divider height={PADDINGS.MEDIUM * 2} />

        <Button
          title="Have an account? Login"
          onPress={navigateToLoginScreen}
          titleStyle={styles.loginTextStyle}
          containerStyle={styles.loginButtonStyle}
        />
        
      </MainContainer>
    </SafeAreaView>
  );
};
