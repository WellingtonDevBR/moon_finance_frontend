import { CardFooter, Title, Icon, Container } from "./styles";
import UserImage from '../../../../assets/user.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

export function Card() {
    return (
        <Container>
            <Icon>
                <img src={UserImage} />
            </Icon>
            <Title>
                <p>Customer</p>
                <span>2,523</span>
            </Title>
            <CardFooter>
                <FontAwesomeIcon icon={faArrowUpLong} color={'#61AE24'} />
                <p>10%</p>
                <span>This Week</span>
            </CardFooter>
        </Container>
    )
}