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
 background: linear-gradient(to right, rgba(245, 245, 245, 0.5)
 ,  rgba(128, 0, 128, 0.2));

 a{
  text-decoration:none;
  color:purple;

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
 background-color:#F5F5F5;
 padding-left:200px;
 box-shadow:0px 0px 15px  rgba(128, 0, 128, 0.2);
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
  width:60%;
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
@media screen and (max-width:900px){
  flex-direction:column;
  width:100%;
  height:fit-content;
  padding:0 auto;
  padding-inline:7%;
  margin:0 auto;
 
    
  .mainSection{
    align-items:flex-start;
    justify-content:flex-start;
    height:fit-content;
    width:100%;
    margin:0 auto;
    gap:30px;
    padding:30px 0px 30px 10px ;
  }
  .mainSection .firstDiv{
    flex-direction:column;
    margin:0 auto;
    width:90%;
    height:fit-content;
    align-items:flex-start;
    height:fit-content;
    gap:30px;
  }
  .mainSection .secondDiv{
    flex-direction:column;
     height:fit-content;
    margin:0 auto;
    width:90%;
    padding:0 auto;
    align-items:flex-start;
    gap:30px;
  }

  .mainSection section{
    width:100%;
    align-items:flex-start;
    height:fit-content;
}
.mainSection .secondDiv .subscribe{
  width:100%;
}
.mainSection .secondDiv .followUs nav{
  margin-top:10px;
}

}
`;
const FooterHeading = styled.h2`
  color:purple;
  @media screen and (max-width:900px){
   
    margin-bottom:5px;
  }  
`;

export {Main, FooterHeading}