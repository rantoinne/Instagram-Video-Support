import React from 'react';
import { ImageLinks } from '@images';
import FastImage from 'react-native-fast-image';
import { Divider, InputField, SearchFeedVideo } from '@components';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { FlatList, SafeAreaView, View, ViewToken } from 'react-native';
import { COLOR_CODES, IMAGE_DIMENSIONS, INPUT_TYPE, LESS_POSTS, MEDIA_TYPE, PADDINGS, POST_TYPE } from '@utils';
import styles from './styles';

interface Props {
  navigation: any;
}

interface State {
  searchInput: string;
}

export class Search extends React.PureComponent<Props, State> {
  cellRefs: any;
  constructor (props: Props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    this.cellRefs = {};
  }
  
  renderFeedItem = ({ item }: { item: POST_TYPE }) => {
    if (item?.type === MEDIA_TYPE.VIDEO) {
      return (
        <SearchFeedVideo
          item={item}
          ref={ref => { this.cellRefs[item.id as number] = ref }}
        />
      )
    }
    return (
      <FastImage
        style={styles.imageStyle}
        defaultSource={ImageLinks.loading}
        resizeMode={FastImage.resizeMode.cover}
        source={{
          uri: item.urls[0],
          priority: FastImage.priority.normal,
        }}
      />
    );
  };
  
  renderInputLeftIcon = () => (
    <EvilIcons
      name="search"
      size={IMAGE_DIMENSIONS.REGULAR}
      color={COLOR_CODES.DOVE_GRAY}
    />
  );

  onViewableItemsChanged = (info: { changed: ViewToken[] }): void => {
    info.changed.forEach((item) => {
      const cell = this.cellRefs[item.key];
      
      if (cell) {
        if (item.isViewable) {
          cell.play();
        } else {
          cell.pause();
        }
      }
    });
  };
  
  render () {
    return (
      <SafeAreaView style={styles.safeAreaViewStyles}>
        <View style={styles.inputWrapper}>
          <InputField
            autoFocus
            type={INPUT_TYPE.UNDERLINE}
            value={this.state.searchInput}
            placeholder='Search "Anything"'
            inputStyle={styles.inputStyle}
            renderLeftIcon={this.renderInputLeftIcon}
            containerStyle={styles.inputContainerStyle}
            onChangeText={(v) => this.setState({ searchInput: v })}
          />
        </View>
  
        <Divider height={PADDINGS.LARGE} />
  
        <FlatList
          numColumns={3}
          data={LESS_POSTS}
          removeClippedSubviews
          initialNumToRender={3}
          maxToRenderPerBatch={4}
          renderItem={this.renderFeedItem}
          updateCellsBatchingPeriod={300}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 100,
            minimumViewTime: 500,
          }}
          onViewableItemsChanged={this.onViewableItemsChanged}
          keyExtractor={( item ) => item.id as number as any}
        />
      </SafeAreaView>
    );
  }
}
