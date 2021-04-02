import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Landing from '@screens/Landing';
import { Login } from '@screens/Login';

const AuthStack = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      headerTitle: 'Landing',
    },
  },
});

const App = createSwitchNavigator({
  Auth: {
    screen: AuthStack,
  },
  Login: {
    screen: Login,
  },
});

export default createAppContainer(App);
