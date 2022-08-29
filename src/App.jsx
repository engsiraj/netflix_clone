import React ,{ useState } from 'react'
import { Main, Title, Text, SmallText, Button, NavSection, HeaderMain, FormMain, FormSec, FormInput, FormButton, Separator, ProSec, ProCont, FaqSec, AccSec, AccItem, AccCont, HeadContainer, FooterSec, Card, Cards, FooterTitle} from './Styled Components/Util'
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



const Accordian = () => {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];


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
  const FooterData=[{
      id: 1,
      link: 'this is link',
    },
    {
      id: 2,
      link: 'this is link',
    },
    {
      id: 3,
      link: 'this is link',
    },
    {
      id: 4,
      link: 'this is link',
    },
    {
      id: 5,
      link: 'this is link',
    },
    {
      id: 6,
      link: 'this is link',
    },
    {
      id: 7,
      link: 'this is link',
    },

    {
      id: 8,
      link: 'this is link',
    },

    {
      id: 9,
      link: 'this is link',
    },
    {
      id: 10,
      link: 'this is link',
    },
    {
      id: 11,
      link: 'this is link',
    },
    {
      id: 12,
      link: 'this is link',
    },
    {
      id: 13,
      link: 'this is link',
    },
    {
      id: 14,
      link: 'this is link',
    },
    {
      id: 15,
      link: 'this is link',
    }, 
  ];

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



