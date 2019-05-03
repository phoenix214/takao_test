import { createStackNavigator, createAppContainer } from 'react-navigation';
  import Home from './Home';
  import Graph from './components/Graph';

  const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Graph: { screen: Graph},
  }
  );
  const App = createAppContainer(AppNavigator);

  export default App;