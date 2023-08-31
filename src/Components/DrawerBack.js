import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'styled-components';

export default function DrawerBack({ title }) {

    const navigation = useNavigation();

    return (
        <DrawerView>
            <Ionicons
                onPress={() => navigation.toggleDrawer()}
                name="menu" size={34}
                color={'#FFF'}
            />

            <Title>{title}</Title>

        </DrawerView>
    )
}

const DrawerView = styled.View`
flex-direction: row;
align-items: center;
padding: 8px;
background-color: #000;
`;

const Title = styled.Text`
font-size: 20px;
color: #FFF;
margin-left: 10px;
`;