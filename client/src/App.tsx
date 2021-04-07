import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {

    const [data, setData] = useState({data: "old"})
    useEffect(function(){
        axios.get("/api/test")
          .then(res => {
              console.log("data received")
            setData(res.data);
          })
    },[])

    return (
        <div>
            <div className="p-6">Hello World</div>
            <div>{data.data}</div>
        </div>
    );
}

export default App;
