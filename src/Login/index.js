import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Dimensions, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styled } from 'styled-components';
import * as yup from "yup";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {

    const { loading, authLogin, authRegister } = useContext(AuthContext);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [invisible, setInvisible] = useState(true);
    const [login, setLogin] = useState(true);
    const placeholderColor = '#BBB';
    let elevation = 2;

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
        <Wallpaper
            style={{ width: windowWidth, height: windowHeight }}
            source={require('../img/tech1.jpg')}
        >

            <LogoTech source={require('../img/logo.png')} resizeMode="contain" />

            <View style={{ display: login ? 'none' : 'flex' }}>

                <ViewInput>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                value={value}
                                placeholder='Nome completo'
                                onChangeText={onChange}
                                textAlign="left"
                                placeholderTextColor={placeholderColor}
                            />
                        )}
                    />
                    {errors.name && <TextError>{errors.name?.message}</TextError>}
                </ViewInput>

                <ViewInput>
                    <Controller
                        control={control}
                        name="cpf"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                value={value}
                                placeholder='CPF (apenas os números)'
                                onChangeText={onChange}
                                keyboardType="numeric"
                                textAlign="left"
                                maxLength={11}
                                placeholderTextColor={placeholderColor}
                            />
                        )}
                    />
                    {errors.cpf && <TextError>{errors.cpf?.message}</TextError>}
                </ViewInput>

            </View>

            <ViewInput>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            placeholder='E-mail'
                            onChangeText={onChange}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor={placeholderColor}
                        />
                    )}
                />
                {errors.email && <TextError>{errors.email?.message}</TextError>}
            </ViewInput>

            <ViewInput style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <Input
                            value={value}
                            placeholder='Senha'
                            onChangeText={onChange}
                            style={{ flex: 1 }}
                            autoCapitalize="none"
                            secureTextEntry={invisible}
                            placeholderTextColor={placeholderColor}
                        />
                    )}
                />
                <ButtonVisibility
                    name={invisible ? "eye-slash" : "eye"}
                    size={26} color={'#777'}
                    onPress={changeVisibility}
                />
                {errors.password && <TextError>{errors.password?.message}</TextError>}
            </ViewInput>

            <ButtonRegister style={{ elevation: 5 }} onPress={handleSubmit(handleAccess)} activeOpacity={0.8}>
                {loading ?
                    <ActivityIndicator size={30} color={'#FFF'} />
                    :
                    <TextButtonRegister>{login ? 'Logar' : 'Cadastrar'}</TextButtonRegister>
                }
            </ButtonRegister>

            <ButtonChange
                onPress={option}>
                {login ? 'Novo cadastro' : 'Fazer login'}
            </ButtonChange>

        </Wallpaper>
    )
}

const Wallpaper = styled.ImageBackground`
flex: 1;
padding: 10px;
`;

const LogoTech = styled.Image`
width: 295px;
height: 76px;
align-self: center;
margin: 25px 0;
`;

const ViewInput = styled.View`
background-color: rgba(9,9,9,0.7);
margin: 14px 10px;
padding: 4px 4px 4px 10px;
border-radius: 10px;
height: 38px;
`;

const Input = styled.TextInput`
color: #FFF;
font-size: 19px;
`;

const ButtonVisibility = styled(Icon)`
padding: 0 10px;
`;

const ButtonRegister = styled.TouchableOpacity`
background-color: #000;
margin: 25px 10px 10px 10px;
padding: 4px;
border-radius: 10px;
`;

const TextButtonRegister = styled.Text`
color: #FFF;
font-size: 20px;
text-align: center;
`;

const ButtonChange = styled.Text`
font-size: 17px;
color: #FFF;
text-align: center;
text-decoration: underline;
`;

const TextError = styled.Text`
color: #FFF;
margin: 0 5px;
font-size: 16px;
position: absolute;
top: 38px;
`;