import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrollVertical from './src/telas/scrollVertical/ScrollVerticalHome';
import Home from './src/telas/Home';
import ScrollHorizontal from './src/telas/scrollHorizontal/ScrollHorizontalHome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Scroll Vertical' component={ScrollVertical}/>
            <Stack.Screen name='Scroll Horizontal' component={ScrollHorizontal} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


