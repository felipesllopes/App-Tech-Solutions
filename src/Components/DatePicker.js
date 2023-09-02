import Ionicons from "@expo/vector-icons/Ionicons";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { styled } from 'styled-components/native';

export default function DatePicker(props) {

    function onChange(event, selectedDate) {
        props.setValue(selectedDate);
    };

    const showMode = () => {
        DateTimePickerAndroid.open({
            value: props.getValue,
            onChange,
            mode: 'date',
            maximumDate: new Date(),
        });
    };

    return (
        <Container>
            <IconCalendar name="calendar-outline" size={27} onPress={showMode} />
            <TextDate>{format(props.getValue, 'dd/MM/yyyy')}</TextDate>
        </Container>
    )
}

const Container = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
`;

const IconCalendar = styled(Ionicons)`
padding: 0 5px;
`;

const TextDate = styled.Text`
font-size: 18px;
background-color: #DDD;
border-width: 1.5px;
border-radius: 7px;
padding: 0 6px;
`;