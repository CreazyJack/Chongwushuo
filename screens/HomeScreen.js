import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, TouchableHighlight } from 'react-native'
import { theme } from '../constants'
import { VideoList } from '../Components'
import { connect } from 'react-redux'
import { getVideoList } from '../redux/actions/videos'
import { getCommentsList } from '../redux/actions/comments'
import { Feather } from "react-native-vector-icons"



const { colors, width, height, sizes } = theme

class HomeScreen extends PureComponent {
  componentDidMount() {
    this.getData()
  }

  goToVideo = (title) => {
    this.props.navigation.navigate('PlayVideoScreen', { title })
  }

  getData = () => {
    this.props.getVideoList()
    // this.props.getCommentsList()
  }

  render() {
    return (
      <View style={styles.container}>
        {/* 加载动画 */}
        <ActivityIndicator
          animating={this.props.videos.isLoading}
          style={{ position: 'absolute', top: theme.height * 0.3 }}
          color={theme.colors.pinkGlamour}
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
        />
      </View>
    )
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
