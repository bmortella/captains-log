import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
    <Form>
      <FormGroup>
        <Label for="textArea">Log</Label>
        <Input
          id="textArea"
          name="text"
          type="textarea"
          onChange={handleChange}
          value={log.text}
        />
      </FormGroup>
      <Button onClick={handleAction}>Submit</Button>
    </Form>
  );
}

export default LogForm;
