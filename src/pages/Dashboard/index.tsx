import { CardContainer, Container } from "./styles";
import { Card } from "./components/Card";
import { Details } from "./components/Details";

export function Dashboard() {
    
    return (
        <Container>
            <h1>Dashboard</h1>
            <p>Dashboard</p>
            <CardContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardContainer>
            <Details />
            
        </Container>
    )
}