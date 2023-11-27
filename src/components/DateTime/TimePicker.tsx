import { Text, TouchableOpacity } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from "react";
import dayjs from 'dayjs'

interface TimePickerProps {
    buttonTitle: string

}

export function TimePicker(props: TimePickerProps) {

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);

    const dateFormat = dayjs(date.getTime()).format('HH:mm')

    const onChange = (event: DateTimePickerEvent, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <>
            <TouchableOpacity className="bg-boldColor w-full flex items-center justify-center h-12 rounded" onPress={showTimepicker}>
                <Text className="text-white text-2xl font-semibold">{props.buttonTitle}</Text>
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    value={date}
                    mode={'time'}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}

            <Text className="text-2xl font-semibold">Hora Selecionada: {dateFormat}</Text>
        </>
    )
}