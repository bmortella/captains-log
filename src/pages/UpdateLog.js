import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchLog, updateLog } from "../utils/api";

import LogForm from "../components/LogForm";

function UpdateLog() {
  const [log, setLog] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchLog(id).then((response) => {
      setLog({ id: id, text: response.data.text, image: response.data.image });
    });
  }, []);

  function update(updatedLog) {
    updateLog(updatedLog).then(() => {
      navigate("/");
    });
  }

  return <div>{log && <LogForm action={update} log={log} />}</div>;
}

export default UpdateLog;
