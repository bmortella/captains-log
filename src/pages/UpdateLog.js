import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchLog, updateLog } from "../api";

import LogForm from "../components/LogForm";

function UpdateLog() {
  const [log, setLog] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchLog(id).then((response) => {
      setLog({ id: id, text: response.data.text });
    });
  }, []);

  function update(updatedLog) {
    updateLog(updatedLog.id, updatedLog.text).then((response) => {
      navigate("/");
    });
  }

  return <div>{log.text && <LogForm action={update} log={log} />}</div>;
}

export default UpdateLog;
