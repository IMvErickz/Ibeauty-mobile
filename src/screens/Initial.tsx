import { VStack } from "native-base";
import { Buttoon } from "../components/Button";
import { Header } from "../components/header";

export function Initial() {
    return (
        <VStack w="100%" h="100%">
            <Header />
        </VStack>
    )
}