// import React, { useState, useEffect } from "react";
// import axiosWithAuth from "../utils/axiosWithAuth";
// import BucketListItems from './BucketListItems';

// const initialBuckets = {
//        title: "",
//        id: "",
//        completed: false
//  };

// const List = ({ lists, updateLists }) => {
//  console.log(lists);
//  const [editing, setEditing] = useState(false);
//  const [listEditing, setListEditing] = useState(false);
//  const [bucketToEdit, setBucketToEdit] = useState(initialBuckets);
//  const [bucketListItem, setBucketListItem] = useState([]);
//  const editBucket = bucket => {
//    setEditing(true);
//    setBucketToEdit(lists);
//  };
//   // axiosWithAuth()
//    //   .post("/api/bucketlist", list)
//    //   .then(res => {
//    //     updateLists(bucketToEdit);
//    //   });
// const editListItem = listItem => {
//    setEditing(true);
//    setListEditing()
// }
//  const saveEdit = e => {
//    e.preventDefault();
//    axiosWithAuth()
//      .put(`/buckets/${bucketToEdit.id}`, bucketToEdit)
//      .then(res => {
//        updateLists([
//          ...lists.filter(list => list.id !== bucketToEdit.id),
//          res.data
//        ]);
//        setEditing(false);
//      })
//      .catch(err => console.log(err.response));
//  };
//  const deleteBucket = list => {
//    axiosWithAuth()
//      .delete(`/buckets/${list.id}`)
//      .then(res => {
//        console.log("delete", res);
//        updateLists(lists.filter(item => item.id !== list.id));
//      })
//      .catch(err => console.log(err.response));
//  };
//  return (
//      <div>
//    <ul>{lists.map(list => (
//        <li onClick={() => editBucket(list)}>
//        <span>
//        <span className="delete" onClick={e => {
//            e.stopPropagation();
//            deleteBucket(list);
//        }}
//        >DELETE</span>
//        {bucketToEdit.title}
//        </span>
//        </li>
//    ))}
//        </ul>
//  }
// {editing && (
//   <form onSubmit={saveEdit}>
//     <input
//       onChange={e => setBucketToEdit({ ...bucketToEdit, title: e.target.value })}
//       value={bucketToEdit.title}
//     />
//    <div className="button-row">
//        <button type="submit">save</button>
//        <button onClick={() => setEditing(false)}>cancel</button>
//    </div>
//    <div>
//        <ol>
//            {bucketListItem.map(listItem => (
//                <BucketListItems listEditing={listEditing} setListEditing={setListEditing} bucketListItem={bucketListItem} setBucketListItem={setBucketListItem} />
//            ))}
//        </ol>
//    </div>
//  </form>)}
// </div>
// )}
// export default List;
