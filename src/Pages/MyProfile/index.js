import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerBack from "../../Components/DrawerBack";
import { AuthContext } from "../../Context/AuthContext";

export default function MyProfile() {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            console.log(await user)
        })()
    }, [])

    return (
        <View style={styles.container}>

            <View style={styles.drawer}>
                <DrawerBack />
                <Text style={styles.textDrawer}>Meu Perfil</Text>
            </View>

            {user &&
                <View>
                    <Text>Usuário: {user.name}</Text>
                    <Text>E-mail: {user.email}</Text>
                    <Text>Uid: {user.uid}</Text>
                </View>
            }
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