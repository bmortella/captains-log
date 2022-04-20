import { useState, useEffect } from "react";
import { getLogs, deleteLog } from "../utils/api";
import stardate from "../utils/stardate";

import Log from "../components/Log";
import Modal from "../components/Modal";

function HomePage() {
  const [logs, setLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeLog, setActiveLog] = useState(null);

  useEffect(() => {
    getLogs().then((response) => {
      const sortedLogs = response.data.sort((a, b) => {
        return b.date - a.date;
      });
      setLogs(sortedLogs);
    });
  }, []);

  function openDelModal(log) {
    setActiveLog(log);
    setShowModal(true);
  }

  function delLog() {
    deleteLog(activeLog._id).then(() => {
      setLogs(logs.filter((item) => item._id !== activeLog._id));
      setShowModal(false);
    });
  }

  return (
    <div>
      <h1 className="title">Stardate {stardate()}</h1>
      <Modal
        show={showModal}
        action={() => delLog()}
        onCancel={() => setShowModal(false)}
      >
        Delete entry?
      </Modal>
      {logs.map((log) => (
        <Log log={log} delete={() => openDelModal(log)} key={log._id}></Log>
      ))}
    </div>
  );
}

export default HomePage;
