import styled from "styled-components";


const Span = styled.span`
 font-size:150%;
 margin:0;
 padding:0;
 font-weight:bold;
 background: linear-gradient(to top left, #620063, #8a2be2);
 -webkit-background-clip: text; /* For Safari */
 background-clip: text;
 color: transparent;

`;
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
  color:gray;
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
 height:120vh;
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
  color:gray;
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
  color:gray;
  font-weight:bold;
 }
 .secondDiv section ul li i{
  margin:0px 10px;
  color:purple;
  font-weight:bold;
 }
`;
const ThirdSection = styled.div`
 width:85%;
 height:90vh;
 margin:0 auto;
 padding:0% 7%;
 display:flex;
 font-family:Josefin Sans;
 flex-direction:column;
 align-items:flex-start;
 justify-content:center;

 .firstDiv{
  width:40%;
  height:fit-content;
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  gap:20px;
 }
 .firstDiv h1{
  font-size:300%;
  margin:0;
  padding:0;
  font-weight:bold;
 }

 .secondDiv{
  width:100%;
  height:70%;
  margin:0;
  padding:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
 }
 .secondDiv .grid{
  width:20%;
  height:68%;
  display:flex;
  // background-color:purple;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:15px;
  border-radius: 30px;
  transform: skewY(-7deg);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  
 }

 .grid .counterGrid{
  transform: skewY(7deg); 
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:5px;
 }
 .grid .counterGrid i{
  font-size:300%;
  color:purple;
 }
 .grid .counterGrid article{
  width:100%;
  text-align:center;
  line-height:130%;
  margin-bottom:20px;
 }
 .grid .counterGrid a{
  text-decoration:none;
  color:inherit;
 }
 .grid:hover{
  background-color:purple;
  transition:1.5s;
  color:white;
 }
 



`;
export  { Span, FirstSection, SecondSection, ThirdSection } ;