import styled from "styled-components";




export const NavSection = styled.div`
  display:flex;
  justify-content: space-between;
  margin:0px 42px;
  img{
    width:145px;
  }
`
export const Main = styled.div`
  height: 100vh;
  background-image:radial-gradient(circle, rgba(0,0,0,0.345) 0%, rgba(0,0,0,0.9) 98%),url('https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/07cb94b1-5311-4059-9df9-8297cff0bede/PK-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
  background-size: cover;
`




export const Title = styled.p`
    color:#ffffff;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: -2px;
`
export const TitleCenter = styled(Title)`
text-align: center;
`
export const Text = styled.p`
    color:#ffffff;
    font-size: 26px;
    font-weight: 400;
`
export const TextCenter = styled(Text)`
text-align: center;
`
export const SmallText = styled.p`
    color:#ffffff;
    font-size:19px;
    font-weight: 400;
`

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














