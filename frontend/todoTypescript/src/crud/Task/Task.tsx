import { useState,useEffect } from "react"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Task.css";
import Update from "../updateItem/Update";
import AddItem from "../addItems/AddItem";

function Task() {
  // let items:string[]=[];
  const { _id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [itemId, setItemId] = useState("");
  const [title,setTitle]= useState("");

  interface taskelements {
    _id: string;
    item: string;
    description: string;
  }

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.post("http://localhost:9090/read", { Id: _id });
      console.log(res);
            setTitle(res.data.title)
            setTasks(res.data.task);
        
    };
    loadData();
  }, []);
  const remove = async(refId:string)=>{
    const response = await axios.delete("http://localhost:9090/delete",{data:{Id:_id,itemId: refId}});
    if(response.status==200){

        alert("delted");
    }
}
  const items = tasks && tasks.length>0 ?
  (tasks.map((e: taskelements) => {
    return (
      <div
        className="item"
        key={e._id}
        style={{ borderColor: itemId === e._id ? "blue" : "white" }}>
        id:{e._id}
        <br />
        item:{e.item}
        <br />
        description:{e.description}
        <br />
        <button onClick={() =>{refData(e)}} >Select</button>
        <button onClick={()=>{remove(e._id)}} >Delete it!</button>
      </div>
    );
  })):(<div>No items to display</div>)
  const refData = (val: taskelements) => {
    setItemId(val._id);
    console.log(val._id);
  };

  return (
    <div className="container">
      <h1>Project:{title}</h1>
      <br />

      <div className="taskContainer">
        <Update spaceId={_id || ""} selectedId={itemId || ""} />
        <AddItem docId={_id || ""} />

        <ul>
          {items}
        </ul>
      </div>
    </div>
  );
}

export default Task;
