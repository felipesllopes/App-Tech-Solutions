import { createDrawerNavigator } from '@react-navigation/drawer';
import Employees from '../Pages/Employees';
import Home from '../Pages/Home';
import MyProfile from '../Pages/MyProfile';

export default function HomeRoute() {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{

                drawerActiveTintColor: '#000',
                drawerInactiveTintColor: '#000',
                drawerActiveBackgroundColor: '#BBB',
                drawerStyle: {
                    backgroundColor: '#DDD',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                },
                headerTintColor: '#FFF',
                drawerLabelStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                },
                headerStyle: {
                    backgroundColor: '#000',
                }
            }}
        >

            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: true,
                    title: 'Menu'
                }}
            />

            <Drawer.Screen
                name='Employees'
                component={Employees}
                options={{
                    // headerShown: false,
                    title: 'Funcionários'
                }}
            />

            <Drawer.Screen
                name='MyProfile'
                component={MyProfile}
                options={{
                    // headerShown: false,
                    title: 'Meu Perfil'
                }}
            />


        </Drawer.Navigator>
    )
}