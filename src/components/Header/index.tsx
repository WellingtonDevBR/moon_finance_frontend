    import { Container, InputSection } from "./styles";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'


export function Header() {

    return (
        <Container>
            <h1>possible logo</h1>
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