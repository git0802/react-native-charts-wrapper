import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';
import reactAddonsUpdate from 'react-addons-update';

import {RadarChart} from 'react-native-charts-wrapper';


class RadarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        enabled: true,
        textSize: 14,
        form: 'CIRCLE',
        wordWrapEnabled: true
      }
    };
  }

  componentDidMount() {
    this.setState(
      reactAddonsUpdate(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{value: 100}, {value: 110}, {value: 105}, {value: 115}, {value: 110}],
              label: 'DS 1',
              config: {
                color: processColor('#FF8C9D'),

                drawFilled: true,
                fillColor: processColor('#FF8C9D'),
                fillAlpha: 100,
                lineWidth: 2
              }
            }, {
              values: [{value: 115}, {value: 100}, {value: 105}, {value: 110}, {value: 120}],
              label: 'DS 2',
              config: {
                color: processColor('#C0FF8C'),

                drawFilled: true,
                fillColor: processColor('#C0FF8C'),
                fillAlpha: 150,
                lineWidth: 1.5
              }
            }, {
              values: [{value: 105}, {value: 115}, {value: 121}, {value: 110}, {value: 105}],
              label: 'DS 3',
              config: {
                color: processColor('#8CEAFF'),

                drawFilled: true,
                fillColor: processColor('#8CEAFF')
              }
            }],
          }
        },
        xAxis: {
          $set : {
            valueFormatter: ['A', 'B', 'C', 'D', 'E']
          }
        }
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <RadarChart
          style={styles.chart}
          data={this.state.data}
          xAxis={this.state.xAxis}
          description={{text: ''}}
          legend={this.state.legend}
          skipWebLineCount={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

export default RadarChartScreen;
