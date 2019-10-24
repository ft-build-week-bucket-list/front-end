import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import ListItem from "./ListItem";
import styled from "styled-components";
import Logo from '../img/lystwhite.png';

const BucketLists = () => {
 const [bucketList, setBucketList] = useState([]);
 const [list, setList] = useState([]);
 const fetchBucketList = () => {
   axiosWithAuth()
     .get("/buckets")
     .then(res => {
       console.log(res);
       setBucketList(res.data);
     })
     .catch(err => console.log(err.response));
 };
 useEffect(() => {
   fetchBucketList();
 }, []);
 const fetchList = () => {
   axiosWithAuth()
     .get("/items")
     .then(res => {
       console.log(res);
       setList(res.data);
     })
     .catch(err => console.log(err.response));
 };
 useEffect(() => {
   fetchList();
 }, []);
 return (
  <StyledBody> 
    <StyledDiv> 
     <StyledImg className="logo" alt="logo" src={Logo}/>
     {console.log("uptown", list)}
     <StyledT>Make Your Bucket Lists</StyledT>
     <br/>
     <ListItem
       key={bucketList.id}
       lists={bucketList}
       updateLists={setBucketList}
     />
     </StyledDiv> 
   </StyledBody> 
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

const StyledT = styled.text`
  color:#ffffff;
  font-size:20px;
`;

export default BucketLists;