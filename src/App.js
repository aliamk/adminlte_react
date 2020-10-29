import React, { Component } from 'react'
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    )
  }
}
