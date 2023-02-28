import React from 'react';
import { ImageLinks } from '@images';
import Video from 'react-native-video';
import { IconRenderer, Carousel } from '@components';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  POST_TYPE,
  MEDIA_TYPE,
  COLOR_CODES,
  IMAGE_DIMENSIONS,
  HIT_SLOP_FOR_TOUCHABLES,
} from '@utils';
import styles from './styles';

interface Props {
  comments: POST_TYPE['comments'];
  postMediaType: POST_TYPE['type'];
  postLikes: POST_TYPE['postLikes'];
  postCaption: POST_TYPE['description'];
  userAvatar: POST_TYPE['user']['userAvatar'];
  userFullName: POST_TYPE['user']['fullName'];
  userInstaName: POST_TYPE['user']['userName'];
  postUrl: POST_TYPE['url'] | POST_TYPE['urls'];
}

/**
 * @userFullName User's full name
 * @userInstaName User's account name
 * @postLikes Array of likes on a post
 * @comments Array of comments on a post
 * @postCaption Description text on a post
 * @userAvatar User profile image to render
 * @postMediaType Denotes if a post is an image or video
 * @postUrl Can be an array of urls(for Image only) or a single url(for Video only)
 * 
 * @returns A Feed Item component as in Instagram
 */
export class FeedItem extends React.PureComponent<Props, null> {
  videoRef: any;

  componentWillUnmount () {
    if (this.videoRef) {
      this.videoRef.setNativeProps({
        paused: true,
      });
    }
  }

  async play () {
    if (this.videoRef) {
      return this.videoRef.setNativeProps({
        paused: false,
      });
    }
  }

  pause () {
    if (this.videoRef) {
      this.videoRef.setNativeProps({
        paused: true,
      });
    }
  }

  postContent = () => {
    const {
      postUrl,
      postMediaType,
    } = this.props;
    const isMediaOfTypeImage = postMediaType === MEDIA_TYPE.IMAGE;
    
    if (isMediaOfTypeImage) return <Carousel imageUrls={postUrl as POST_TYPE['urls']} />;
    
    return (
      <Video
        repeat
        ref={(ref) => { this.videoRef = ref; }}
        muted={false}
        resizeMode="cover"
        poster={ImageLinks.plus}
        style={styles.imageView}
        paused={true}
        source={{ uri: postUrl as string,  }}
        posterResizeMode="contain"
      />
    );
  }

  render () {
    const {
      comments,
      postLikes,
      userAvatar,
      postCaption,
      userFullName,
      userInstaName,
    } = this.props;
    const commentsLength = comments.length;

    return (
      <View style={styles.mainContainer}>
        {/* User Info & Options section */}
        <View style={styles.userInfoHeader}>
          {/* User Avatar section */}
          <View style={styles.avatarRenderer}>
            <IconRenderer
              source={{ uri: userAvatar }}
              imageStyle={styles.avatar}
            />
            {/* User Info section */}
            <View style={styles.userInfoView}>
              <Text style={styles.userName}>
                {userFullName}
              </Text>
              <Text style={styles.accountName}>
                {userInstaName}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.optionsMenu}>
            <Entypo
              name="dots-three-vertical"
              color={COLOR_CODES.BLACK}
              size={IMAGE_DIMENSIONS.MEDIUM / 1.8}
            />
          </TouchableOpacity>
        </View>

        {/* Post Image/Video */}
        {this.postContent()}

        {/* Options (Like, Comment, share) section */}
        <View style={styles.actionsContainer}>
          <View style={styles.leftActionsContainer}>
            <TouchableOpacity hitSlop={HIT_SLOP_FOR_TOUCHABLES}>
              <MaterialCommunityIcons
                name={'heart-outline'}
                color={COLOR_CODES.BLACK}
                size={IMAGE_DIMENSIONS.REGULAR}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.marginLeftStyle}
              hitSlop={HIT_SLOP_FOR_TOUCHABLES}
            >
              <MaterialCommunityIcons
                name="comment-outline"
                color={COLOR_CODES.BLACK}
                size={IMAGE_DIMENSIONS.REGULAR}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.marginLeftStyle}
              hitSlop={HIT_SLOP_FOR_TOUCHABLES}
            >
              <Feather
                name="send"
                color={COLOR_CODES.BLACK}
                size={IMAGE_DIMENSIONS.REGULAR}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Post Info section */}
        <Text style={styles.likesCount}>
          {postLikes.length} likes
        </Text>
        <Text style={styles.userNameText}>
          {userInstaName}
          &nbsp;
          <Text style={styles.caption}>
            {postCaption}
          </Text>
        </Text>

        {commentsLength > 0 && (
          <Text style={styles.likesCount}>
            View all {commentsLength} comments
          </Text>
        )}
      </View>
    );
  }
}
