import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { getLogs, deleteLog } from "../api";

function HomePage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs().then((response) => {
      setLogs(response.data);
    });
  }, []);

  function delLog(id) {
    deleteLog(id).then((response) => {
      setLogs(logs.filter((item) => item._id !== id));
    });
  }

  return (
    <div>
      <ul>
        {logs.map((item) => (
          <li key={item._id}>
            {item.text}
            <Button onClick={() => delLog(item._id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
