import { useState, useEffect } from "react";
import { getLogs, deleteLog } from "../utils/api";
import stardate from "../utils/stardate";

import Log from "../components/Log";

function HomePage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs().then((response) => {
      const sortedLogs = response.data.sort((a, b) => {
        return b.date - a.date;
      });
      setLogs(sortedLogs);
    });
  }, []);

  function delLog(id) {
    deleteLog(id).then(() => {
      setLogs(logs.filter((item) => item._id !== id));
    });
  }

  return (
    <div>
      <h1 className="title">Stardate {stardate()}</h1>
      {logs.map((log) => (
        <Log log={log} delete={delLog}></Log>
      ))}
    </div>
  );
}

export default HomePage;
