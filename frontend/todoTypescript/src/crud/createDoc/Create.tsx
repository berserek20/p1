import React, { useState } from "react";

import axios from "axios";
import './Create.css'
import RetrieveDeleteDoc from "../fetchDocs/RetrieveDeleteDoc";
const Create = () => {
 
  const [title, setTitle] = useState("");




  const SubmitValue = () => {
    axios.post( "http://localhost:9090/", {
      title: title
    });
  };

  return (
    <React.Fragment>
      <div className="createContainer">
        <div>

        <h3>Create Project</h3>
        <form onSubmit={SubmitValue}>
          <input
            type="text"
            name="title-entry"
            // value={title}
            placeholder="Title Entry"
            // ref={inputRef}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Add Project</button>
        </form>
        </div>
       

      </div>

        <RetrieveDeleteDoc />
    </React.Fragment>
  );
};

export default Create;