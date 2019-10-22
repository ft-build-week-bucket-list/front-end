import React from 'react';
import { Route, Link } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import styled from "styled-components";
import Logo from '../img/bucketlistlogo.png';

function Home() {
  return ( 
  <StyledBody> 
   <StyledDiv> 
    <StyledImg className="logo" alt="logo" src={Logo}/>
    <StyledP>Welcome to the Bucket List</StyledP>
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

export default Home;
