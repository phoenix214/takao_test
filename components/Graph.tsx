import React from 'react'
import { Component } from 'react';
import { Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureChart from 'react-native-pure-chart';
import styled from 'styled-components';
import { fetchTrades } from '../actions';

const Container = styled.View`
  padding-vertical: 20px;
  padding-horizontal: 5px;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const LoadingText = styled.Text`
  font-size: 15px;
`;

type Props = {
  trade: any,
  fetchTrades: Function,
  navigation: any,
};


export class Graph extends Component<Props> {
  componentDidMount() {
    const { dataId } = this.props.navigation.state.params;
    this.props.fetchTrades(dataId);
  }

  render() {
    let graphData: any = [];
    const { dataId } = this.props.navigation.state.params;
    const { trade } = this.props;
    if (trade && !trade.isFetching && trade.data && trade.data.result) {
      const data = trade.data.result[dataId];
      for (let i = 0; i<data.length; i++) {
        const date = new Date(data[i][2] * 1000);
        graphData.push({x: date.toString(), y: parseFloat(data[i][0])});
      }
    }
    return (
      <Container>
        <Title>Recent Trades</Title>
        {
          graphData && graphData.length > 0 ? 
          <PureChart 
            data={graphData}
            type='line'
            width={'100%'}
            height={200}
          />
          :
          <LoadingText>Loading...</LoadingText>
        }
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Graph);