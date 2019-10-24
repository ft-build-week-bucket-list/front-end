import React from 'react';
import { Route, Link } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import styled from "styled-components";
import Logo from '../img/lystwhite.png';

function Home() {
  return ( 
  <StyledBody> 
   <StyledDiv> 
    <StyledImg className="logo" alt="logo" src={Logo}/>
    <StyledT>Welcome to the Bucket List</StyledT>
     <br/>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/registration"><button>Register</button></Link>     
   </StyledDiv>  
  </StyledBody>    
  );
}

//Styled Component
const StyledDiv = styled.div`
  background:#242943;
  width:100%;
  height:800px;
  display:flex;
  flex-direction: column;
  align-items:center;
`;

const StyledBody = styled.div`
  display:flex;
  justify-content:center;
`;

const StyledP = styled.text`
  color:#ffffff;
`;

const StyledImg = styled.img`
`; 

const StyledT = styled.text`
  color:#ffffff;
  font-size:20px;
`;

export default Home;
