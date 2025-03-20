import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
`

export const Layout = ({children}: any) => {
    return(
        <Container>
            <Header/>
                {children}
            <Footer/>
        </Container>
    )
}