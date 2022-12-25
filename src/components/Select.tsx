import { CheckIcon, Select } from "native-base";

export function Selection() {
    return (
        <Select backgroundColor={'#F1F1F1'}
            accessibilityLabel="Categoria do Estabelecimento"
            placeholder="Categoria do Estabelecimento"
            borderWidth={0}
            width={'full'}
            _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={8} />
      }} mt="1">
          <Select.Item label="UX Research" value="ux" />
        </Select>
    )
}