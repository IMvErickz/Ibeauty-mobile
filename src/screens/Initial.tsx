import { Image, Text, VStack, ScrollView } from "native-base";
import { useState } from "react";
import { api } from "../../lib/axios";
import { CardInitial } from "../components/cardInitial";


import { Header } from "../components/header";

interface ProductsProps{
    Name: string
    img: string
}

export function Initial() {

    const [products, getProducts] = useState<ProductsProps[]>([])
    
    api.get('/products')
        .then(function (response) {
        getProducts(response.data.products)
    })

    return (
        <ScrollView>
            <VStack w="100%" h="100%">
            <VStack w="full" alignItems={"center"} justifyContent={'center'}>
                <Header/>
            </VStack>
            <VStack w="full" alignItems={'center'} justifyContent="center" display={'flex'} flexDirection="column" className="p-24">
                    {products.map(e => {
                        return (
                            <CardInitial
                                Name={e.Name}
                                img={e.img}
                            />
                    )
                })}
            </VStack>
        </VStack>
        </ScrollView>
    )
}