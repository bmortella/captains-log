import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { insertLog } from "../api";

function NewLog() {
  const [newLog, setNewLog] = useState("");

  function handleChange(event) {
    setNewLog(event.target.value);
  }

  function insert() {
    insertLog(newLog).then((response) => {
      console.log(response);
    });
  }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="textArea">Log</Label>
          <Input
            id="textArea"
            name="text"
            type="textarea"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={insert}>Submit</Button>
      </Form>
    </div>
  );
}

export default NewLog;
