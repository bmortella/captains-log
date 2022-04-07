import { Link } from "react-router-dom";

function Log(props) {
  return (
    <div>
      <div class="lcars-text-bar">
        <span>{props.log.stardate}</span>
      </div>
      <p>{props.log.text}</p>
      <div className="buttons edit-delete">
        <Link to={`/updateLog/${props.log._id}`} className="bluey">
          Edit
        </Link>
        <a className="tomato" onClick={() => props.delete(props.log._id)}>
          Delete
        </a>
      </div>
    </div>
  );
}

export default Log;
