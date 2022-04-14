import { Link } from "react-router-dom";

function Log(props) {
  return (
    <div>
      <div className="lcars-text-bar">
        <span>{props.log.stardate}</span>
      </div>
      <p>{props.log.text}</p>
      {props.log.image && <img src={props.log.image} className="pics" />}
      <div className="buttons buttons-right">
        <Link to={`/updateLog/${props.log._id}`} className="bluey">
          Edit
        </Link>
        <button className="tomato" onClick={() => props.delete()}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Log;
