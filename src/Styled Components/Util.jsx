import styled from "styled-components";

//Sections

//Nav
export const NavSection = styled.div`
  display:flex;
  justify-content: space-between;
  margin:0px 42px;
  img{
    width:145px;
  }
`
//Header
export const Main = styled.div`
  height: 100vh;
  background-image:radial-gradient(circle, rgba(0,0,0,0.345) 0%, rgba(0,0,0,0.9) 98%),url('https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/07cb94b1-5311-4059-9df9-8297cff0bede/PK-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
  background-size: cover;
  background-repeat:no-repeat;
  text-align: center;
`
export const HeaderMain = styled.div`
  padding-top:120px;
  width:40%;
  margin:0 auto;
`
//form
export const FormMain = styled.div`
  margin:0 auto;
  padding-top:20px;
  width:60%; 
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
`
export const FormButton = styled.button`
  width:25%;
  background-color: #dc0510;
  color:#ffffff;
  cursor:pointer;
  font-size: 26px;
  padding-top:8px;
  padding-bottom:12px;
   outline: none;
   border:1px solid #6f6f6f;
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
  }
`
export const ProSec = styled.div`
 width: 50%;
 display: flex;
 flex-direction: column;
 justify-content: center;
`








//separator

export const Separator = styled.div`
  height: 10px;
  background: #222222;
`


//text
export const Title = styled.p`
    color:#ffffff;
    font-size: 50px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -1.5px;
    margin-bottom: 15px;
`
export const Text = styled.p`
    color:#ffffff;
    font-size: 26px;
    font-weight: 400;
`
export const SmallText = styled.p`
    color:#ffffff;
    font-size:19px;
    font-weight: 400;
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
