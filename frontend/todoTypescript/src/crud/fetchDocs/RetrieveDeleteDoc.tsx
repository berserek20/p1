import React,{ useState } from 'react'
import axios from 'axios'

import {Link  } from 'react-router-dom'; 

const RetrieveDeleteDoc = ()=>{

    interface docObject{
        _id: string,
        title:string,
        task: {
            _id:string,
            item: string,
            description: string
        }[]
    }
    const [list,setList]=useState([]);
  
    
    const fetchData= async ()=>{
        const res =  await axios.get("http://localhost:9090/")
        
            setList(res.data)
            console.log(res.data)     

        
    }
   
    

    const remove=async(value: docObject)=>{
        console.log(value._id)
        const val = await axios.delete("http://localhost:9090/",{data:{Id:value._id}})
    
        console.log(val);
        alert(val.data)
    }
        const cart =list.map((value : docObject)=>{
            return  (
                <div className='fetch'  key={value._id}>

                        {value._id}  | {value.title} 
                        <Link to={`/todos/${value._id}`}>More Details...</Link> 

                        
                        <button onClick={()=>{remove(value)}}>remove</button>
                    
                </div>
            
            )
    
        })
        
    
    return(
        <React.Fragment>
            <div className='retrieveContainer'>
                <h3>Fetch Projects</h3>
               
                {/* {Get Request} */}
                <button className='fetchbtn' onClick={fetchData}>fetch</button>

                <br />
                    <ul>

                        {cart}
                    </ul>


            </div>
        </React.Fragment>
    )
}
export default RetrieveDeleteDoc;