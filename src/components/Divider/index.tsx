import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  height: number;
}

/**
 * @height Height of the transparent divider
 * @returns A transparent divider/spacer
 */
export const Divider: FC<Props> = ({ height }) => (
  <View style={[styles.containerStyles, { height }]} />
);
