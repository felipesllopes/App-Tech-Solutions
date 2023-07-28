import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';

export default function AuthRoute() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>

            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}