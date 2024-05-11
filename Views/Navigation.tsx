import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './Index'; 
import SingUp from './SingUp';
import NewSesson from './NewSesson';
import Store from './Store';

const Stack = createStackNavigator(); 

const Screens: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Index" id="App Main Stack Navigator"> 
      <Stack.Screen name="Home" component={Index}  options={{
          headerShown: false,
        }}/>
              <Stack.Screen name="SingUp" component={SingUp}  options={{
          headerShown: false,
        }}/>
               <Stack.Screen name="New Sesson" component={NewSesson}  options={{
          headerShown: false,
        }}/>
                 <Stack.Screen name="Store" component={Store}  options={{
          headerShown: false,
        }}/>
    </Stack.Navigator>
  );
};{}

export default Screens;