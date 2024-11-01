import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { IconAvatar, IconLogo } from "../../components/Icons"
import { TransparentButton } from "../../components/TransparentButton"
import { Container, StyledHeader, List, ListItem } from "./styles"
import { useRecoilValue } from "recoil"
import { userAtom } from "../../recoil/atoms/userAtom"
import { useLogout } from "../../hooks/useLogout"

export const Header = () => {
    const { logout } = useLogout()

    const user = useRecoilValue(userAtom)
    const onAskForLogout = () => {
        logout()
    }

    return (<StyledHeader>
        <Container>
            <List>
                <ListItem>
                    <Link to="/">
                        <IconLogo />
                    </Link>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Button link to="/auth/register">
                        Abrir conta
                    </Button>
                </ListItem>
                <ListItem>
                    <Button outline link to="/auth/login">
                        Login
                    </Button>
                </ListItem>
                <ListItem>
                    {user?.name}
                </ListItem>
                <ListItem>
                    <IconAvatar />
                </ListItem>
                <ListItem>
                    <TransparentButton onClick={onAskForLogout}>
                        Logout
                    </TransparentButton>
                </ListItem>
            </List>
        </Container>
    </StyledHeader>)
}