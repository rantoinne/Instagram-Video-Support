import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  Text,
  FlatList,
  Platform,
  ViewToken,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Divider, FeedItem } from '@components';
import styles from './styles';
import {
  PADDINGS,
  getPosts,
  POST_TYPE,
  COLOR_CODES,
  IMAGE_DIMENSIONS,
} from '@utils';

interface Props {
  navigation: any;
}

interface State {
  loading: boolean;
  posts: POST_TYPE[];
  searchInput: string;
}

export class Feeds extends React.PureComponent<Props, State> {
  postRefs: any;
  constructor (props: Props) {
    super(props);
    this.postRefs = {};
    this.state = {
      searchInput: '',
      loading: true,
      posts: [],
    };

    this.renderFeedItem = this.renderFeedItem.bind(this);
    this.renderInputLeftIcon = this.renderInputLeftIcon.bind(this);
    this.navigateToSearchFeed = this.navigateToSearchFeed.bind(this);
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
    this.itemSeparatorComponent = this.itemSeparatorComponent.bind(this);
  }

  async componentDidMount (): Promise<void> {
    const posts = await getPosts(true);
    this.setState({ posts, loading: false });
  }
  
  renderFeedItem = (
    { item }:
    {
      index: number,
      item: POST_TYPE,
    }
  ) => (
    <FeedItem
      key={item.id as number}
      ref={ref => { this.postRefs[item.id as number] = ref }}
      comments={item.comments}
      postMediaType={item.type}
      postLikes={item.postLikes}
      postCaption={item.description}
      postUrl={item?.url || item?.urls}
      userAvatar={item.user.userAvatar}
      userFullName={item.user.fullName}
      userInstaName={item.user.userName}
    />
  );

  onViewableItemsChanged = (info: { changed: ViewToken[] }): void => {
    let cell: FeedItem;
    info.changed.forEach((item) => {
      cell = this.postRefs[item.key];
      
      if (cell) {
        if (item.isViewable) {
          cell.play();
        } else {
          cell.pause();
        }
      }
    });
  };

  renderInputLeftIcon = () => (
    <EvilIcons
      name="search"
      size={IMAGE_DIMENSIONS.REGULAR}
      color={COLOR_CODES.DOVE_GRAY}
    />
  );

  navigateToSearchFeed = () => {
    this.props.navigation.navigate('Search');
  }

  itemSeparatorComponent = () => <Divider height={PADDINGS.X_LARGE * 2} />;
  
  render () {
    const {
      posts,
      loading,
    } = this.state;
    return (
      <SafeAreaView style={styles.safeAreaViewStyles}>
      <TouchableOpacity onPress={this.navigateToSearchFeed} style={styles.inputWrapper}>
        {this.renderInputLeftIcon()}
        <Text style={styles.searchText}>Search "Anything"</Text>
      </TouchableOpacity>

      <Divider height={PADDINGS.LARGE} />

      {/* LOADER/POSTS */}
      {
        loading ? (
          <ActivityIndicator
            color={COLOR_CODES.PICTON_BLUE}
            size={Platform.OS === 'android' ? IMAGE_DIMENSIONS.SMALL * 2 : 'large'}
          />
        ) : (
          <FlatList
            data={posts}
            refreshing={loading}
            removeClippedSubviews
            initialNumToRender={3}
            maxToRenderPerBatch={3}
            scrollEventThrottle={300}
            renderItem={this.renderFeedItem}
            keyExtractor={( { id } ) => id as number | any}
            onViewableItemsChanged={this.onViewableItemsChanged}
            ItemSeparatorComponent={this.itemSeparatorComponent}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 100,
              minimumViewTime: 500,
            }}
          />
        )
      }
      </SafeAreaView>
    );
  }
}