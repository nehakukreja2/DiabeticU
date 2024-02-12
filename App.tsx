import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './js/router/Onboarding';

function App() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}

export default App;
