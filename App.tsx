
//import { Text, View } from 'react-native';

import {NativeBaseProvider, Text, VStack} from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack className='flex-1 bg-gray-700 justify-center items-center'>
      <Text className="text-6xl font-bold">Hello</Text>
    </VStack>
    </NativeBaseProvider>
  );
}