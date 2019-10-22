import React from 'react';
import styled from "styled-components";
import Logo from '../img/bucketlistlogo.png';
import axiosWithAuth from '../utils/axiosWithAuth';

function Registration(props) {

    const [form, setForm] = React.useState({
        username: "",
        password: ""
      });
      const registration = e => {
        e.preventDefault();
        axiosWithAuth()
          .post("/users/register", form)
          
          .then(res => {
            console.log(res);
            // localStorage.setItem("token", res.data.payload);
            props.history.push("/login");
          })
          .catch(err => {
            console.log(err.response);
            setForm({
              username: "",
              password: ""
            });
          });
      };
     const handleChanges = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };  

  return (
    <StyledBody>    
     <StyledDiv>
      <StyledImg className="logo" alt="logo" src={Logo}/>   
       <StyledP>Registration Page</StyledP>
       <br/>
       <StyledForm onSubmit={registration}>
       <StyledP>
         <label htmlFor="username">Username:</label>
       </StyledP>    
        <input name="username" type="text" value={form.username}
         onChange={handleChanges}/>
       <StyledP>
        <label htmlFor="password">Password:</label>
       </StyledP>  
        <input name="password" type="text" value={form.password}
         onChange={handleChanges}/>
        <button type="submit">Register</button>
       </StyledForm>
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

const StyledForm = styled.form`
  display:flex;
  flex-direction: column;
  align-items:center; 
`;

export default Registration;