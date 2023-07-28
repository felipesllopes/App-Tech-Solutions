import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Dimensions, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from "yup";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {

    const { loading, authLogin, authRegister } = useContext(AuthContext);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [invisible, setInvisible] = useState(true);
    const [login, setLogin] = useState(true);
    const placeholderColor = '#BBB';

    const schemaLogin = yup.object({
        email: yup.string().email("E-mail inválido.").required("Informe seu e-mail."),
        password: yup.string().min(6, "A senha deve conter pelo menos 6 dígitos.").required("Informe sua senha."),
    })

    const schemaRegister = yup.object({
        name: yup.string().required('Informe seu nome completo.'),
        cpf: yup.string().min(11, "Digite o CPF completo, apenas números.").required("Informe seu CPF."),
        email: yup.string().email("E-mail inválido.").required("Informe seu e-mail."),
        password: yup.string().min(6, "A senha deve conter pelo menos 6 dígitos.").required("Informe sua senha."),
    })

    const { control, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(login ? schemaLogin : schemaRegister)
    })


    function handleAccess(data) {
        if (login) {
            authLogin(data.email, data.password)
        } else {
            authRegister(data.name, data.cpf, data.email, data.password);
        }
    }

    function option() {
        setLogin(current => (current === true ? false : true))
        reset();
    }

    function changeVisibility() {
        setInvisible(current => (current === true ? false : true))
    }

    return (
        <ImageBackground
            style={[styles.container, { width: windowWidth, height: windowHeight }]}
            source={require('../img/tech1.jpg')}
        >

            <Image source={require('../img/logo.png')} style={styles.logo} resizeMode="contain" />

            <View style={{ display: login ? 'none' : 'flex' }}>

                <View style={styles.viewInput}>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                placeholder='Nome completo'
                                style={styles.input}
                                onChangeText={onChange}
                                textAlign="left"
                                placeholderTextColor={placeholderColor}
                            />
                        )}
                    />
                    {errors.name && <Text style={styles.msgError}>{errors.name?.message}</Text>}
                </View>

                <View style={styles.viewInput}>
                    <Controller
                        control={control}
                        name="cpf"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                placeholder='CPF (apenas os números)'
                                style={styles.input}
                                onChangeText={onChange}
                                keyboardType="numeric"
                                textAlign="left"
                                maxLength={11}
                                placeholderTextColor={placeholderColor}
                            />
                        )}
                    />
                    {errors.cpf && <Text style={styles.msgError}>{errors.cpf?.message}</Text>}
                </View>

            </View>

            <View style={styles.viewInput}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            value={value}
                            placeholder='E-mail'
                            style={styles.input}
                            onChangeText={onChange}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor={placeholderColor}
                        />
                    )}
                />
                {errors.email && <Text style={styles.msgError}>{errors.email?.message}</Text>}
            </View>

            <View style={[styles.viewInput, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            value={value}
                            placeholder='Senha'
                            onChangeText={onChange}
                            style={[styles.input, { flex: 1 }]}
                            autoCapitalize="none"
                            secureTextEntry={invisible}
                            placeholderTextColor={placeholderColor}
                        />
                    )}
                />
                <TouchableOpacity style={styles.visibleButton} onPress={changeVisibility}>
                    <Icon name={invisible ? "eye-slash" : "eye"} size={26} color={'#777'} />
                </TouchableOpacity>
                {errors.password && <Text style={styles.msgError}>{errors.password?.message}</Text>}
            </View>


            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleAccess)} activeOpacity={0.8}>
                {loading ?
                    <ActivityIndicator size={30} color={'#FFF'} />
                    :
                    <Text style={styles.textButton}>{login ? 'Logar' : 'Cadastrar'}</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={option} activeOpacity={0.8}>
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
        marginVertical: 14,
        padding: 4,
        borderRadius: 10,
        paddingLeft: 10,
        height: 38,
        // elevation: 3,
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
        elevation: 5,
    },
    visibleButton: {
        paddingHorizontal: 10,
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    textButton2: {
        fontSize: 17,
        color: '#FFF',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    msgError: {
        color: '#FFF',
        marginHorizontal: 5,
        fontSize: 15,
        position: 'absolute',
        top: 38,
    },
})