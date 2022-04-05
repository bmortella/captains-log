import { useNavigate } from "react-router-dom";
import { insertLog } from "../api";

import LogForm from "../components/LogForm";

function NewLog() {
  const navigate = useNavigate();

  function insert(newLog) {
    insertLog(newLog.text).then((response) => {
      navigate("/");
    });
  }

  return (
    <div>
      <LogForm action={insert} />
    </div>
  );
}

export default NewLog;
