import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const BucketListItems = ({
 listEditing,
 setListEditing,
 bucketListItem,
 setBucketListItem
}) => {
 const [listItem, setListItem] = useState([]);
 const fetchListItem = () => {
   axiosWithAuth()
     .get(`/buckets/${bucketListItem.id}`)
     .then(res => {
       console.log(res);
       setListItem(res.data);
     })
     .catch(err => console.log(err.response));
 };
 useEffect(() => {
   fetchListItem();
 }, []);
 const editItem = listItem => {
   listEditing(true);
   setListEditing(listItem);
 };
 const deleteItem = listItem => {
   axiosWithAuth()
     .delete(`/buckets/${bucketListItem.id}`)
     .then(res => {
       console.log("delete", res);
       setBucketListItem(listItem.filter(item => item.id !== listItem.id));
     })
     .catch(err => console.log(err.response));
 };
 return (
   <div>
     {listEditing.map(listItem => (
       <li onClick={() => editItem(listItem)}>
         <span>
           <span
             className="delete"
             onClick={e => {
               e.stopPropagation();
               deleteItem(listItem);
             }}
           >
             {" "}
             x
           </span>{" "}
           {listItem}
         </span>
       </li>
     ))}
   </div>
 );
};
export default BucketListItems;