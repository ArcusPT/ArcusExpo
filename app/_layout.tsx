import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <ThemeProvider value= {DefaultTheme} >

  <Stack> 
    <Stack.Screen name="tabs" options={{ headerShown: false }} />
    

  </Stack>
  <StatusBar style="auto" />
  </ThemeProvider>
  );
}
