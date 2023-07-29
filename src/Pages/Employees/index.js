import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import DrawerBack from "../../Components/DrawerBack";

export default function Employees() {

    const navigation = useNavigation();
    let opacity = 0.7;

    function handleNavigation(pag) {
        navigation.navigate(pag);
    }

    return (
        <View style={styles.container}>

            <View style={styles.drawer}>
                <DrawerBack />
                <Text style={styles.textDrawer}>Funcionários</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={opacity}
                    onPress={() => handleNavigation('RegisterEmployee')}
                >
                    <Image style={styles.img} source={require('../../img/icons/add.png')} resizeMode="contain" />
                    <Text style={styles.textButton}>Cadastrar funcionário</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={opacity}
                    onPress={() => handleNavigation('SearchEmployee')}
                >
                    <Image style={styles.img} source={require('../../img/icons/search.png')} resizeMode="contain" />
                    <Text style={styles.textButton}>Pesquisar funcionário</Text>
                </TouchableOpacity>
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
    button: {
        borderWidth: 2,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        width: Dimensions.get('window').width / 2.1,
    },
    img: {
        width: 190,
        height: 234,
        marginTop: 10,
    },
    textButton: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
})