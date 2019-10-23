import React from 'react';


function BucketLists() {
  return (
    <div>
        <p>Make Your Bucket List</p>
        <form>
        <label>Travel</label>
        <input
        id="travel"
        type="text"
        name="travel">
        </input>
        <br></br>

        <label>Adventures</label>    
        <input
        id="adventures"
        type="text"
        name="adventures">  
        </input>
        <br></br>

        <label>DIY/Hobby</label>    
        <input
        id="hobby"
        type="text"
        name="hobby">   
        </input>
        <br></br>

        <label>Food and Drinks</label>    
        <input
        id="food"
        type="text"
        name="food">   
        </input>
        <br></br>

        <label>Photography</label>    
        <input
        id="photo"
        type="text"
        name="photo">   
        </input>
        <br></br>

        <label>Fitness</label>    
        <input
        id="fitness"
        type="text"
        name="fitness">   
        </input>
        <br></br>

        <button type="submit">Make a Bucket List</button>
        </form>
      
    </div>
  );
}

export default BucketLists;