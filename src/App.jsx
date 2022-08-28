import React from 'react'
import { Main, Title, Text, SmallText,Button, TitleCenter, TextCenter,NavSection, } from './Styled Components/Util'
import logo from './asset/logo.png'

function App() {
 
  return (
    <>
      <Main>
        <Nav />
        <Header />
      </Main>
      {/* <Products />
      <Accordian />
      <Footer/>  */}
    </>
  )
}

export default App





const Nav = () => {
  return (
    <>
      <NavSection>
        <img src={logo} alt="NetFlix.logo" />
        <Button>sign in</Button>
      </NavSection>
    </>
  );
}
const Header = () => {
  return (
    <>
      <TitleCenter>Unlimited movies, TV shows, and more.</TitleCenter>
      <TextCenter>Watch anywhere. Cancel anytime. </TextCenter>
    </>
    
  );
}
const Products = () => {
  return (
    <>
      <Title>products </Title>
    </>
  );
}
const Accordian = () => {
  return (
    <>
    
      
    </>
  );
}
const Footer = () => {
  return (
    <>
      <Title>Footer</Title>
    
    </>
  );
}

