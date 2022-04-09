import { Link } from "react-router-dom";

function Log(props) {
  return (
    <div>
      <div class="lcars-text-bar">
        <span>{props.log.stardate}</span>
      </div>
      <p>{props.log.text}</p>
      <div className="buttons buttons-right">
        <Link to={`/updateLog/${props.log._id}`} className="bluey">
          Edit
        </Link>
        <button className="tomato" onClick={() => props.delete(props.log._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Log;
