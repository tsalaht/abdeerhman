import { StatusBar } from 'expo-status-bar';
import { Image } from 'native-base';
import { StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import Index from './Views/Index';
import { useFonts } from "expo-font";
import { useEffect } from 'react';
import Screens from './Views/Navigation';
// import { NativeBaseConfigProvider } from 'native-base'
export default function App() {
  SplashScreen.preventAutoHideAsync();
  let [fontsLoaded] = useFonts({
    Almarai_Regular:require('./assets/fonts/Almarai/Almarai-Regular.ttf'),
    Almarai_Bold:require('./assets/fonts/Almarai/Almarai-Bold.ttf'),
    Almarai_Light:require('./assets/fonts/Almarai/Almarai-Light.ttf')
  })
  const newFontTheme ={
    fontConfig:{
      Almarai:{
        400:{
          normal:'Almarai_Regular'
        },
        600:{
          normal:'Almarai_Bold'
        },
        300:{
          normal:'Almarai_Light'
        }



      }

    }
  }
  const theme = extendTheme({

    fontConfig: newFontTheme,
   
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  const plagin :any= require('./assets/plagin.png')
    return (
      <NavigationContainer>
      <SafeAreaView style={{flex:1}}>
  <NativeBaseProvider theme={theme}>
    <GestureHandlerRootView>
    <SafeAreaView style={{ flex: 1, backgroundColor: "#131514" }}>
<Screens/>
</SafeAreaView>
</GestureHandlerRootView>
</NativeBaseProvider>

   
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
