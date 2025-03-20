import { Box, Button, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { UserDataProps } from "../pages/Home"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../components/AppContext/AppContext"

export default function Account() {

    const [userData, setUserdata] = useState<UserDataProps>()
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AppContext)
    const actualDate = new Date()

    !isLoggedIn && navigate('/')

    if (id !== userData?.id) {
        navigate('/')
    }

    useEffect(() => {
        const getData = async () => {
            const data = await api as UserDataProps
            setUserdata(data)
        }

        getData()
    }, [])

    const infoAccount = () => {
        navigate('/infoaccount')
    }

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
            {userData === undefined ? (<Spinner color="white" bg={'transparent'} size={"xl"} />) :
                (
                    <>
                        <Text fontSize={"xl"} bgColor={"purple.900"} fontWeight={"bold"}>
                            Bem vindo {userData?.name}
                        </Text>
                        <Text bgColor={"purple.900"}>
                            Seu saldo: {(userData?.balance)?.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}
                        </Text>
                        <Text bgColor={"purple.900"} marginBottom={5}>
                            {actualDate.toLocaleString()}
                        </Text>
                        <Button
                            onClick={() => infoAccount()}
                        >
                            Detalhes
                        </Button>
                    </>
                )}

        </Box>
    )
}