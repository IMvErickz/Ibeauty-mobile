
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button, Image, Text, VStack } from 'native-base';
import { Bell, ChatCenteredDots, Gear, MapPin, SignOut } from 'phosphor-react-native';
import { useEffect, useState } from 'react';

interface DrawerProps {
  open?: string
  close?: () => void
}


export function Drawer(props: DrawerProps) {

  const navigation = useNavigation()

  const buttons = [{
    text: 'Chat',
    Icon: <ChatCenteredDots size={24} color="black" />,
    screen: ''
  },
  {
    text: 'Notificações',
    Icon: <Bell size={24} color="black" />,
    screen: ''
  },
  {
    text: 'Endereços',
    Icon: <MapPin size={24} color="black" />,
    screen: ''
  }]

  async function logout() {
    await AsyncStorage.removeItem('ClientId')
    await AsyncStorage.removeItem('ProviderId')
    navigation.navigate('psplash')
  }

  return (
    <VStack w='221px' h='full' bg={'#D7FFF8E5'} className={`px-2 items-start justify-start flex-col`} display={props.open}>
      <VStack className='w-full flex items-start justify-start py-8'>
        <Button className='bg-transparent' onPressIn={props.close}>
          <Text className='text-2xl text-black font-bold'>
            X
          </Text>
        </Button>
      </VStack>
      <VStack className='w-full flex flex-row items-center justify-start gap-x-3'>
        <Image source={{ uri: 'https://s2.glbimg.com/Ha2q-YYa3pCWtwM4E51zi_p-POI=/940x523/e.glbimg.com/og/ed/f/original/2019/02/20/blow-dry-bar-del-mar-chairs-counter-853427.jpg' }}
          alt='Não encontrado'
          size={50}
          className='rounded-full'
        />
        <Text className='text-black font-bold text-xl'>
          Nome do perfil
        </Text>
      </VStack>
      <VStack className='w-full flex flex-col gap-y-4'>
        {buttons.map(element =>
          <Button leftIcon={element.Icon} className='w-full items-start justify-start bg-transparent border-solid border-black border-t-[2px] border-b-[2px]'>
            <Text className='text-black font-bold text-xl'>
              {element.text}
            </Text>
          </Button>
        )}
      </VStack>
      <VStack className='w-full pt-96 flex flex-col items-start justify-start'>
        <Button leftIcon={<Gear size={24} color="black" weight="bold" />} className='w-full items-start justify-start bg-transparent border-solid border-black  border-b-[2px]'>
          <Text className='text-black font-bold text-xl'>
            Configurações
          </Text>
        </Button>
        <Button onPressIn={logout} leftIcon={<SignOut size={24} color="black" weight="bold" />} className='w-full items-start justify-start bg-transparent border-solid border-black  border-b-[2px]'>
          <Text className='text-black font-bold text-xl'>
            Sair
          </Text>
        </Button>
      </VStack>
    </VStack>
  );
}