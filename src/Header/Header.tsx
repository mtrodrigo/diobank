import { Text, Box} from '@chakra-ui/react'

export const Header = () => {
    return (
        <Box w='full' minW='full' display='flex' alignItems='center' justifyContent='space-between' paddingInline='3' borderBottom='1px' borderBottomColor='blue.800'>
            <Text fontSize='3xl' fontWeight='bold'>DioBank</Text>
            <nav>
                <a href="/">Home</a>
            </nav>
        </Box>
    )
} 