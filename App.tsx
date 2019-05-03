import { createStackNavigator, createAppContainer } from 'react-navigation';
  import Home from './Home';
  import Graph from './components/Graph';
  import MarketList from './components/List';

  const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Graph: { screen: Graph},
    MarketList: { screen: MarketList },
  }
  );
  const App = createAppContainer(AppNavigator);

  export default App;