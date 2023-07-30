import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchEmployee from "../../Pages/Employees/SearchEmployee";
import RegisterEmployees from './registerEmployees';

export default function AuthEmployee() {

    const Botton = createBottomTabNavigator();

    return (
        <Botton.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: '#EEE',
                tabBarStyle: { borderTopWidth: 0, },
                tabBarInactiveTintColor: '#666',
                tabBarActiveTintColor: '#000',
                tabBarLabelStyle: { fontWeight: 'bold' }
            }}
        >

            <Botton.Screen name="RegisterEmployees"
                component={RegisterEmployees}
                options={{
                    headerShown: false, title: 'Cadastrar',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='person-add' color={'black'} size={33} />
                    )
                }}
            />

            <Botton.Screen name="SearchEmployee"
                component={SearchEmployee}
                options={{
                    headerShown: false, title: 'Pesquisar',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='search' color={'black'} size={33} />
                    )
                }}
            />

        </Botton.Navigator>
    )

}