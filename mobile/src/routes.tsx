import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WhatIs from './screens/WhatIs';
import SearchEcopoints from './screens/SearchEcopoints';
import DonateElectronics from './screens/DonateElectronics';
import Statistics from './screens/Statistics';

import iconTV from './images/TV.png';
import iconPIN from './images/PIN.png';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'green',
        }}
      >
        <Tab.Screen name="O que é e-Lixo" component={WhatIs} />
        <Tab.Screen name="Buscar Ecopontos" component={SearchEcopoints} />
        <Tab.Screen name="Doar Eletrônicos" component={DonateElectronics} />
        <Tab.Screen name="Visualizar Estatísticas" component={Statistics} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}