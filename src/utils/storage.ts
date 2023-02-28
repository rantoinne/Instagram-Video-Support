import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserSession = async (value: boolean) => {
  try {
    await AsyncStorage.setItem('@isSessionActive', String(value));
  } catch (e) {
    throw new Error(e);
  }
};

export const getUserSession = async () => {
  let value = null;
  try {
    value = await AsyncStorage.getItem('@isSessionActive');
  } catch(e) {
    throw new Error(e);
  }
  return Boolean(value);
};

export const removeUserSession = async () => {
  try {
    await AsyncStorage.removeItem('@isSessionActive')
  } catch(e) {
    throw new Error(e);
  }
}
