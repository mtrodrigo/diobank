import { Box, Text } from "@chakra-ui/react"
export default function InfoAcoount() {
    return (
        <Box
            minW='sm'
            minH='250px'
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
            <Text fontSize={"xl"}>Informações da conta</Text>
            
        </Box>
    )
}