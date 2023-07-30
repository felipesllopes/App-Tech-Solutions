import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from "react-native";

export default function DepartmentList({ item, handleGo }) {

    return (
        <View style={styles.container}>

            <Text style={styles.text}>{item.departamento}</Text>
            <Ionicons name="trash-bin-outline" size={27} onPress={() => handleGo(item.departamento)} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        margin: 2,
        borderRadius: 7,
        marginTop: 5,
        flexDirection: 'row',
        padding: 3,
        paddingRight: 10,
        alignItems: 'center',
        paddingVertical: 6,
        marginVertical: 15,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        marginHorizontal: 5,
        padding: 2,
        flex: 1,
        marginRight: 10,
    },
})