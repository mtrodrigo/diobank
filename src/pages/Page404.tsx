import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Page404 = () => {
    return (
        <Box
            minW='sm'
            minH='250px'
            border='1px'
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
            gap='10'
            p='10'
            borderRadius='2xl'
            bg='purple.900'
            boxShadow='dark-lg'
        >
            <Text fontSize={"2xl"} bg={'transparent'}>404 - Page is not found</Text>
            <Link to='/'>Retorne a Página Inicial</Link>

        </Box>
    )
}