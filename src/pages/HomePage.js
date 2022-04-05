import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { getLogs, deleteLog } from "../api";

function HomePage() {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

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
            <Button onClick={() => navigate(`/updateLog/${item._id}`)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
      <Button onClick={() => navigate("/newLog")}>New log</Button>
    </div>
  );
}

export default HomePage;
