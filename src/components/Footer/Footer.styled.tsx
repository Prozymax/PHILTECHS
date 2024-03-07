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
 align-items:flex-start;
 justify-content:center;
 flex-direction:column;

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

`;
const FooterHeading = styled.h2`
  color:purple;
`;

export {Main, FooterHeading}