import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeStack =  () => 
<Stack.Navigator>
  <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: 'Welcome' }}
  />
</Stack.Navigator>

export default HomeStack;