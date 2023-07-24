import { Button, Text, VStack } from "native-base";

interface PaymentsProps {
    Type: string
    Icon: JSX.Element
}

export function Payments(props: PaymentsProps) {

    return (
        <VStack className="w-full flex items-start">
            <Button
                leftIcon={props.Icon}

                className="bg-white w-full justify-start border-t-borderColor border-b-borderColor border-t-2 border-b-2"
            >
                <Text className="text-black font-bold text-xl">{props.Type}</Text>
            </Button>
        </VStack>

    )
}