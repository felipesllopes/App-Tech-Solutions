import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DrawerBack from "../../Components/DrawerBack";
import { AuthContext } from "../../Context/AuthContext";

export default function Home() {

    const { authLogout, user } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <View style={styles.drawer}>
                <DrawerBack />
                <Text style={styles.textDrawer}>Menu</Text>
            </View>

            <View style={styles.header}>
                <Image source={require('../../img/logo.png')} style={styles.logo} />
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={authLogout}>
                <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>

            <Text style={styles.user}>usuário: {user && user.uid}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
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
    header: {
        backgroundColor: '#000',
        padding: 10,
        paddingVertical: 20,
    },
    logo: {
        height: 60,
        width: 236,
        alignSelf: 'center',
    },
    user: {
        fontStyle: 'italic',
        textAlign: 'right',
    },
    logoutButton: {
        backgroundColor: '#000',
        alignSelf: 'center',
        paddingVertical: 6,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        width: '95%',
        borderRadius: 10,
    },
    textButton: {
        color: '#FFF',
        fontSize: 19,
        textAlign: 'center',
    },
})