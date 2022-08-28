import React from 'react'
import { Main, Title, Text, SmallText, Button, NavSection, HeaderMain, FormMain, FormSec, FormInput, FormButton, Separator } from './Styled Components/Util'
import logo from './asset/logo.png'

function App() {
 
  return (
    <>
      <Main>
        <Nav />
        <Header />
        <Form/>
      </Main>
      <Separator />
    
      <Accordian />
      <Footer/>
    </>
  )
}

export default App





const Nav = () => {
  return (
    <>
      <NavSection>
        <img src={logo} alt="NetFlix.logo" />
        <Button>Sign in</Button>
      </NavSection>
    </>
  );
}
const Header = () => {
  return (
    <>
      <HeaderMain>
        <Title>Unlimited movies, TV shows, and more.</Title>
        <Text>Watch anywhere. Cancel anytime. </Text>
      </HeaderMain>
    </>
    
  );
}
const Form = () => {
  return (
    <>
      <FormMain>
        <SmallText>Ready to watch? Enter your email to create or restart your membership.</SmallText>
        <FormSec>
          <FormInput type='text' placeholder='Email address'/>
          <FormButton>Get Started › </FormButton>
        </FormSec>
      </FormMain>

    </>
  );
}

const Accordian = () => {
  return (
    <>
      <Title>Accordian</Title>

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

