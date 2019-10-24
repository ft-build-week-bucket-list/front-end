import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from "styled-components";
import Logo from '../img/lystwhite.png';

function Login(props) {
    const [form, setForm] = React.useState({
        username: "",
        password: ""
      });
      const login = e => {
        e.preventDefault();
        axiosWithAuth()
          .post("/users/login", form)
          .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.payload);
            props.history.push("/bucketlists");
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
      <StyledT>Login Page</StyledT>
      <br/>
       <StyledForm onSubmit={login}>
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
        <button type="submit">Submit</button>
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

const StyledT = styled.text`
  color:#ffffff;
  font-size:20px;
`;

export default Login;
