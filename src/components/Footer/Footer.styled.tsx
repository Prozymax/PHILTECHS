import styled from "styled-components";

const Main = styled.div`
 width:100%;
 height:90vh;
 display:flex;
 margin:0;
 padding:0;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 font-Family:Nunito;
 background: linear-gradient(to right, rgba(255, 255, 255, 0.5),  rgba(128, 0, 128, 0.2));

 a{
  text-decoration:none;
 }

 .mainSection{
  width:80%;
 height:80%;
 display:flex;
 margin:0 auto;
 padding:0px 0px 0px 5%;
 border-radius:30px;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 background-color:white;
 padding-left:200px;
 }
.mainSection .firstDiv{
 width:95%;
 height:50%;
 display:flex;
 margin:0;
 padding:0;
 align-items:center;
 justify-content:center;
}

.mainSection .firstDiv .getInTouch{
 width:50%;
 height:100%;
 display:flex;
 margin:0;
 padding:0;
 gap:10px;
 align-items:flex-start;
 justify-content:center;
 flex-direction:column;


}
.mainSection .firstDiv .getInTouch p{
  margin:0;
}
.mainSection .firstDiv .info{
 width:50%;
 height:100%;
 margin:0;
 padding:0;
 display:flex;
 align-items:flex-start;
 justify-content:center;
 flex-direction:column;

}
.mainSection .firstDiv .info nav{
  display:flex;
  flex-direction:column;
  gap:10px;
  font-size:120%;
}
.mainSection .secondDiv{
 width:95%;
 height:50%;
 display:flex;
 margin:0;
 padding:0;
 align-items:center;
 justify-content:center;
}

.mainSection .secondDiv .followUs{
 width:50%;
 height:100%;
 display:flex;
 align-items:flex-start;
 margin:0;
 padding:0;
 justify-content:center;
 flex-direction:column;

}
.mainSection .secondDiv .followUs nav{
  display:flex;
  align-items:flex-start;
  justify-content:center;
  flex-direction:row;
  gap:20px;
  font-size:150%;
}
.mainSection .secondDiv .subscribe{
 width:50%;
 height:100%;
 display:flex;
 align-items:flex-start;
 margin:0;
 padding:0;
 justify-content:center;
 flex-direction:column;

}
.mainSection .secondDiv .subscribe nav{
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  gap:10px;
  font-size:130%;
}
.mainSection .secondDiv .subscribe nav input{
  height:40px;
  width:70%;
  background-color:whitesmoke;
  border:none;
  font-size:90%;
}
.mainSection .secondDiv .subscribe nav input:focus{
  outline:none;
}
.terms span{
  margin-right:8px;
  color:purple;
  font-weight:500;
  font-size:120%;
}
`;
const FooterHeading = styled.h2`
  color:purple;
  
`;

export {Main, FooterHeading}