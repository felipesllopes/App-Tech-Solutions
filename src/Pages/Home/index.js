import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

export default function Home() {

    const { authLogout } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require('../../img/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.body}>
                <Text>Home</Text>

                <TouchableOpacity style={styles.logoutButton} onPress={authLogout}>
                    <Text style={styles.textButton}>Desconectar</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
    body: {
        flex: 1,
    },
    logoutButton: {
        backgroundColor: '#000',
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        justifyContent: 'center',
    },
    textButton: {
        color: '#FFF',
        fontSize: 18,
    },
})