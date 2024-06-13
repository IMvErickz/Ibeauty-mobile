import { Payments } from "./Payments";
import { Clock, CreditCard, Money } from "phosphor-react-native";
import { View } from 'react-native'

export function Buttons() {
    const paymentsMode = [{
        Type: "Dinheiro",
        Icon: <Money size={32} color="#288755" weight="fill" style={{ paddingRight: 80 }} />
    },
    {
        Type: "Cartão de crédito",
        Icon: <CreditCard size={32} color="#000" weight="duotone" style={{ paddingRight: 80 }} />
    },
    {
        Type: "Cartão de débito",
        Icon: <CreditCard size={32} color="#000" weight="duotone" style={{ paddingRight: 80 }} />
    },
    {
        Type: "Pagar na hora",
        Icon: <Clock size={32} color="#000" weight="duotone" style={{ paddingRight: 80 }} />
    },
    {
        Type: "Pix",
        Icon: <Money size={32} color="#288755" weight="fill" style={{ paddingRight: 80 }} />
    }]

    return (
        <View className='w-full p-5'>
            <View>
                {paymentsMode.map(pay => {
                    return (
                        <Payments
                            key={pay.Type}
                            Type={pay.Type}
                            Icon={pay.Icon}
                        />
                    )
                })}
            </View>
        </View>
    )
}