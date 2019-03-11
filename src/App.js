/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import ShowList from './components/ShowList';
import Footer from './components/Footer';
import Router from './Router';

class App extends Component {
  render(){
    return (
      <View style={{ flex: 1 }}>
        <Footer footerText={'By Sergey Paponov'}/>
        <Router />
      </View>
    );
  }
}

export default App;
