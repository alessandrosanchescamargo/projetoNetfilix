import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrollVertical from './src/telas/scrollVertical/ScrollVerticalHome';
import Home from './src/telas/Home';
import ScrollHorizontal from './src/telas/scrollHorizontal/ScrollHorizontalHome';
import FlatList from './src/telas/flatlist/FlatList';
import DoisScrolls from './src/telas/doisscrolls/DoisScrolls';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Scroll Vertical' component={ScrollVertical}/>
            <Stack.Screen name='Scroll Horizontal' component={ScrollHorizontal} />
            <Stack.Screen name='Flat List' component={FlatList} />
            <Stack.Screen name='Dois Scrolls' component={DoisScrolls} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


