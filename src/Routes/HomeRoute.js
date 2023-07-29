import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Pages/Home';
import MyProfile from '../Pages/MyProfile';
import AuthEmployee from './AuthEmployees';

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
                drawerLabelStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                },

            }}
        >

            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    title: 'Menu'
                }}
            />

            <Drawer.Screen
                name='AuthEmployee'
                component={AuthEmployee}
                options={{
                    headerShown: false,
                    title: 'Funcionários'
                }}
            />

            <Drawer.Screen
                name='MyProfile'
                component={MyProfile}
                options={{
                    headerShown: false,
                    title: 'Meu Perfil'
                }}
            />


        </Drawer.Navigator>
    )
}