import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Department from "../../Pages/Employees/Department";
import RegisterEmployee from "../../Pages/Employees/RegisterEmployee";

export default function RegisterEmployees() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>

            <Stack.Screen name="RegisterEmployee" component={RegisterEmployee}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="Department" component={Department}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}