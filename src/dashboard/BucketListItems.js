import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import Logo from '../img/lystwhite.png';

const BucketListItems = ({ listOf, setList }) => {
 const [listToAdd, setListToAdd] = useState({ item_name: "", bucket_id: 33 });
 const addItem = e => {
   console.log("here", listOf);
   e.preventDefault();
   axiosWithAuth()
     .post("/items", listToAdd)
     .then(res => {
       console.log("props arent spreading", res);
       setList([...listOf, listToAdd]);
     })
     .catch(err => console.log(err));
   axiosWithAuth()
     .get("/items")
     .then(res => {
       console.log(res);
       setListToAdd(res.data);
     })
     .catch(err => console.log(err.response));
   // useEffect(() => {
   //   addItem();
   // }, []);
 };
 const deleteList = id => {
   axiosWithAuth()
     .delete(`/items/${id}`)
     .then(res => {
       console.log("delete", res);
       setList(listOf.filter(item => item.id !== id));
     })
     .catch(err => console.log(err.response));
 };
 const changeHandler = e => {
   setListToAdd({ ...listToAdd, item_name: e.target.value });
 };
 return (
    <StyledDiv> 
     <StyledImg className="logo" alt="logo" src={Logo}/>
     <StyledP> Your Bucket List </StyledP>
     <div>
       <form onSubmit={addItem}>
         <input
           type="text"
           name="name"
           onChange={changeHandler}
           value={listToAdd.item_name}
         />
         <button type="submit">Add List</button>
       </form>
     </div>
     {/* {listOf.map(list => {
       console.log("props", listOf);
       return (
         <div>
           {listOf.id}
           <button onClick={() => deleteList(list.id)}>Delete</button>
         </div>
       );
     })} */}
    </StyledDiv> 
 );
};

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

export default BucketListItems;