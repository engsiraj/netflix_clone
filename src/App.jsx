import React from 'react'
import { Main, Title, Text, SmallText, Button, NavSection, HeaderMain, FormMain, FormSec, FormInput, FormButton, Separator,ProSec, ProCont,FaqSec,FaqMain } from './Styled Components/Util'
import logo from './asset/logo.png'
import ProOne from './asset/pro1.png'
import ProTwo from './asset/pro2.png'
import ProThree from './asset/pro3.png'
import ProFour from './asset/pro4.png'

function App() {
 
  return (
    <>
      <Main>
        <Nav />
        <Header />
        <Form />
      </Main>
      <Separator />
      <Products />
      <Footer /> 
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

const Products = () => {
  const Prodata = [{
      id: 1,
    head: 'Enjoy on your TV.',
    para: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      image: ProOne,
    },
    {
      id: 2,
      head: 'Download your shows to watch offline.',
      para: 'Save your favorites easily and always have something to watch.',
      image: ProTwo,

    },
    {
      id: 3,
      head: 'Watch everywhere.',
      para: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      image: ProFour,
    },
    {
      id: 4,
      head: 'Create profiles for kids.',
      para: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
      image: ProThree,
    },
  ]
  const ProSections = Prodata.map(pro =>
    <div key = {pro.id}>
      <ProCont layout={pro.id % 2 === 0 &&'row-reverse'}>
        <ProSec>
          <Title>{pro.head}</Title>
          <Text>{pro.para}</Text>
        </ProSec>
        <img src={pro.image} alt="Image.NotFound" />
      </ProCont>
      <Separator />
    </div>
  )
    return (
      <>{ProSections}</>
  );
}
const Faq = () => {
  return (
    <FaqSec>
      <FaqMain>
        <Title>Faq</Title>
      </FaqMain>
    </FaqSec>
  );
}

