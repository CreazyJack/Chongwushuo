import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { EvilIcons } from "react-native-vector-icons"
import { theme } from '../constants'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { likeClick } from '../redux/actions/comments'



class CommentList extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLike: null
    }
  }
  render() {
    const data = Map(this.props.item)
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Image
            source={{ uri: this.props.item.avatar }}
            style={styles.avatarImg}
          />
          <Text style={styles.headContent}>{data.get('name')}</Text>
          <Text style={{ position: 'absolute', left: 45, top: 23, fontSize: 11, color: theme.colors.gray }}>2020.1.6</Text>
          <TouchableOpacity
            style={styles.likeContent}
            onPress={() => this.props.likeClick(this.props.index)}
          >
            <EvilIcons
              name='like'
              size={22}
              style={{ marginTop: 2, }}
              color={data.get('like') ? theme.colors.pinkGlamour : null}
            />
            <Text>{data.get('likeAmount')}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.content}>&emsp;&emsp;{this.props.item.content}</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 5,
    paddingVertical: 5,
    backgroundColor: '#f5f6fa',
    borderRadius: 10
  },
  head: {
    margin: 5,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  headContent: {
    marginLeft: 5,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2
  },
  likeContent: {
    flexDirection: 'row',
    position: 'absolute',
    right: 5,
    alignSelf: 'center'
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  content: {
    marginLeft: 25,
    fontSize: 14,
    lineHeight: 20,
    paddingLeft:10
  }
})
const mapState = ({ comment }) => ({ comment })
export default connect(mapState, { likeClick })(CommentList)