import Container from "../componentes/container";
import Logo from "../assets/icons/Logo.svg?react"

export default function Header(){
    return <Container className="mt-3 md:mt-20" as="header">
            <Logo className="h-9 md:h-12 "/>
        </Container>

}