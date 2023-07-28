import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';

export default function HomeRoute() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>

            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}