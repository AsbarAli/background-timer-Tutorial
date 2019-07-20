// @flow
import React from 'react';
import {View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import type {Element as ReactElement} from 'react';

import styles from './Timer.styles';

type TimerProps = {};
type TimerState = {};

class TimerComponent extends React.PureComponent<TimerProps, TimerState> {
  static defaultProps: any

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      second: 0,
    }
  }

  _interval: any;

  onStart = () => {
    this._interval = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      })
    }, 1000);
  }

  onPause = () => {
    clearInterval(this._interval);
  }

  onReset = () => {
    this.setState({
      second: 0,
    })
    clearInterval(this._interval);
  }

  renderStartButton = () => {
    return (
      <Button 
        title="Start"
        onPress={this.onStart}
      />
    )
  }

  renderPauseButton = () => {
    return (
      <Button 
        title="Pause"
        onPress={this.onPause}
    />
    )
  }

  renderResetButton = () => {
    return (
      <Button 
        title="Reset"
        onPress={this.onReset}
    />
    )
  }

  renderContent = (): ReactElement<any> => {
    return (
      <View style={styles.container}>
        <Text style={styles.secondText}>{this.state.second}</Text>
        <View style={styles.buttonWrapper}>
          {this.renderStartButton()}
          {this.renderPauseButton()}
          {this.renderResetButton()}
        </View>

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
