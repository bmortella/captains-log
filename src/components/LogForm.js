import { useEffect, useState } from "react";

function LogForm(props) {
  const [log, setLog] = useState({
    id: props.log ? props.log.id : null,
    text: props.log ? props.log.text : "",
  });

  function handleChange(event) {
    setLog({ ...log, text: event.target.value });
  }

  function handleAction() {
    props.action(log);
  }

  return (
    <form>
      <h1 className="stardate">Log</h1>
      <textarea 
        id="textArea"
        name="text"
        type="textarea"
        onChange={handleChange}
        value={log.text}
        rows="10"
        spellcheck="false"
        className="log-form"
      />
      <div className="buttons">
        <a onClick={handleAction}>Submit</a>
      </div>
    </form>
  );
}

export default LogForm;
