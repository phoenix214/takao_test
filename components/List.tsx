import React from 'react'
import { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchMarkets } from '../actions';

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

const ListItemText = styled.Text`
  padding-vertical: 10px;
  font-size: 15px;
`;

type Props = {
  markets: any,
  fetchMarkets: Function,
  navigation: any,
};


export class MarketList extends Component<Props> {
  componentDidMount() {
    this.props.fetchMarkets();
  }

  keyExtractor = (item: any, index: number) => item;

  onPressItem = (item: any) => {
    const { navigation } = this.props;
    navigation.navigate('Graph', { dataId: item });
  }

  renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => this.onPressItem(item)}
    >
      <ListItemText>
        {item}
      </ListItemText>
    </TouchableOpacity>
  );

  render() {
    const { markets } = this.props;

    return (
      <Container>
        <Title>Markets</Title>
        {
          markets && !markets.isFetching && markets.data ? 
            <FlatList
              data={Object.keys(markets.data.result)}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
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
      markets: state.markets
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
      ...bindActionCreators({ fetchMarkets }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketList);