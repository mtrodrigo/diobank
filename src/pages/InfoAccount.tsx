import { Box, Spinner, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserDataProps } from "./Home"
import { api } from "../api"

export default function InfoAcoount() {

    const [userData, setUserdata] = useState<UserDataProps>()
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const data = await api as UserDataProps
            setUserdata(data)
        }

        getData()
    }, [])

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
            {userData === undefined ? <Spinner color="white" bg={'transparent'} size={"xl"} /> : (
                <>
                    <Text bg={'transparent'} fontSize={"xl"}>
                        Informações do usuário: {userData?.name}
                    </Text>
                    <Text bg={'transparent'}>
                        E-mail: {userData?.email}
                    </Text>
                </>
            )}

        </Box>
    )
}