import { Container, HamburguerContainer, HeaderContainer, NavigationContainer } from "./styles";
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  isSiderBarOpen: boolean;
  onHandleSideBar: () => void;
}


export function Sidebar({ isSiderBarOpen, onHandleSideBar }: HeaderProps) {

  return (
    <Container open={isSiderBarOpen}>
      <HeaderContainer>
        <span><img src={logo} alt="ig.news" />MOON FINANCE</span>    
        <HamburguerContainer onClick={onHandleSideBar}>
          <FontAwesomeIcon icon={faBars} fontSize={24} color={'#E0E0E0'}/>
        </HamburguerContainer>    
      </HeaderContainer>
      <NavigationContainer>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
        <NavLink to={'/customer'}>Customer</NavLink>
        <NavLink to={'/supplier'}>Supplier</NavLink>
        <NavLink to={'/product'}>Product</NavLink>
        <NavLink to={'/region'}>Region</NavLink>
        <NavLink to={'/platform'}>Platform</NavLink>
        <NavLink to={'/marketplace'}>Marketplace</NavLink>
        <NavLink to={'/order'}>Order</NavLink>
        <NavLink to={'/stock'}>Stock</NavLink>
      </NavigationContainer>
    </Container>
  )
}