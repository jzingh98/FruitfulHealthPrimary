'use strict';
import React, { Component } from 'react';
import Main from './src/Main';
import { AppRegistry } from 'react-native';

/*
 * This is the main entry point for Expo apps. I separated this from everything
 * else to make things cleaner. We can consolidate things in the future if we
 * no longer use Expo for development.
 */
const App = () => <Main />;
AppRegistry.registerComponent('App', () => App);
export default App;
