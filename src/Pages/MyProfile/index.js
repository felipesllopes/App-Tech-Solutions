import { StyleSheet, Text, View } from "react-native";
import DrawerBack from "../../Components/DrawerBack";

export default function MyProfile() {
    return (
        <View style={styles.container}>

            <View style={styles.drawer}>
                <DrawerBack />
                <Text style={styles.textDrawer}>Meu Perfil</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    textDrawer: {
        fontSize: 20,
        color: '#FFF',
    },
})