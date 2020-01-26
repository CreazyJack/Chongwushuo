import React, { PureComponent } from 'react'
import UnLogin from './Navigation/BottomNav'
import AppNav from './Navigation/AppNav'
import { connect } from 'react-redux'

class Main extends PureComponent {
  render() {
    return (
      < UnLogin />
    )
  }
}


const mapState = ({ user }) => ({ user })
export default connect(mapState)(Main)