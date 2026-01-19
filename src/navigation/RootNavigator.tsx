import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabsNavigator from './TabsNavigator';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}
