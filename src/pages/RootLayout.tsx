import styled from "styled-components"
import { Outlet } from "react-router"
import { Header } from "../presentation/Header"
import { RecoilProvider } from "../recoil/RecoilProvider"

const Container = styled.div`
  display: flex;
  gap: 24px;
  width: 1200px;
  margin: 24px auto;
`


const RootLayout = () => {

    return (
        <RecoilProvider>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </RecoilProvider>
    )
}

export default RootLayout
