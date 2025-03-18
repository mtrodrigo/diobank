import { Layout } from './Layout/Layout';
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  Text
} from '@chakra-ui/react';

function App() {
  return (
    <div>
      <ChakraProvider>
        <Layout>
          <Box
            maxW='sm'
            border='1px'
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
            gap='3'
            p='10'
            borderRadius='2xl'
            bg='purple.900'
            boxShadow='dark-lg'
          >
            <Text fontSize='2xl' bg='purple.900' paddingBottom='3'>Faça o login</Text>
            <Input
              placeholder='E-mail'
              type='email'
            />
            <Input
              placeholder='Senha'
              type='password'
            />
            <Button colorScheme='whiteAlpha' variant='outline' marginTop='4'>
              Entrar
            </Button>
          </Box>
        </Layout>
      </ChakraProvider>
    </div>
  );
}

export default App;
