import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { styled } from 'styled-components';
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
        <Container>

            <DrawerBack title={'Cadastrar funcionário'} />

            <Scroll>
                <InputText
                    value={name}
                    placeholder="Nome completo"
                    onChangeText={setName}
                />

                <InputText
                    value={email}
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <InputText
                    value={phone}
                    placeholder="Telefone"
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    maxLength={11}
                />

                <InputText
                    value={cpf}
                    placeholder="CPF (apenas números)"
                    onChangeText={setCpf}
                    keyboardType="numeric"
                    maxLength={11}
                />

                <ViewDep>
                    <TextDep>Departamento:</TextDep>
                    <Button title='novo dep' onPress={() => navigation.navigate('Department')} />
                </ViewDep>

                <ViewPicker>
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
                </ViewPicker>

            </Scroll>
        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
`;

const Scroll = styled.ScrollView`
margin: 10px;
`;

const InputText = styled.TextInput`
background-color: rgba(150,150,150,0.7);
font-size: 19px;
border-radius: 10px;
padding: 4px 10px;
margin: 10px 0;
`;

const ViewDep = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0 10px;
`;

const TextDep = styled.Text`
font-size: 19px;
`;

const ViewPicker = styled.View`
background-color: rgba(150,150,150,0.7);
font-size: 19px;
border-radius: 10px;
margin: 10px 0;
height: 42px;
justify-content: center;
`;