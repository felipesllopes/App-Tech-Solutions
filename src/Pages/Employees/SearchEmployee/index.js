import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { styled } from "styled-components/native";
import DrawerBack from "../../../Components/DrawerBack";
import firebase from "../../../Firebase/firebaseConnection";

export default function SearchEmployee() {

    const [category, setCategory] = useState('');
    const [textSearch, setTextSearch] = useState('');
    const [dep, setDep] = useState([]);
    const [department, setDepartment] = useState('');

    useEffect(() => {
        setTextSearch('');
    }, [category])

    useEffect(() => {
        firebase.database().ref('departamento').on('value', (snapshot) => {
            setDep([])

            snapshot.forEach(item => {
                let data = {
                    departamento: item.val().departamento,
                }
                setDep(current => [...current, data]);
            })
        })
    }, [])

    return (
        <Container>

            <DrawerBack title={'Pesquisar funcionário'} />

            <Header style={{ elevation: 10 }}>
                <Title>Pesquisar por: </Title>

                <ViewPicker>
                    <Picker
                        selectedValue={category}
                        onValueChange={(item, index) => setCategory(item)}
                    >
                        <Picker.Item label="Selecione" enabled={false} />
                        <Picker.Item label="Nome" value={'nome'} />
                        <Picker.Item label="E-mail" value={'e-mail'} />
                        <Picker.Item label="CPF" value={'cpf'} />
                        <Picker.Item label="Departamento" value={'departamento'} />
                    </Picker>
                </ViewPicker>
            </Header>


            <Body>

                <ViewSearch style={{ display: category === 'nome' || category === 'e-mail' || category === 'cpf' ? 'flex' : 'none' }}>
                    <TextSearch
                        value={textSearch}
                        onChangeText={setTextSearch}
                        placeholder={`Pesquise o ${category} aqui`}
                        keyboardType={category === 'e-mail' ? 'email-address' : category === 'cpf' ? 'numeric' : 'name-phone-pad'}
                    />

                    <IconSearch name="search" size={26} />
                </ViewSearch>

                <ViewDep style={{ display: category === 'departamento' ? 'flex' : 'none' }}>
                    <Picker
                        selectedValue={department}
                        onValueChange={(item, index) => setDepartment(item)}
                    >
                        <Picker.Item label="Selecione o departamento" enabled={false} />
                        {dep && dep.map((v, i) => (
                            <Picker.Item
                                key={i}
                                label={v.departamento}
                                value={v.departamento}
                            />
                        ))}
                    </Picker>
                </ViewDep>

            </Body>

        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
`;

const Header = styled.View`
flex-direction: row;
align-items: center;
background-color: blanchedalmond;
padding: 20px;
margin-bottom: 20px;
`;

const Title = styled.Text`
font-size: 19px;
`;

const ViewPicker = styled.View`
background-color: rgba(300,300,300, 0.5);
border-radius: 10px;
height: 36px;
justify-content: center;
flex: 1;
border-width: 2px;
`;

const Body = styled.View`
margin: 10px;
`;

const ViewSearch = styled.View`
border-width: 2px;
flex-direction: row;
align-items: center;
padding: 7px 4px;
border-radius: 10px;
`;

const TextSearch = styled.TextInput`
font-size: 18px;
flex: 1;
padding: 0 4px;
`;

const IconSearch = styled(Ionicons)`
padding: 0 14px;
`;

const ViewDep = styled.View`
background-color: rgba(300,300,300, 0.5);
font-size: 19px;
border-radius: 10px;
height: 42px;
justify-content: center;
border-width: 2px;
`;