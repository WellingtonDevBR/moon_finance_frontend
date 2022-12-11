import Logo from '../../assets/Logo.svg'
import Poster from '../../assets/Poster.svg'
import { 
  AppContainer, 
  Button, 
  CircleContainerBottomLeft,
  CircleContainerRightTop,
  FooterSeparator, 
  FormOptions, 
  HomeContainer, 
  Input, 
  PosterContainer, 
  SocialMediaButton, 
  SocialMediaContainer, 
  MainFormContainer 
} from './styles'
import { GlobalStyle } from '../../styles/global'
import { faFacebookF, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Home() {
  return (
    <HomeContainer>
      <CircleContainerBottomLeft />
      <CircleContainerRightTop />
      <AppContainer>
        <PosterContainer>
          <img src={Poster} alt="Poster mostrando diversas aplicações e uma pessoa utilizando-os" />
        </PosterContainer>
        <MainFormContainer>
          <span><img src={Logo} alt="A Imagem representa a lua" /> MOON FINANCE</span>
          <h1>Login to your account</h1>
          <p>Please, Enter the details to continue with the app</p>
          <Input placeholder="Email"/>
          <Input placeholder="Password" type={'password'}/>
          <FormOptions>
            <span><input type="checkbox" />remember me</span>
            <span>Forgot password?</span>
          </FormOptions>
          <Button>SIGN IN</Button> 
          <FooterSeparator>
            <span>
              OR
            </span>
          </FooterSeparator>
          <SocialMediaContainer>
            <SocialMediaButton  backgroundColor='#ffffff'>
              <FontAwesomeIcon icon={faApple} fontSize={32} color='black'/>
            </SocialMediaButton>
            <SocialMediaButton backgroundColor='#4267B2'>
              <FontAwesomeIcon icon={faFacebookF} fontSize={26}/>
            </SocialMediaButton>
            <SocialMediaButton backgroundColor='#EA4335'>
              <FontAwesomeIcon icon={faGoogle} fontSize={26}/>
            </SocialMediaButton>
          </SocialMediaContainer>
          <p>Don't have an account? <a href="#">Sign Up</a></p>
        </MainFormContainer>
        <GlobalStyle />
      </AppContainer>
    </HomeContainer>
  )
}

