import React from 'react';
import { ImageLinks } from '@images';
import Video from 'react-native-video';
import styles from './styles';

export class SearchFeedVideo extends React.PureComponent<any, any> {
  video: any;

  componentWillUnmount () {
    if (this.video) {
      this.pause();
    }
  }

  async play () {
    if (this.video) {
      return this.video.setNativeProps({
        paused: false,
      });
    }
  }

  pause () {
    if (this.video) {
      this.video.setNativeProps({
        paused: true,
      });
    }
  }
  
  render () {
    const {
      item,
    } = this.props;
    return (
      <Video
        muted
        paused
        repeat={false}
        resizeMode="cover"
        poster={ImageLinks.plus}
        posterResizeMode="cover"
        style={styles.imageStyle}
        source={{ uri: item?.url }}
        ref={(ref) => { this.video = ref; }}
      />
    );
  }
}
