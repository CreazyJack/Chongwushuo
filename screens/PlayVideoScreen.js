import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard, Alert, TouchableOpacity, StatusBar } from 'react-native'
import { theme, mocks } from '../constants'
import VideoPlayer from 'expo-video-player'
import { connect } from 'react-redux'
import { CommentList } from '../Components'
import { commentHeadCop } from '../redux/actions/comments'
import { getCommentsList } from '../redux/actions/comments'
import { Ionicons } from "react-native-vector-icons"


const { colors, width, height, sizes } = theme
const statusHeight = StatusBar.currentHeight
class PlayVideoScreen extends PureComponent {
  constructor() {
    super()
    this.state = {
      width: theme.width,
      height: 180,
      showControlsOnLoad: true,
      marginBottom: 0,
      keyposition: 0,
      commentContent: '',
      commentButtonWidth: 50,
      comInputWidth: theme.width - 50,
      comInputHeight: 40
    }
  }

  render() {
    return (
      <View style={styles.container}>

        {/* 导航 */}
        <View style={{ ...styles.header, backgroundColor: this.props.theme.color }}>
          <TouchableOpacity
            style={{ position: 'absolute', left: 10, bottom: 10, width: 30, }}
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          >
            <Ionicons
              name='ios-arrow-back'
              size={25}
              color={theme.colors.white}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: sizes.h3, color: colors.white, marginBottom: 10 }}>{this.props.navigation.getParam('title')}</Text>
        </View>

        {/* 内容 */}
        <View style={{ ...styles.container }}>
          {/* 视频播放器 */}
          <VideoPlayer
            videoProps={{
              source: require('../assets/videos/1.mp4'),
              shouldPlay: false,
              resizeMode: 'contain',
            }}
            inFullscreen={false}
            height={this.state.height}
            width={this.state.width}
            fadeInDuration={50}
            fadeOutDuration={50}
            quickFadeOutDuration={50}
            hideControlsTimerDuration={5000}
            showControlsOnLoad={this.state.showControlsOnLoad}
            sliderColor={theme.colors.pinkGlamour}
          // playbackCallback={this.playbackCallback}
          />

          {/* 视频底部信息 */}
          <Text style={styles.author}>作者： {this.props.navigation.getParam('title')}</Text>
          <Text style={styles.time}>创建时间： 2018.10.3</Text>
          <View style={{ width: theme.width, height: 2, backgroundColor: '#ecf0f1', marginTop: 10 }}></View>

          {/* 评论展示 */}
          <Text style={styles.CommentTitle}>
            精彩评论
</Text>
          <View style={{ flex: 1, marginTop: 10, }}>
            <FlatList
              data={this.props.comment.commentData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => <CommentList item={item} index={index} />}
              style={{ bottom: 0 }}
              showsVerticalScrollIndicator={false}
              initialNumToRender={10}
            // ListHeaderComponent={this.props.comment.headCop
            //   ?
            //   <MyComment content={this.state.commentContent} />
            //   :
            //   null}
            />
          </View>
        </View>

        {/* 底部评论输入 */}
        <View style={{ ...styles.commentInputBox, marginBottom: this.state.keyposition }}>
          <TextInput
            defaultValue={this.state.commentContent}
            style={{ ...styles.commentInput, width: this.state.comInputWidth, height: this.state.comInputHeight }}
            placeholder='写下你的评论(<30字)'
            keyboardType='default'
            onEndEditing={this.onEndEditing}
            onChangeText={value => this.setState({ commentContent: value })}
            onFocus={this.onFocus}
            returnKeyType='done'
            multiline={false}
            maxLength={30}
          />
          <TouchableOpacity
            onPress={() => {
              // this.props.commentHeadCop()
              if (!this.state.commentContent) {
                Alert.alert('评论内容不能为空！')
                return
              }
              mocks.commentListData.data.list.unshift({
                "name": this.props.user.userData.name,
                "content": this.state.commentContent,
                "createAt": "1550310390\n",
                "like": false,
                "avatar": this.props.user.userData.avatar,
                "likeAmount": 0
              })
              // mocks.commentListData.data.list.unshift({
              //   "name": this.props.user.userData.name,
              //   "content": this.state.commentContent,
              //   "createAt": "1550310390\n",
              //   "like": false,
              //   "avatar": this.props.user.userData.avatar,
              //   "likeAmount": 0
              // })
              this.props.getCommentsList()
              this.setState({
                commentContent: ''
              })
            }}
          >
            <Text style={{ ...styles.commentButton, width: this.state.commentButtonWidth }}>评论</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  componentDidMount() {
    // keyboardWillShow：软键盘将要显示
    // keyboardDidShow：软键盘显示完毕
    // keyboardWillHide：软键盘将要收起
    // keyboardDidHide：软键盘收起完毕
    // keyboardWillChangeFrame：软件盘的 frame 将要改变
    // // keyboardDidChangeFrame：软件盘的 frame 改变完毕
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
    this.props.getCommentsList()
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }
  _keyboardDidShow = event => {
    this.setState({
      keyposition: event.endCoordinates.height + 45
    })
  }
  _keyboardDidHide = event => {
    this.setState({
      keyposition: 0
    })
  }

  onFocus = () => {
    console.log('onfocus')
  }
  onEndEditing = () => {
    Keyboard.dismiss()
  }


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    width: theme.width,
    height: 65,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  author: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 14,
    color: theme.colors.gray
  },
  time: {
    paddingHorizontal: 10,
    marginTop: 5,
    fontSize: 12,
    color: theme.colors.gray
  },
  CommentTitle: {
    paddingHorizontal: 10,
    marginTop: 15,
    fontSize: 14,
    fontWeight: '700'
  },
  commentInputBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    bottom: 0,
    height: 40,
    width: theme.width,
    backgroundColor: 'white'
  },
  commentInput: {
    paddingLeft: 10,
    fontSize: 14,
    borderTopWidth: 2,
    borderTopColor: '#ecf0f1'
  },
  commentButton: {
    lineHeight: 40,
    textAlign: 'center',
    backgroundColor: theme.colors.pinkGlamour,
    color: theme.colors.white,
    zIndex: 10
  }
})


const mapState = ({ comment, user, theme }) => ({ comment, user, theme })
export default connect(mapState, { commentHeadCop, getCommentsList })(PlayVideoScreen)
