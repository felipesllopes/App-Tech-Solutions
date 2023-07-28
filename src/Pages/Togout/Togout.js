import { StyleSheet, Text, View } from "react-native";

export default function Togout() {
    return (
        <View style={styles.container}>
            <Text>Sair</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})