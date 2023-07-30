import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { AuthContext } from '../../../Context/AuthContext';
import DepartmentList from "./departmentList";

export default function Department() {

    const navigation = useNavigation();
    const { addDepartment, getDepartment } = useContext(AuthContext);

    const [department, setDepartment] = useState('');
    const [array, setArray] = useState();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        (async () => {
            setArray(await getDepartment());
        })();
    }, [load]);

    function handleAdd() {
        if (department) {
            addDepartment(department)
            setDepartment('');
            setLoad(current => (current === true ? false : true));
            Keyboard.dismiss();
        }
    }

    function handleGo(item) {
        alert("Selecionou " + item)
    }

    function renderList({ item }) {
        return <DepartmentList item={item} handleGo={handleGo} />
    }

    return (
        <View style={styles.container}>

            <Ionicons name="arrow-back" size={30} onPress={() => navigation.goBack()} />

            <Text style={styles.tittle}>Criar departamento</Text>

            <View style={styles.box}>
                <TextInput
                    value={department}
                    placeholder="Nome do departamento"
                    style={styles.input}
                    onChangeText={setDepartment}
                />

                <TouchableOpacity style={styles.add} onPress={handleAdd} activeOpacity={0.8}>
                    <Ionicons name="add" size={38} color={'#FFF'} />
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.flatList}
                data={array}
                renderItem={renderList}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFF',
    },
    tittle: {
        fontSize: 23,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderWidth: 2,
        flex: 1,
        marginRight: 5,
        fontSize: 18,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 3,
        height: 40,
        elevation: 2
    },
    add: {
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        borderRadius: 6,
    },
    flatList: {
        margin: 10,
        marginTop: 20,
    },
})