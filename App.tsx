import React from 'react';
import {ThemeProvider}from 'styled-components'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import theme from './src/global/styles/theme'
import { Home } from './src/screens/Home';
import { LoginUser } from './src/screens/Login';


export default function App() {
  const [fontsLoading] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  if(!fontsLoading){
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={theme}>

        <Home/>
    </ThemeProvider>
 
  )
}

