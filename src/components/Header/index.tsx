import { Container, InputSection } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faBars } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {
    isSiderBarOpen: boolean;
    onHandleSideBar: () => void;
}

export function Header({ isSiderBarOpen, onHandleSideBar }: HeaderProps) {
    return (
        <Container>
            <FontAwesomeIcon icon={faBars} fontSize={24} color={'#E0E0E0'} onClick={onHandleSideBar}/>
            <InputSection>
                <FontAwesomeIcon icon={faSearch} color='#696969' fontSize={15}/>
                <input type={'search'} placeholder='Search Here'/>
            </InputSection>
            <div>
                <FontAwesomeIcon icon={faBell} color='#696969' fontSize={15}/>
                <p>JAMES DOE</p>
            </div>
        </Container>
    )
}