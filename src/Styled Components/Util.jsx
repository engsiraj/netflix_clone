import styled from "styled-components";





//text
export const Title = styled.p`
    color:#ffffff;
    font-size: 50px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -1.5px;
    margin-bottom: 15px;
    @media (max-width: 900px){
      font-size: 40px; }
    @media (max-width: 700px){
      font-size: 28px; }
`
export const Text = styled.p`
    color:#ffffff;
    font-size: 26px;
    font-weight: 400;
    @media (max-width: 900px){
      font-size: 20px; }
`
export const SmallText = styled.p`
    color:#ffffff;
    font-size:19px;
    font-weight: 400;
    @media (max-width: 900px){
      font-size: 18px; }
    `







//Sections

//Nav
export const NavSection = styled.div`
  display:flex;
  justify-content: space-between;
  margin:0px 42px;
  img{
    width:145px;
   
  }
  @media (max-width: 703px){
      margin:0px 0px;
}
  @media (max-width: 521px){
      margin:-10px 0px;
}
`


//Nav Button
export const Button = styled.button`
    display: inline-block;
    margin: 30px;
    padding: 5px 15px;
    background-color: #dc0510;
    border:none;
    border-radius:4px;
    outline:none;
    color:#ffffff;
    font-weight: 400;
    cursor:pointer;
`




//Header
export const Main = styled.div`
  background-image:radial-gradient(circle, rgba(0,0,0,0.345) 0%, rgba(0,0,0,0.9) 98%),url('https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/07cb94b1-5311-4059-9df9-8297cff0bede/PK-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
  background-size: cover;
  background-repeat:no-repeat;
  text-align: center;
`





//container 
export const HeadContainer = styled.div`
    height: 87vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:0 auto; 
    width:60%;
    @media (max-width: 930px){
      width:79%;}
    @media (max-width: 703px){
      width:95%;
}
`
export const HeaderMain = styled.div`
  width:80%;
  margin:0 auto;
`





//form
export const FormMain = styled.div`
  padding-top:20px;
  width:100%; 
`
export const FormSec = styled.div`
  margin-top:10px;
`
export const FormInput = styled.input`
  width:65%;
  padding:14px 6px;
  font-size: 19px;
  font-weight: 400;
  outline: none;
  @media (max-width: 900px){
      width:90%;
    }
  @media (max-width: 700px){
     padding:10px 6px; 
      font-size: 16px;}
`
export const FormButton = styled.button`
  width:25%;
  background-color: #dc0510;
  color:#ffffff;
  cursor:pointer;
  font-size: 20px;
  padding-top:13px;
  padding-bottom:15px;
  outline: none;
  border:1px solid #6f6f6f;
      @media (max-width: 900px){
      margin-top:20px;
      font-size: 18px;
      width:40%;}
      @media (max-width: 700px){
      padding-top:10px;
      font-size: 16px;
      padding-bottom:11px;
      margin-top:20px;
      width:35%;}
  :hover{
    background-color: #ed000c;
   }
   
`





//Products
export const ProCont = styled.div`
  padding:2% 6%;
  display:flex;
  justify-content: space-between;
  flex-direction: ${({layout})=>layout||'row'};
  img{
    width: 45%;
    @media(max-width:900px){width:75%;}
    @media(max-width:703px){width:80%;}
    @media(max-width:521px){width:100%;}
}
  @media (max-width: 900px){
    flex-direction: column;
    align-items: center;
    text-align:center;
    padding:10%;
    }
`
export const ProSec = styled.div`
 width: 50%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 @media (max-width: 900px){
       width: 90%;
  }
`




//Faq
export const FaqSec = styled.div`
  width:60%;
  margin: 0 auto;
  text-align: center;
  margin-top:50px;
  margin-bottom:50px;
  color:white;
  
  @media (max-width: 900px){
  width:80%; }
   @media (max-width: 703px){
       width: 95%;    
   }
   @media (max-width: 521px){
       width: 100%;    
   }
`
export const AccSec = styled.div`
  max-width: 100%;
  margin: 2rem auto;
  text-align: left;
`
export const AccItem = styled.div`
  margin-bottom:8px;
  padding: 15px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: #303030;
`
export const AccCont = styled.div`
  margin-top:-7px;
  padding: 20px;
  background-color:#303030;
  margin-bottom: 2px;
`






//footer
export const FooterSec = styled.div`
  margin:0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
  width: 70%;
`
export const FooterTitle = styled.p`
  font-size: 16px;
  color:#737373;
  :hover{
       text-decoration: underline;
    }
`
export const Card = styled.div`
   a{
    font-size: 13px;
    color:#737373;
    cursor:pointer;
    text-decoration: none;
    :hover{
       text-decoration: underline;
    }
  } 
  `
export const Cards = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 0.5rem;
  margin-bottom: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 900px){
    grid-template-columns: repeat(3, 1fr); 
  }
  @media (max-width: 600px){
    grid-template-columns: repeat(2, 1fr); 
  }
`




//separator
export const Separator = styled.div`
  height: 8px;
  background: #222222;
`

