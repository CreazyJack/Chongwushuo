import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, Image, TouchableHighlight, FlatList, RefreshControl } from 'react-native'
import { theme } from '../constants'
import { MaterialCommunityIcons, AntDesign, Feather } from "react-native-vector-icons"
import { connect } from 'react-redux'


export default class VideoList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }
  render() {
    return (
      <FlatList
        data={this.props.listData}
        renderItem={({ item }) => <VideoBox data={item} goToVideo={this.props.goToVideo} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => console.log('触发了OnEnd')}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={() => this.onRefresh()}
            colors={[theme.colors.pinkGlamour]}
            progressBackgroundColor={theme.colors.white}
          // progressViewOffset={theme.height * 0.5}
          />
        }
      />
    )
  }

  onRefresh = () => {
    this.setState(
      {
        isLoading: true
      },
      () => {
        return setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, 1500)
      }
    )
  }
}

const VideoBox = ({ goToVideo, data }) => (
  <TouchableHighlight
    onPress={() => {
      goToVideo(data.title)
    }}
    underlayColor={theme.colors.white}
    // 点击时的不透明度，0-1之间，越小越透明，设置的 underlayColor 越明显 1则完全不透明，点击没有效果
    activeOpacity={0.85}
  >
    <View style={styles.videoBox}>
      <View style={styles.videoThumbnail}>
        <Image
          source={{ uri: data.thumbnail }}
          style={styles.img}
        />
        <Feather
          name='play-circle'
          size={50}
          style={styles.videoPlay}
          color={theme.colors.white}
        />
      </View>
      <View style={styles.videoBottom}>
        <Text style={styles.videoTitle}>{data.title}</Text>
        <View style={styles.likeAndComment}>
          <View style={styles.like}>
            <AntDesign
              name='like2'
              size={22}
              style={{ paddingHorizontal: 5 }}
              color={theme.colors.gray}
            />
            <Text style={styles.likeText}>{data.likeAmount}</Text>
          </View>
          <View style={styles.comment}>
            <MaterialCommunityIcons
              name='comment-text-outline'
              size={22}
              color={theme.colors.gray}
            />
            <Text style={styles.commentText}>{data.commentAmount}</Text>
          </View>
        </View>
      </View>
    </View >
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {

  },
  videoBox: {
    width: theme.width,
    backgroundColor: theme.colors.white,
  },
  videoThumbnail: {
    width: theme.width,
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  img: {
    width: theme.width,
    height: 200
  },
  videoPlay: {
    position: 'absolute',
    left: 5,
    bottom: 5
  },
  videoBottom: {
    paddingHorizontal: 5,
    paddingBottom: 15
    // backgroundColor: theme.colors.pinkGlamour
  },
  videoTitle: {
    paddingVertical: 5,
    fontSize: theme.sizes.h3,
    paddingLeft: 5,
    color: theme.colors.black
  },
  likeAndComment: {
    flexDirection: 'row',
    height: 25
  },
  like: {
    flexDirection: 'row',
    width: 130
  },
  likeText: {
    lineHeight: 20,
    paddingLeft: 0,
    color: theme.colors.gray
    // alignItems:'flex-end'
    // textAlignVertical: 'center',
    // backgroundColor:theme.colors.primary,
  },
  comment: {
    flexDirection: 'row',
    width: 130
  },
  commentText: {
    lineHeight: 20,
    paddingLeft: 5,
    color: theme.colors.gray
    // alignItems:'flex-end'
    // textAlignVertical: 'center',
    // backgroundColor:theme.colors.primary,
  }
})
