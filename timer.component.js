// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './timer.styles.js';

type TimerProps = {};
type TimerState = {};

class TimerComponent extends React.PureComponent<TimerProps, TimerState> {
  static defaultProps: any

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      second: 0
    }
  }

  _interval: any

  startTimer = () => {
   this._interval = setInterval(() => {
      this.setState({
        second: this.state.second + 1
      })
    }, 1000);
  }

  onResetTimer = () => {
    clearInterval(this._interval);
    this.setState({
      second: 0
    })
  }

  onPauseTimer = () => {
    clearInterval(this._interval);
  }

  renderStartButton = () => {
    return (
      <Button
        title="Start"
        onPress={this.startTimer}
      />
    )
  }

  renderResetButton = () => {
    return (
      <Button
        title="Reset"
        onPress={this.onResetTimer}
      />
    )
  }

  renderPauseButton = () => {
    return (
      <Button
        title="Pause"
        onPress={this.onPauseTimer}
      />
    )
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
      <Text style={styles.second}>{this.state.second}</Text>
        <View style={styles.buttonWrapper}>
          {this.renderStartButton()}
          {this.renderPauseButton()}
          {this.renderResetButton()}
        </View>
      {/* Add your elements here. Make sure you break the renders into clean functions */}
      </View>
    );
  }

  render() {
    const content = this.renderContent();

    return content;
  }
}

TimerComponent.propTypes = {};

TimerComponent.defaultProps = {};

export default TimerComponent;
