import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterEmployee from "../../Pages/Employees/RegisterEmployee";
import SearchEmployee from "../../Pages/Employees/SearchEmployee";

export default function AuthEmployee() {

    const Botton = createBottomTabNavigator();

    return (
        <Botton.Navigator>

            {/* <Botton.Screen name="Employees"
                component={Employees}
                options={{ headerShown: false }} /> */}

            <Botton.Screen name="RegisterEmployee"
                component={RegisterEmployee}
                options={{
                    headerShown: false, title: 'Registrar',
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