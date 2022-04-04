import { useState, useEffect } from "react";
import { getLogs } from "../api";

function HomePage() {
 
  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    getLogs().then((response) => {
      setLogs(response.data)
    })
  }, [])

  return (
    <div>
      <ul>
        {logs.map((item) => <li key={item._id}>{item.text}</li>)}
      </ul>
    </div>
  );

}

export default HomePage;
