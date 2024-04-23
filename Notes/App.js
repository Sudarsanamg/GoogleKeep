import { StatusBar } from 'expo-status-bar';
import Init from './Frontend/Init';
import NewAccount from './Frontend/NewAccount';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Frontend/Login';
import Home from './Frontend/Home';
export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Init">
      <Stack.Screen name="Init" component={Init} />
      <Stack.Screen name="NewAccount" component={NewAccount} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}


