import { useNavigate } from "react-router-dom";
import { insertLog } from "../utils/api";
import stardate from "../utils/stardate";

import LogForm from "../components/LogForm";

function NewLog() {
  const navigate = useNavigate();

  function insert(newLog) {
    insertLog(newLog).then(() => {
      navigate("/");
    });
  }

  return (
    <div>
      <LogForm title={`New Log / ${stardate()}`} action={insert} />
    </div>
  );
}

export default NewLog;
