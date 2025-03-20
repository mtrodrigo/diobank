import { Box, Input, Button, Text } from '@chakra-ui/react';
import { login } from '../services/login';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext/AppContext';

export interface UserDataProps {
    name: string,
    email: string,
    password: string,
    balance: number,
    id: string
}

export default function Home() {
    const [email, setEmail] = useState<string>('')
    const navigate = useNavigate()
    const { setIsLoggedIn } = useContext(AppContext)

    const validadeUser = async (email: string) => {
        const loggeIn = await login(email)

        if (!loggeIn) {
            alert('E-mail inváilido')
            return
        }

        setIsLoggedIn(true)
        navigate('/account/1')
    }

    return (
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                placeholder='Senha'
                type='password'


            />
            <Button
                colorScheme='whiteAlpha'
                variant='outline'
                marginTop='4'
                onClick={() => validadeUser(email)}
            >
                Entrar
            </Button>
        </Box>
    )
}