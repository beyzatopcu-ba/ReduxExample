import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import FavoriteListScreen from './Screens/FavoriteListScreen';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name='Home'
          component={HomeScreen}
        />
        <Tabs.Screen
          name='FavoriteList'
          component={FavoriteListScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
