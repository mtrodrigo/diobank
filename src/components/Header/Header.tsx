import { Text, Box, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {

        setIsLoggedIn(false)
        changeLocalStorage({login: false})
        navigate('/')
    }

    return (
        <Box
            w='full'
            minW='full'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            paddingInline='3'
            borderBottom='1px'
            boxShadow={'base'}
            borderBottomColor='purple.900'
        >
            <Text fontSize='3xl' fontWeight='bold'>
                DioBank
            </Text>
            <nav>
                {isLoggedIn && (
                    <Button
                        variant={'outline'}
                        colorScheme='whiteAlpha'
                        color='white'
                        size={'sm'}
                        onClick={() => logout()}

                    >
                        Sair
                    </Button>
                )}
            </nav>
        </Box>
    )
} 