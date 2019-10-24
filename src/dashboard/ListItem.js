import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import BucketListItems from "./BucketListItems";
import styled from "styled-components";

const ListItem = ({ props, lists, updateLists, fetchList }) => {
 console.log(lists);
 const [editing, setEditing] = useState(false);
 const [bucketToEdit, setBucketToEdit] = useState({ title: "", id: 1 });
 const [bucketToAdd, setBucketToAdd] = useState({ title: "", user_id: 1 });
 const addItem = e => {
   e.preventDefault();
   axiosWithAuth()
     .post("/buckets", bucketToAdd)
     .then(res => {
       console.log(res);
       updateLists([...lists, bucketToAdd]);
     })
     .catch(err => console.log(err));
 };
 const editBucket = bucket => {
   setEditing(true);
   setBucketToEdit(bucket);
 };
 const deleteBucket = list => {
   axiosWithAuth()
     .delete(`/buckets/${list.id}`)
     .then(res => {
       console.log("delete", res);
       updateLists(lists.filter(item => item.id !== list.id));
     })
     .catch(err => console.log(err.response));
 };
 const saveEdit = e => {
   e.preventDefault();
   axiosWithAuth()
     .put(`/buckets/${bucketToEdit.id}`, bucketToEdit)
     .then(res => {
       updateLists([
         ...lists.filter(list => list.id !== bucketToEdit.id),
         bucketToEdit
       ]);
       setEditing(false);
     })
     .catch(err => console.log(err.response));
 };
 const changeHandler = e => {
   setBucketToAdd({ ...bucketToAdd, title: e.target.value });
 };
 const handlePageChange = id => {
   console.log("handlepage was called", id);
   axiosWithAuth()
     .get("/items")
     .then(res => {
       console.log(res);
       if (lists.id === bucketToEdit.id) {
         props.history.push(`/bucketlistitems/${id}`);
       }
     })
     .catch(err => console.log(err));
 };
 return (
  <StyledDiv> 
     <StyledP>Add Here</StyledP>
     <div>
       <form onSubmit={addItem}>
         <input
           type="text"
           name="title"
           onChange={changeHandler}
           value={bucketToAdd.title}
         />
         <button type="submit">Add Bucket List</button>
       </form>
     </div>
     {lists.map(list => {
       return (
         <div onClick={() => handlePageChange(list.id)}>
           <br/><StyledP>{list.title}</StyledP>
           <button onClick={() => editBucket(list)}>Edit</button>
           <button onClick={() => deleteBucket(list)}>Delete</button>
         </div> 
       );
     })}
     <br/>
     <StyledP>Edit Here</StyledP>
     <form onSubmit={saveEdit}>
       <input
         placeholder="Edit Bucket List"
         onChange={e =>
           setBucketToEdit({ ...bucketToEdit, title: e.target.value })
         }
         value={bucketToEdit.title}
       />
       <StyledBody>
         <button type="submit">save</button>
         <button onClick={() => setEditing(false)}>cancel</button>
       </StyledBody>
     </form>
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
  display:flex;
  justify-content:center;
`;

const StyledImg = styled.img`
`; 

export default ListItem;

