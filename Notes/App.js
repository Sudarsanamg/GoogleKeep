import { StatusBar } from 'expo-status-bar';
import Init from './Frontend/Init';
import NewAccount from './Frontend/NewAccount';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Init">
      <Stack.Screen name="Get started with" component={Init} />
      <Stack.Screen name="NewAccount" component={NewAccount} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}


