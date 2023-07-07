import React,{ useState } from 'react'
import axios from 'axios'

interface ids{
    spaceId:string,
    selectedId:string
}
const Update = ({spaceId,selectedId}:ids)=>{
    const [item,setItem]=useState("");
    const [description,setDescription]=useState("");

  

   
   
    const UpdateValue=()=>{
       
        axios.put("http://localhost:9090/update",{
            Id:spaceId,
            itemId:selectedId,
            item:item,
            description: description
        })
    }

       
    
        
    
    return(
        <React.Fragment>
            <div>
                <h3>update</h3>
            {/* {update request} */}
                <form onSubmit={UpdateValue}>
                <p>                     Select Item to Update
        </p>
                    <input 
                    type="text"
                    name="item-entry"
                    value={item}    
                    placeholder="Item Entry"
                    onChange={(e)=>setItem(e.target.value)}/>
                    
                    <input 
                    type="description"
                    name="description"
                    value={description}    
                    placeholder="description"
                    onChange={(e)=>setDescription(e.target.value)}/>


                    <button type="submit">Update Item</button>
                </form>
                
            </div>
        </React.Fragment>
    )
}

export default Update;