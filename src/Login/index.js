import { useContext, useState } from "react";
import { ActivityIndicator, Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from "../Context/AuthContext";

export default function Login() {

    const { loading, authLogin, authRegister } = useContext(AuthContext);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const [login, setLogin] = useState(true);

    const placeholderColor = '#BBB';

    function handleAccess() {
        if (login) {
            authLogin(email, password)
        } else {
            authRegister(name, cpf, email, password);
        }
    }

    function option() {
        setLogin(current => (current === true ? false : true))
        setName('');
        setCpf('');
        setEmail('');
        setPassword('');
    }

    function changeVisibility() {
        setVisible(current => (current === true ? false : true))
    }

    return (
        <ImageBackground
            style={[styles.container, { width: windowWidth, height: windowHeight }]}
            source={require('../img/tech1.jpg')}
        >

            <Image source={require('../img/logo.png')} style={styles.logo} resizeMode="contain" />

            <View style={{ display: login ? 'none' : 'flex' }}>

                <View style={styles.viewInput}>
                    <TextInput
                        value={name}
                        placeholder='Nome completo'
                        style={styles.input}
                        onChangeText={setName}
                        textAlign="left"
                        placeholderTextColor={placeholderColor}
                    />
                </View>

                <View style={styles.viewInput}>
                    <TextInput
                        value={cpf}
                        placeholder='CPF (apenas os números)'
                        style={styles.input}
                        onChangeText={setCpf}
                        keyboardType="numeric"
                        textAlign="left"
                        placeholderTextColor={placeholderColor}
                    />
                </View>

            </View>

            <View style={styles.viewInput}>
                <TextInput
                    value={email}
                    placeholder='E-mail'
                    style={styles.input}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor={placeholderColor}
                />
            </View>

            <View style={[styles.viewInput, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <TextInput
                    value={password}
                    placeholder='Senha'
                    onChangeText={setPassword}
                    style={[styles.input, { flex: 1 }]}
                    autoCapitalize="none"
                    secureTextEntry={visible}
                    placeholderTextColor={placeholderColor}
                />
                <TouchableOpacity style={styles.visibleButton} onPress={changeVisibility}>
                    <Icon name={visible ? "eye-slash" : "eye"} size={26} color={'#777'} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleAccess} activeOpacity={0.8}>
                {loading ?
                    <ActivityIndicator size={30} color={'#FFF'} />
                    :
                    <Text style={styles.textButton}>{login ? 'Logar' : 'Cadastrar'}</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={option} activeOpacity={0.8}>
                <Text style={styles.textButton2}>{login ? 'Novo cadastro' : 'Fazer login'}</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    logo: {
        width: 295,
        height: 76,
        alignSelf: 'center',
        marginVertical: 25,
    },
    viewInput: {
        backgroundColor: 'rgba(9,9,9,0.7)',
        margin: 10,
        padding: 4,
        borderRadius: 10,
        paddingLeft: 10,
        height: 38,
    },
    input: {
        color: '#FFF',
        fontSize: 19,
    },
    button: {
        backgroundColor: 'black',
        margin: 10,
        marginTop: 25,
        padding: 4,
        borderRadius: 10,
    },
    visibleButton: {
        paddingHorizontal: 10,
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    button2: {

    },
    textButton2: {
        fontSize: 17,
        color: '#FFF',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
})