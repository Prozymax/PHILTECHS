import styled from "styled-components";

const FirstSection = styled.div`
 width:85%;
 font-family:Josefin Sans;
 padding:0% 7%;
 margin:0 auto;

 height:80vh;
 display:flex;
 flex-direction:column;
 align-items:flex-start;
 justify-content:center;

 a{
  text-decoration: none;
  color: inherit;
  font-weight:bold;
 }

 .firstDiv{
  width:60%;
  padding:0;
  margin:0;
  height:fit-content;
 
 }
 .firstDiv h1{
  font-size:450%;
  line-height:130%;
 }
 span:nth-of-type(1){
  margin-left:15px;
  background: linear-gradient(to top right, #620063, #8a2be2);
  -webkit-background-clip: text; /* For Safari */
  background-clip: text;
  color: transparent;
 }
 span:nth-of-type(2){
  background: linear-gradient(to top left, #620063, #8a2be2);
  -webkit-background-clip: text; /* For Safari */
  background-clip: text;
  color: transparent;
 }
 .secondDiv{
  width:40%;
  margin:-3% 0px 0px 0px ;
  padding:0;
  display:flex;
  height:fit-content;
 flex-direction:column;
 align-items:flex-start;
 justify-content:center;
 gap:20px;
 }
 .secondDiv article{
  margin:0;
  padding:0;
 }
 .secondDiv section{
  display:flex;
  gap:20px;
  flex-direction:row;
  align-items:flex-start;
  justify-content:center;
 }
 .secondDiv section a{
  background-color:purple;
  padding:17px 40px;
  color:white;
  font-size:110%;
  border-radius:30px;
 }

`;
export  { FirstSection } ;