import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ExampleScreen from '~/views/example';

const AppNavigator = () => {
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Profile" component={ExampleScreen} initialParams={{userId: '01'}} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
