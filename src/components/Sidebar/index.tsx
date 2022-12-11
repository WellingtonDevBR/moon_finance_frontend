import { Container, HamburguerContainer, HeaderContainer, NavigationContainer } from "./styles";
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export function Sidebar() {
  return (
    <Container>
      <HeaderContainer>
        <span><img src={logo} alt="ig.news" />MOON FINANCE</span>    
        <HamburguerContainer>
          <FontAwesomeIcon icon={faBars} fontSize={24} color={'#E0E0E0'}/>
        </HamburguerContainer>    
      </HeaderContainer>
      <NavigationContainer>
        <a className="active" href="#">Dashboard</a>
        <a href="#">Customer</a>
        <a href="#">Supplier</a>
        <a href="#">Product</a>
        <a href="#">Region</a>
        <a href="#">Platform</a>
        <a href="#">Marketplace</a>
        <a href="#">Order</a>
        <a href="#">Stock</a>
      </NavigationContainer>
    </Container>
  )
}