import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, FlatList } from 'react-native'
import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window')

export default class Test extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {
          key: '2',
          list: (
            // 给 Swiper 设置高度，才能让轮播组件完整显示
            <Swiper
              style={styles.wrapper}
              showsButtons={false}
              showsPagination={true}
              dotColor={'red'}
            >
              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
          )
        },
      ],
    }
  }


  render() {
    return (
      <View style={{ flex: 1}}>
        <FlatList
          // style={{ backgroundColor: 'red',borderBottomWidth:20,borderBottomColor:'green',height:50}}
          data={this.state.list}
          renderItem={({ item }) => <View
            // style={{ flex: 1, width: width, borderBottomWidth: 5 }}
          >{item.list}</View>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scView: {
    width: width,
    height: 100,
    backgroundColor: 'green',
  },
  scView1: {
    width: width,
    height: 100,
    backgroundColor: 'red',
  },
  wrapper: {
    flex: 1,
    width: width,
    height: height
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
