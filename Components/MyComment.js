import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { EvilIcons } from "react-native-vector-icons"
import { theme } from '../constants'
import { Map } from 'immutable'
import { connect } from 'react-redux'



class MyComment extends PureComponent {
  constructor() {
    super()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Image
            source={{ uri: 'http://dummyimage.com/10×10/f29479\n' }}
            style={styles.avatarImg}
          />
          <Text style={styles.headContent}>我说</Text>
          <Text
            style={{ position: 'absolute', left: 45, top: 23, fontSize: 11, color: theme.colors.gray }}>
            2020.1.6
          </Text>
          <TouchableOpacity
            style={styles.likeContent}
          >
            <EvilIcons
              name='like'
              size={22}
              style={{ marginTop: 2, }}
              color={theme.colors.pinkGlamour}
            />
            <Text></Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.content}>&emsp;&emsp;{this.props.content}</Text>
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
    lineHeight: 20
  }
})
const mapState = ({ comment }) => ({ comment })
export default connect(mapState)(MyComment)