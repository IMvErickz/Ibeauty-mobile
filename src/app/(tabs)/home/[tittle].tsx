import { useLocalSearchParams } from "expo-router";
import { ClientHome } from "../../../components/Home/clientHome";
import { ProviderHome } from "../../../components/Home/providerHome";

export default function Initial() {


    const local = useLocalSearchParams();

    const { tittle } = local

    return (
        tittle == "Cliente" ? <ClientHome /> : <ProviderHome />
    )
}