import { useState } from "react";

function LogForm(props) {
  const [log, setLog] = useState({
    id: props.log ? props.log.id : null,
    text: props.log ? props.log.text : "",
    image: props.log ? props.log.image : null,
  });
  const [selectedImage, setSelectedImage] = useState();

  function handleChange(event) {
    setLog({ ...log, text: event.target.value });
  }

  function _handleReaderLoaded(readerEvent) {
    setLog({ ...log, image: readerEvent.target.result });
  }

  function handleFileChange(event) {
    const image = event.target.files[0];
    if (image) {
      setSelectedImage(image.name);
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsDataURL(image);
    }
  }

  function handleRemoveImage(event) {
    event.preventDefault();
    setLog({ ...log, image: null });
    setSelectedImage(null);
  }

  function handleAction(event) {
    event.preventDefault();
    props.action(log);
  }

  return (
    <form>
      <h1 className="title">{props.title}</h1>
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
      {log.image && <img src={log.image} className="pics" />}
      <div className="buttons buttons-right">
        <p>{selectedImage}</p>
        {log.image && (
          <button className="tomato" onClick={handleRemoveImage}>
            Remove Image
          </button>
        )}
        <label for="image" className="almond">
          Upload image
        </label>
        <input
          type="file"
          name="image"
          id="image"
          accept=".jpeg, .png, .jpg"
          onChange={handleFileChange}
        />
        <button onClick={handleAction}>Submit</button>
      </div>
    </form>
  );
}

export default LogForm;
