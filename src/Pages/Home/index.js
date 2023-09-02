import { useContext } from "react";
import { styled } from "styled-components";
import DrawerBack from "../../Components/DrawerBack";
import { AuthContext } from "../../Context/AuthContext";

export default function Home() {

    const { authLogout, user } = useContext(AuthContext);

    return (
        <Container>

            <DrawerBack title={'Menu'} />

            <Header>
                <LogoTech source={require('../../img/logo.png')} />
            </Header>

            <User>usuário: {user && user.name}</User>

            <ButtonLogout onPress={authLogout}>Sair</ButtonLogout>

        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
background-color: #DDD;
`;

const Header = styled.View`
background-color: #000;
padding: 20px 10px;
`;

const LogoTech = styled.Image`
height: 60px;
width: 236px;
align-self: center;
`;

const User = styled.Text`
font-style: italic;
font-size: 16px;
margin-left: 5px;
`;

const ButtonLogout = styled.Text`
background-color: #000;
color: #FFF;
font-size: 19px;
text-align: center;
padding: 6px 0;
border-radius: 10px;
position: absolute;
bottom: 20px;
width: 95%;
align-self: center;
`;