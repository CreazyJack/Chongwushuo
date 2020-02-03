import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, BackHandler } from 'react-native'
import { theme } from '../constants'
import { VideoList } from '../Components'
import { connect } from 'react-redux'
import { getVideoList } from '../redux/actions/videos'
import { getCommentsList } from '../redux/actions/comments'
import { Feather } from "react-native-vector-icons"
import { NativeEventEmitter, NativeModules } from 'react-native'


const { colors, width, height, sizes } = theme

class HomeScreen extends PureComponent {
  state = {
    isShowToast: false,
    isBack: false
  }
  render() {
    return (
      <View style={styles.container}>
        {/* 加载动画 */}
        <ActivityIndicator
          animating={this.props.videos.isLoading}
          style={{ position: 'absolute', top: theme.height * 0.3 }}
          color={this.props.theme.color}
          size='large'
        />

        {/* 导航 */}
        <View style={{ ...styles.header, backgroundColor: this.props.theme.color }}>
          <TouchableOpacity
            style={{ position: 'absolute', left: 10, bottom: 10, width: 30, }}
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Feather name='menu' size={25} color={colors.white} />
          </TouchableOpacity>
          <Text style={{ fontSize: sizes.h3, color: colors.white, marginBottom: 10 }}>宠物说</Text>
        </View>

        {/* 视频列表 */}
        <VideoList
          listData={this.props.videos.videoListData}
          goToVideo={this.goToVideo}
          isLoading={this.props.videos.isLoading}
          getData={this.getData}
          color={this.props.theme.color}
        />
      </View>
    )
  }

  goToVideo = (title) => {
    this.props.navigation.navigate('PlayVideoScreen', { title })
  }

  getData = () => {
    this.props.getVideoList()
  }

  onBackAndroid = () => {
    const { navigate } = this.props.navigation
    // if(!this.state.isBack) {
    //   navigate('HomeScreen')
    //   this.setState({
    //     isBack: true,
    //     isShowToast: true
    //   },() => setTimeout(() => {
    //     this.setState({
    //       isBack: false,
    //       isShowToast: false
    //     })
    //   }, 1000))
    //   return false
    // }
    // return true
  }
  componentDidMount() {
    this.getData()
    // BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid)
  }
  componentWillUnmount() {
    // BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    width: theme.width,
    height: 65,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    // paddingTop: 30,
    // paddingBottom: 10,
    marginTop: 30,
    textAlign: 'center',
    fontSize: theme.sizes.h3,
    color: theme.colors.cityLights,
  }
})

// 没有使用 redux thunk 时，这里只能返回一个对象，中间不能有其他方法出现，例如 console.log()
const mapState = ({ videos, theme }) => ({ videos, theme })

export default connect(mapState, { getVideoList, getCommentsList, })(HomeScreen)
