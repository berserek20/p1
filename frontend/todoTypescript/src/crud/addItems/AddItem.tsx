import  { useState } from "react";
import axios from "axios";

interface id {
    docId:string
}
function AddItem({docId}:id) {
    const [item, setItem] = useState("");
  const [description, setDescription] = useState("");


  

  const SubmitValue = async() => {

    const resp =await axios.put("http://localhost:9090/", {
        Id:docId,
        item: item,
        description: description,
    });
    alert(resp.data);
  };
  return (
    <div>
      <h3>Add Items</h3>

        
        
        
        <form onSubmit={SubmitValue}>
          

          
        <input 
                    type="text"
                    name="item-entry"
                    value={item}    
                    placeholder="Item Entry"
                    onChange={(e)=>setItem(e.target.value)}/>
                    
                    <textarea 
                    name="description"
                    value={description}    
                    placeholder="description"
                    onChange={(e)=>setDescription(e.target.value)}/>


          <button type="submit">Add Item</button>
        </form>
    </div>
  )
}

export default AddItem;