import styled from 'styled-components';
import {Colors} from "../Colors/Colors"
const Main = styled.header`
width: 100%;
position: fixed;
top:0;
left:0;
z-index:5;
background-color:#F5F5F5;
font-Family:Nunito;
height: fit-content;
padding: 0 auto;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;


.logoText{
 font-size:140%;
}

a{
 text-decoration: none;
 color: inherit;
 font-weight:bold;
}

a:hover{
 color:purple;
 transition:1s;
}
.lastLink{
 background-color: ${Colors.primary_color.color100};
 padding:15px 35px;
 border-radius:30px;
 color:white;
}
.lastLink:hover{
 background-color:white;
 color:purple;
}

@media screen and (max-width: 900px) {

 display:none;
}
`;

const Section = styled.section`
width: 15%;
height: auto;
padding: 0;
margin: 0;
display: flex;
align-items: center;
justify-content: center;

span{
 font-size:110%;
 color:purple;
}
img{
 width: 35%;
 margin: 0;
 padding: 0;
 height: auto;
}
`;
const Nav = styled.nav`
width: 70%;
height: 100%;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
a{
 padding: 10px 20px;
}
`;
const MobileHeader =styled.div`

width: 95%;
position: fixed;
top:0;
left:0;
z-index:5;
background-color:#F5F5F5;
font-Family:Nunito;
height: fit-content;
padding: 0 auto;
padding-inline:0%;
margin: 0 auto;
display: none;
align-items: center;
justify-content: center;
gap:0px;

section:nth-of-type(1){
width: 50%;
height: 100%;
padding: 0;
margin: 0;
display: flex;
align-items: center;
justify-content: left;

}
section:nth-of-type(2){
 width: 40%;
 height: 100%;
 padding: 0;
 margin: 0;
 display: flex;
 align-items: center;
 justify-content: right;
 
 }

span{
 font-size:110%;
 color:purple;
}
img{
 width: 40%;
 margin: 0;
 padding: 0;
 height: auto;
}
 i{
 font-size:250%;
}


@media screen and (max-width:900px){
 display:flex;
}
`;


export { Main, Section, Nav, MobileHeader } ;