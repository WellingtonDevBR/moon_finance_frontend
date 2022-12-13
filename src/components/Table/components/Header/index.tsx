import { Container, HeaderButton } from './styles'

interface HeaderProps {
    title?: string;
}

export function Header({title}: HeaderProps) {
    return (
        <Container>
            <h1>{title} List</h1>
            <HeaderButton>+ Add {title}</HeaderButton>
        </Container>
    )
}