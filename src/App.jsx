import React ,{ useState } from 'react'
import { Main, Title, Text, SmallText, Button, NavSection, HeaderMain, FormMain, FormSec, FormInput, FormButton, Separator, ProSec, ProCont, FaqSec, AccSec, AccItem, AccCont, HeadContainer, FooterSec, Card, Cards, FooterTitle } from './Styled Components/Util'
import { Prodata, accordionData, FooterData } from './asset/Data'
import logo from './asset/logo.png'

 

function App() {
 
  return (
    <>
      <Main>
        <Nav />
        <HeadContainer>
          <Header />
          <Form />
        </HeadContainer> 
      </Main>
      <Separator />
      <Products />
      <Faq /> 
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

const Products = () => {
 
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



const Accordian = () => {
  

  return (
    <>
      <AccSec>
        {accordionData.map(({title, content }) => (
          <AccordionItem  title={title} content={content} />
        ))}
      </AccSec>
    </>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <AccItem onClick={() => setIsActive(!isActive)}>
        <Text>{title}</Text>
        <Text>{isActive ? '×' : '+'}</Text>
      </AccItem>
      {isActive && <AccCont><Text>{content}</Text></AccCont>}
    </>
  );
};

const Faq = () => {

  return (
    <>
      <FaqSec>
        <Title>Frequently Asked Questions</Title>
        <Accordian />
        <Form />
      </FaqSec>
      <Separator />
    </>
    
  );
}

const Footer = () => {
 
    const FooterLinks = FooterData.map(links => <Card key={links.id}>
      <a href="">{links.link}</a>
    </Card>
    );
    
    return (
      <>
        <FooterSec>
          <FooterTitle>this is Footer Section</FooterTitle>
          <Cards>
            {FooterLinks}
          </Cards>
          <FooterTitle>this is Footer Section</FooterTitle>
        </FooterSec>
      </>

    );
 }



