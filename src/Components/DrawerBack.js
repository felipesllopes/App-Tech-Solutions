import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from "react-native";

export default function DrawerBack() {

    const navigation = useNavigation();

    return (
        <View style={{ padding: 8 }}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Ionicons name="menu" size={34} color={'#FFF'} />
            </TouchableOpacity>
        </View>
    )
}