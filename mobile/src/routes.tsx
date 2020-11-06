import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WhatIs from './screens/WhatIs';
import SearchEcopoints from './screens/SearchEcopoints';
import DonateElectronics from './screens/DonateElectronics';
import Statistics from './screens/Statistics';

import iconTV from './images/TV.png';
import iconPIN from './images/PIN.png';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="WhatIs"
        tabBarOptions={{
          activeTintColor: '#e0e0e0',
          inactiveTintColor: '#e0e0e0',
          inactiveBackgroundColor: '#333',
          activeBackgroundColor: '#4f4f4f',
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },
          tabStyle: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRightColor: '#219653',
          },
          iconStyle: {
            flex: 0,
            width: 10,
            height: 10,
          },
          labelStyle: {
            fontFamily: 'Archivo_600SemiBold',
            fontSize: 13,
            marginTop: 5,
          },
          labelPosition: 'below-icon',
        }}
      >
        <Tab.Screen
          name="WhatIs" 
          component={WhatIs}
          options={{
            tabBarLabel: 'e-Lixo',
            tabBarIcon:({ color, size, focused }) => {
              return (
                <Image source={iconTV} style={{width: size, height: size, resizeMode: "contain"}}/>
              );
            }
          }}
        />
        <Tab.Screen 
          name="Ecopoints" 
          component={SearchEcopoints} 
          options={{
            tabBarLabel: 'Ecopontos',
          }}
        />
        <Tab.Screen 
          name="Donate" 
          component={DonateElectronics}
          options={{
            tabBarLabel: 'Eletrônicos',
          }}
        />
        <Tab.Screen 
          name="Statistics" 
          component={Statistics}
          options={{
            tabBarLabel: 'Estatísticas',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}