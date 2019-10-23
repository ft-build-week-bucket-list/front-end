import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import List from "./List";

const BucketLists = () => {
 const [bucketList, setBucketList] = useState([]);
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
 return (
   <div>
    <h1>Your Bucketlist</h1>
     <List lists={bucketList} updateLists={setBucketList} />
   </div>
 );
};
export default BucketLists;