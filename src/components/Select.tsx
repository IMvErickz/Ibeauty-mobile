import { CheckIcon, Select } from "native-base";
import { useEffect, useState } from "react";

interface SelectionProps{
    Title: string
    PlaceHolder: string
    Item: string
    ValueItem: string
}

export function Selection(props: SelectionProps) {

    const [item, setItem] = useState<SelectionProps[]>([])

    return (
        <Select backgroundColor={'#F1F1F1'}
            accessibilityLabel={props.Title}
            placeholder={props.PlaceHolder}
            borderWidth={0}
            width={'full'}
            _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={8} />
      }} mt="1">
            <Select.Item label={props.Item} value={props.ValueItem} />
        </Select>
    )
}