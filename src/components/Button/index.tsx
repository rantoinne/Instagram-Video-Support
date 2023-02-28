import { COLOR_CODES } from '@utils';
import React, { FC } from 'react';
import {
  Text,
  Platform,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import styles from './styles';


interface Props extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

/**
 * @title string to display on <Button />
 * @containerStyle Additional style for main component
 * @titleStyle Additional style for title container component
 * @isLoading renders a loader instead of title and disables button
 * @returns A basic button
 */
export const Button: FC<Props> = ({
  title,
  titleStyle,
  containerStyle,
  isLoading = false,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity
      {...touchableProps}
      disabled={isLoading || touchableProps.disabled}
      style={[styles.containerStyles, containerStyle]}
    >
      {!isLoading ? (
        <Text style={[styles.titleStyle, titleStyle]}>
          {title}
        </Text>
      ) : (
        <ActivityIndicator
          color={COLOR_CODES.WHITE}
          size={Platform.OS === 'android' ? 34 : 'small'}
        />
      )}
    </TouchableOpacity>
  );
};
