import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerBack from "../../Components/DrawerBack";
import { AuthContext } from "../../Context/AuthContext";
import { styled } from "styled-components";

export default function MyProfile() {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            console.log(await user)
        })()
    }, [])

    return (
        <Container>

            <DrawerBack title={'Meu Perfil'} />

            {user &&
                <ViewUser>
                    <TextUser>Usuário: {user.name}</TextUser>
                    <TextUser>E-mail: {user.email}</TextUser>
                    <TextUser>Uid: {user.uid}</TextUser>
                </ViewUser>
            }
        </Container>
    )
}

const Container = styled.SafeAreaView`
flex: 1;
background-color: darkcyan;
`;

const ViewUser = styled.View`
margin: 5px;
`;

const TextUser = styled.Text`
font-size: 16px;
`;