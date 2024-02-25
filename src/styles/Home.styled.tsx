import styled from "styled-components";

const FirstSection = styled.div`
 width:85%;
 font-family:Josefin Sans;
 padding:0% 7%;
 margin:0 auto;
 position:relative;

 height:100vh;
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
  line-height:140%;
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
 .imgContainer{
  width:38%;
  height:100%;
  position:absolute;
  right:0;
top:15%;
  
 }
 .imgContainer .img{
  width:100%;
  height:auto;
 }

`;
const SecondSection = styled.div`
 width:100%;
 height:90vh;
 margin:0 auto;
 padding:0 auto;
 display:flex;
 align-items:center;
 font-family:Josefin Sans;
 justify-content:space-evenly;

 .firstDiv{
  width:50%;
  height:100%;
  margin:0;
  padding:0;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
 }
 .firstDiv img{
  width:90%;
  height:auto;
 }
 .secondDiv{
  width:40%;
  height:100%;
  margin:0;
  padding:0;
  display:flex;
  gap:20px;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
 }
 .secondDiv span{
  font-size:150%;
  margin:0;
  padding:0;
  font-weight:bold;
  background: linear-gradient(to top left, #620063, #8a2be2);
  -webkit-background-clip: text; /* For Safari */
  background-clip: text;
  color: transparent;
 }
 .secondDiv h2{
  font-size:300%;
  margin:0;
  padding:0;
  font-weight:bold;
 }
 .secondDiv article{
  font-size:110%;
  line-height:130%;
  margin:0;
  padding:0;
 }
 .secondDiv section ul{
  width:100%;
  height:fit-content;
  display:flex;
  list-style:none;
  align-items:center;
  flex-wrap:wrap;
  gap:10px;
  justify-content:space-between;
 }
 .secondDiv section ul li{
  width:47%;
  height:fit-content;
  padding:10px 0px;
  margin: 0;
  font-weight:bold;
 }
 .secondDiv section ul li i{
  margin:0px 10px;
  color:purple;
  font-weight:bold;
 }
`;
export  { FirstSection, SecondSection } ;