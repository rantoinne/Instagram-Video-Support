import { ImageLinks } from '@images';
import { POST_TYPE } from '@utils';
import React, { FC, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ViewStyle,
  ImageProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

interface Props extends ImageProps {
  carouselStyle?: ViewStyle;
  imageUrls: POST_TYPE['urls'];
}

/**
 * @imageUrls An array of image urls to iterate
 * @carouselStyle Additional style to add on Flatlist component
 * @returns A full width carousel
 */
export const Carousel: FC<Props> = ({ imageUrls, carouselStyle }) => {
  const [indice, setIndice] = useState<number>(1);

  const renderImageView = ({ item }) => {
    return (
      <View style={styles.imageWrapperContainer}>
        <View style={styles.imageWrapper}>
          <FastImage
            style={styles.imageStyle}
            defaultSource={ImageLinks.loading}
            resizeMode={FastImage.resizeMode.stretch}
            source={{ uri: item, priority: FastImage.priority.normal }}
          />
        </View>
      </View>
    );
  };

  const onMomentumScrollEndEvent = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent.contentOffset.x > 0) {
      setIndice(2);
    } else setIndice(1);
  };

  return (
    <>
      <FlatList
        horizontal
        pagingEnabled
        data={imageUrls}
        initialNumToRender={1}
        renderItem={renderImageView}
        showsHorizontalScrollIndicator={false}
        style={[styles.flatListStyle, carouselStyle]}
        onMomentumScrollEnd={onMomentumScrollEndEvent}
      />
      <View style={styles.indexWrapper}>
        <Text style={styles.currentIndexText}>
          {indice} / {imageUrls.length}
        </Text>
      </View>
    </>
  );
};
