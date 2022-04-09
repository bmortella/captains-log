import { useState } from "react";

function LogForm(props) {
  const [log, setLog] = useState({
    id: props.log ? props.log.id : null,
    text: props.log ? props.log.text : "",
  });

  function handleChange(event) {
    setLog({ ...log, text: event.target.value });
  }

  function handleAction(event) {
    event.preventDefault();
    props.action(log);
  }

  return (
    <form>
      <h1 className="title">Log</h1>
      <textarea
        id="textArea"
        name="text"
        type="textarea"
        onChange={handleChange}
        value={log.text}
        rows="10"
        spellCheck={false}
        className="log-form"
      />
      <div className="buttons buttons-right">
        <button onClick={handleAction}>Submit</button>
      </div>
    </form>
  );
}

export default LogForm;
