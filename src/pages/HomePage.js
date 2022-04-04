import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { insertLog } from "../api";
import { getLogs } from "../api";

function HomePage() {
  const [newLog, setNewLog] = useState("");
  const [logs, setLogs] = useState([]);

  function handleChange(event) {
    setNewLog(event.target.value);
  }

  function insert() {
    insertLog(newLog).then((response) => {
      console.log(response);
    });
  }

  useEffect(() => {
    getLogs().then((response) => {
      setLogs(response.data)
    })
  }, [])


  return (
    <div>
      <ul>
        {logs.map((item) => <li key={item._id}>{item.text}</li>)}
      </ul>
      <Form>
        <FormGroup>
          <Label for="exampleText">Log</Label>
          <Input
            id="exampleText"
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

export default HomePage;
