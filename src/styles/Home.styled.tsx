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
background-color:#F5F5F5;
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
 @media screen and (max-width: 900px) {
  width:100%;
  padding-inline:7%;


  .firstDiv{
    width:100%;  
  }
  .firstDiv h1{
    font-size:230%;
  }
  .secondDiv{
    width:100%;
  }
  .imgContainer{
    display:none;
  }

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
 background-color:#F5F5F5;

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

 @media screen and (max-width: 900px) {
     flex-direction:column-reverse;
     height:fit-content;
     margin:0 auto;
     width:100%;
     padding:20px;
     padding-inline:7%;
     gap:30px;
     padding-block:50px;


     .firstDiv{
      width:100%;
      margin:0 auto;
      padding:10px;
      gap:20px;
     }
     .secondDiv{
      width:100%;
      margin:0 auto;
      padding:10px;
     }
     .secondDiv section ul{
      width:100%;
      margin:0 auto;
      padding:20px 0px 20px 0px ;
      
     }
     .secondDiv h2{
      font-size:230%;
      line-height:120%;
     }
 }
`;
const ThirdSection = styled.div`
 width:85%;
 height:120vh;
 margin:0 auto;
 padding:0% 7%;
 display:flex;
 font-family:Josefin Sans;
 flex-direction:column;
 align-items:flex-start;
 justify-content:center;
 background-color:#F5F5F5;

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
  height:55%;
  display:flex;
  // background-color:purple;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:0px 20px;
  position:relative;
  border-radius: 30px;
  transform: skewY(-7deg);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  z-index:2;
  
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
 .counterGrid  i{
  font-size:300%;
  color:purple;
  z-index:5;
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
  // background-color:purple;
  transition:0.5s;
  color:white;
 }
 
 .grid::before {
  content: '';
  position: absolute;
  transform: skewY(-7deg);
  transform: rotateY(-9deg);
  width:0;
  height: 0;
  border-radius: 30px;
  top:0;
  background-color: purple;
  transition: width 0.5s, height 0.5s; 
  z-index: -3;
}

.grid:hover::before {
  height: 100%; 
  width: 100%;
}

.grid:not(:hover)::before {
  height: 0; /* Reverse animation for height */
  width: 0; /* Reverse animation for width */
}

@media screen and (max-width: 900px) {
    height:fit-content;
    width:100%;
    padding-inline:7%;

  .firstDiv{
    width:100%;
  }
  .firstDiv h1{
    font-size:250%;
    line-height:120%;
  }
  .secondDiv{
    height:fit-content;
    flex-direction:column;
    padding-block:50px;
    gap:50px;
  }
  .secondDiv .grid{
    max-width:400px;
    width:80%;
    max-height:400px;
    height:300px;
    padding-block:50px;
  }
}
`;
const FourthSection =styled.div`
width:90%;
height:90vh;
margin:0 auto;
padding:5% 5%;
display:flex;
align-items:center;
font-family:Josefin Sans;
justify-content:space-evenly;
background: linear-gradient(to right, rgba(245, 245, 245, 0.5)
,  rgba(128, 0, 128, 0.2));

.firstDiv{
 width:50%;
 height:90%;
 padding:10px;
 margin:0;
}
.firstDiv .list{
 width:100%;
 height:100%;
 justify-content:center;
 display:flex;
 align-items:center;
 flex-direction:column;
}
.firstDiv .list .listItem{
 width:100%;
 height:fit-content;
}

.firstDiv article {
 height: 0;
 overflow: hidden;
 margin:0px;
 border:none;
 padding:0px;
 font-size:120%;

 transition: height 0.3s ease;
}
.firstDiv .list .listItem h2{
 height:fit-content;
 margin:0;
 font-size:140%;
 cursor:pointer;
 padding-block:30px;
 display:flex;
 align-items:center;
 justify-content:flex-start;
 border-bottom:solid 0.1px purple;
}
.firstDiv .list .listItem h2:hover{
  color:purple;
}

.secondDiv{
 width:50%;
 height:fit-content;
 padding:10px;
 margin:0px 0px 0px 5%;
}
.secondDiv .caption{
  width:100%;
  height:fit-content;
 margin-bottom:30px;
}
.secondDiv .caption{
 font-size:150%;
}
.secondDiv .imgContainer{
 width:100%;
 height:auto;
}
.secondDiv .imgContainer .img{
 width:100%;
 height:100%;
 border-radius:30px;
}
@media screen and (max-width:900px){
  flex-direction:column-reverse;
  height:fit-content;
  width:100%;
  margin:0 auto;
  padding-block:50px;
  padding-inline:7%;

  .firstDiv{
    width:100%;
  }
  .secondDiv{
    width:100%;
  }
  .secondDiv .caption{
    font-size:170%;
   }
}

`;

const FifthSection =styled.div`
width:90%;
height:90vh;
margin:0 auto;
padding:5% 5%;
display:flex;
flex-direction:column;
align-items:center;
font-family:Josefin Sans;
justify-content:center;
background: linear-gradient(to right, rgba(245, 245, 245, 0.5)
,  rgba(128, 0, 128, 0.2));


.firstDiv{
  width:100%;
  height:fit-content;
  height:fit-content;
  margin:0 auto;
  padding:20px;
  display:flex;
flex-direction:column;
align-items:center;
font-family:Josefin Sans;
justify-content:center;

}
.firstDiv h1{
  font-size:300%;
}
.secondDiv{
  width:103%;
  height:65%;
  margin:0 auto;
  padding:0px;
  display:flex;
align-items:center;
font-family:Josefin Sans;
justify-content:space-evenly;
}
.secondDiv .rollerItem{
  width:25%;
  height:fit-content;
  border-radius:30px;
  background-color:white;
  padding:50px 20px;
  gap:20px;
}
.secondDiv .rollerItem section:nth-of-type(1){
  margin-bottom:20px;
}
.secondDiv .rollerItem section:nth-of-type(1) i{
  font-size:350%;
  margin-bottom:20px;
}
.secondDiv .rollerItem section:nth-of-type(1) article{
  font-size:110%;
  color:gray;
  line-height:115%;
}

.secondDiv .rollerItem section:nth-of-type(2){
 width:fit-content;
  display:flex;
  align-items:center;
  justify-content:flex-start;
}
.secondDiv .rollerItem section:nth-of-type(2) figure{
  width:20%;
  height:auto;
  margin:0px 10px;
  padding:0;
  border-radius:50%;
}
.secondDiv .rollerItem section:nth-of-type(2) figure img{
  width:100%;
  border-radius:50%;
  height:auto;
}

.secondDiv .rollerItem section:nth-of-type(2) article{
  width:80%;
  height:100%;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  flex-direction:colmun;
  align-items:center;
  justify-content:center;
}
.secondDiv .rollerItem section:nth-of-type(2) article h3{
  margin:0;
  font-size:130%;
  width:100%;
  text-align:left;
}
.secondDiv .rollerItem section:nth-of-type(2) article h4{
  margin:0;
  font-size:105%;  
  width:100%;
  color:gray;
  font-weight:400;
  text-align:left;
}
.thirdDiv{
  width:50%;
  height:auto;
  margin-top:5%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  gap:20px;
}

.thirdDiv p{
  display:flex;
  align-items:center;
  justify-content:center;
  width:30px;
  background-color:white;
  height:30px;
  border-radius:50%;
  padding:10px;
}

.thirdDiv p i{
  font-size:150%;
  font-weight:bold;
}

@media screen and (max-width:900px){
  height:fit-content;
  margin:0 auto;
  width:100%;
  padding-inline:7%;

  .secondDiv{
    flex-direction:column;
    gap:50px;
  }
  .secondDiv .rollerItem{
    width:90%;
    margin-block:20px;
    height:auto;
  }
  .firstDiv h1{
    font-size:250%;
    line-height:110%;
  }

}
`;
export  { Span, FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection } ;
