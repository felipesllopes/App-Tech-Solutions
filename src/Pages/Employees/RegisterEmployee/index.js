import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import DrawerBack from "../../../Components/DrawerBack";
import firebase from '../../../Firebase/firebaseConnection';

export default function RegisterEmployee() {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [department, setDepartment] = useState();
    const [list, setList] = useState([]);

    useEffect(() => {
        firebase.database().ref("departamento").on('value', (snapshot) => {
            let array = [];
            snapshot.forEach((item) => {
                let data = {
                    departamento: item.val().departamento,
                }
                array.push(data)
            })
            setList(array);
        })
    }, []);


    return (
        <View style={styles.container}>

            <View style={styles.drawer}>
                <DrawerBack />
                <Text style={styles.textDrawer}>Cadastrar funcionário</Text>
            </View>

            <ScrollView style={styles.body}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    placeholder="Nome completo"
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.textInput}
                    value={email}
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.textInput}
                    value={phone}
                    placeholder="Telefone"
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    maxLength={11}
                />

                <TextInput
                    style={styles.textInput}
                    value={cpf}
                    placeholder="CPF (apenas números)"
                    onChangeText={setCpf}
                    keyboardType="numeric"
                    maxLength={11}
                />

                <View style={styles.viewDep}>
                    <Text style={styles.department}>Departamento:</Text>
                    <Button title='novo dep' onPress={() => navigation.navigate('Department')} />
                </View>

                <View style={styles.picker}>
                    <Picker
                        selectedValue={department}
                        onValueChange={(item, index) => setDepartment(item)}
                    >
                        <Picker.Item key={0} label='Selecionar' enabled={false} />
                        {list && list.map((v, i) => (
                            <Picker.Item
                                key={i}
                                label={v.departamento}
                                value={v.departamento}
                            />
                        ))}
                    </Picker>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        margin: 10,
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
    textInput: {
        backgroundColor: 'rgba(150,150,150,0.7)',
        fontSize: 19,
        borderRadius: 10,
        padding: 4,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    viewDep: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    department: {
        fontSize: 19,
    },
    picker: {
        backgroundColor: 'rgba(150,150,150,0.7)',
        fontSize: 19,
        borderRadius: 10,
        marginVertical: 10,
        height: 42,
        justifyContent: 'center',
    }
})