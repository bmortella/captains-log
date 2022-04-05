import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { fetchLog, updateLog } from "../api";

function UpdateLog() {
  const [log, setLog] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchLog(id).then((response) => {
      setLog({ id: id, text: response.data.text });
    });
  }, []);

  function handleChange(event) {
    setLog({ ...log, text: event.target.value });
  }

  function update() {
    updateLog(log.id, log.text).then((response) => {
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
            value={log.text}
          />
        </FormGroup>
        <Button onClick={update}>Submit</Button>
      </Form>
    </div>
  );
}

export default UpdateLog;
