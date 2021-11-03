import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from '~/navigators';

const App = () => {
  return (
    <SafeAreaProvider style={backgroundStyle}>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
