import { useLocalSearchParams } from "expo-router";
import { Header } from "../../components/header";
import { Buttons } from "../../components/payment/Button";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import * as SecureStorage from 'expo-secure-store'

import { api } from "../../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";

interface ProviderDataProps {
    Name: string
    img: string
}

interface ServiceDataProps {
    service: [{ NameService: string }]
}

interface UserDataProps {
    Name: string
    email: string
}

const paymentSchemaData = z.object({
    email: z.string(),
    name: z.string(),
    observations: z.string().optional()
})

type PaymentSchema = z.infer<typeof paymentSchemaData>

export default function Payment() {
    const [userId, setUserId] = useState('')
    const params = useLocalSearchParams()
    const { date, hour, providerId, serviceId } = params

    async function getUserId() {
        const userId = await SecureStorage.getItemAsync('userId')
        if (userId) {
            setUserId(userId)
        }
    }

    getUserId()

    const dateWithTime = dayjs(String(date)).set('hour', Number(hour)).startOf('hour').toDate()

    async function getProviderData(id: string) {
        const response = await api.get<ProviderDataProps>(`/provider/${id}`)

        return response.data
    }

    async function getServiceData(id: string) {
        const response = await api.get<ServiceDataProps>(`/service/${id}`)

        return response.data.service
    }

    async function getUserData(id: string) {
        const response = await api.get<UserDataProps>(`/user/${id}`)

        return response.data
    }

    const { data: providerData } = useQuery({
        queryKey: ['provider-data', providerId],
        queryFn: () => getProviderData(String(providerId))
    })

    const { data: serviceData } = useQuery({
        queryKey: ['provider-data', serviceId],
        queryFn: () => getServiceData(String(serviceId))
    })

    const { data: userData } = useQuery({
        queryKey: ['user-info', userId],
        queryFn: () => getUserData(userId)
    })

    const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    const dateNumberOfWeek = dayjs(String(date)).get('day')
    const extensiveDay = weekDays[dateNumberOfWeek]
    const getDate = dayjs(String(date)).get('date')

    const dateFormated = `${extensiveDay}, ${getDate} ás ${String(hour).padStart(2, '')}:00`

    const { handleSubmit, setValue, formState: { isSubmitting, errors } } = useForm<PaymentSchema>({
        resolver: zodResolver(paymentSchemaData)
    })

    useEffect(() => {
        if (userData) {
            setValue('name', userData?.Name)
            setValue('email', userData?.email)
        }

    }, [userData, setValue])

    async function handleSetPayment(data: PaymentSchema) {
        const { email, name } = data
        await api.post('/scheduling/create', {
            date: dateWithTime,
            email,
            name
        }, {
            params: {
                providerId,
                serviceId,
                clientId: userId
            }
        })
    }

    return (
        <ScrollView>
            <View>
                <View className="w-full flex">
                    <Header />
                </View>

                <View className='w-full flex flex-col items-center justify-center'>
                    <View className="flex flex-row items-center justify-center gap-x-14 pt-8">
                        <Text className='text-black font-extrabold text-2xl'>{providerData?.Name}</Text>
                        <Image
                            className="rounded-full w-20 h-20"
                            source={{ uri: providerData?.img }} />
                    </View>
                    <View className='w-full px-12'>
                        <Text className='font-bold text-xl'>{serviceData?.[0].NameService}</Text>
                        <Text className='text-lg font-semibold'>{dateFormated}</Text>
                        <View className='bg-borderColor w-full h-1' />
                        <TouchableOpacity className='bg-white'>
                            <Text className='text-xl font-bold'>Adicionar mais itens</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className='w-full pt-20 px-2'>
                    <Text className='text-xl font-bold'>Selecione a forma de pagamento</Text>
                    <Buttons />
                </View>
                <View className="w-full gap-y-4 px-5">
                    <TouchableOpacity disabled={isSubmitting} onPress={handleSubmit(handleSetPayment)} className={`w-full ${isSubmitting ? 'bg-gray-50' : 'bg-boldColor'} p-2 rounded`}>
                        <Text className='text-white font-bold text-xl'>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='w-full bg-red-20 p-2 rounded'>
                        <Text className='text-white font-bold text-xl'>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}