import React from 'react'
import { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureChart from 'react-native-pure-chart';
import { fetchTrades } from './actions';


type Props = {
  trade: any,
  fetchTrades: Function,
};
const dataId = 'XXBTZUSD';
export class App extends Component<Props> {
  componentDidMount() {
    this.props.fetchTrades(dataId);
  }

  render() {

    let graphData: any = [];
    const { trade } = this.props;
    if (trade && !trade.isFetching && trade.data) {
      const data = trade.data.result[dataId];
      for (let i = 0; i<data.length; i++) {
        const date = new Date(data[i][2] * 1000);
        graphData.push({x: date.toString(), y: parseFloat(data[i][0])});
      }
    }
    return (
      <View>
        <Text>Recent Trades</Text>
        {
          graphData && graphData.length > 0 ? 
          <PureChart 
            data={graphData}
            type='line'
            width={'100%'}
            height={200}
          />
          :
          <Text>Loading...</Text>
        }
      </View>
    );
  
  }
}


function mapStateToProps(state: any) {
  return {
      trade: state.trade
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      ...bindActionCreators({ fetchTrades }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);